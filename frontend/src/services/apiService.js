// src/services/apiService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Update this if needed

// Create an Axios instance
const apiClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Utility function to get the token
const getToken = () => {
    const token = localStorage.getItem('token');
    console.log('Using Token:', token); // Debugging line
    return token;
};

const apiService = {
    register: async (userData) => {
        try {
            return await apiClient.post('/users/register', userData);
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Registration failed');
        }
    },
    login: async (credentials) => {
        try {
            return await apiClient.post('/users/login', credentials);
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Login failed');
        }
    },
    getUserProfile: async () => {
        const token = getToken();
        try {
            return await apiClient.get('/users/profile', {
                headers: { 'x-auth-token': token },
            });
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Failed to fetch profile');
        }
    },
    createWasteRequest: async (requestData) => {
        const token = getToken();
        try {
            return await apiClient.post('/waste-requests/request', requestData, {
                headers: { 'x-auth-token': token },
            });
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Failed to create request');
        }
    },
    getAllWasteRequests: async () => {
        const token = getToken();
        try {
            return await apiClient.get('/waste-requests/requests', {
                headers: { 'x-auth-token': token },
            });
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Failed to fetch waste requests');
        }
    },
    generateInvoice: async (invoiceData) => {
        const token = getToken();
        try {
            return await apiClient.post('/invoices/generate', invoiceData, {
                headers: { 'x-auth-token': token },
            });
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Failed to generate invoice');
        }
    },
    verifyCollection: async (verificationData) => {
        const token = getToken();
        try {
            return await apiClient.post('/driver/verify', verificationData, {
                headers: { 'x-auth-token': token },
            });
        } catch (error) {
            throw new Error(error.response?.data?.message || 'Failed to verify collection');
        }
    },
};

export default apiService;