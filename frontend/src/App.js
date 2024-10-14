import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import UserDashboardPage from './pages/UserDashboardPage';
import DriverDashboardPage from './pages/DriverDashboardPage';
import RequestWastePage from './pages/RequestWastePage';
import InvoicePage from './pages/InvoicePage';
import VerifyCollectionPage from './pages/VerifyCollectionPage';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/admin-dashboard" element={<AdminDashboardPage />} />
                    <Route path="/user-dashboard" element={<UserDashboardPage />} />
                    <Route path="/driver-dashboard" element={<DriverDashboardPage />} />
                    <Route path="/request-waste" element={<RequestWastePage />} />
                    <Route path="/invoices" element={<InvoicePage />} />
                    <Route path="/verify-collection" element={<VerifyCollectionPage />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
