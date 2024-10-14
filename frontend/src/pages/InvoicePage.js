import React, { useEffect, useState, useContext } from 'react';
import apiService from '../services/apiService';
import { AuthContext } from '../context/AuthContext';

const InvoicePage = () => {
    const { user } = useContext(AuthContext);
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        const fetchInvoices = async () => {
            try {
                // Assuming there's an endpoint for fetching user's invoices
                const response = await apiService.getAllInvoices(user.token);
                setInvoices(response.data);
            } catch (error) {
                console.error('Error fetching invoices:', error);
            }
        };
        fetchInvoices();
    }, [user]);

    return (
        <div>
            <h2>Your Invoices</h2>
            <ul>
                {invoices.map(invoice => (
                    <li key={invoice._id}>
                        Invoice ID: {invoice._id}, Amount: {invoice.amount}, Status: {invoice.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InvoicePage;
