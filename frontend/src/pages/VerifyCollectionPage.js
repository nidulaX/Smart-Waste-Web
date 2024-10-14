import React, { useState, useContext } from 'react';
import apiService from '../services/apiService';
import { AuthContext } from '../context/AuthContext';

const VerifyCollectionPage = () => {
    const { user } = useContext(AuthContext);
    const [verificationData, setVerificationData] = useState({
        wasteRequestId: '',
        verifiedWeight: 0,
        verifiedType: '',
    });

    const handleChange = (e) => {
        setVerificationData({ ...verificationData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await apiService.verifyCollection(verificationData, user.token);
            alert('Collection verified successfully!');
        } catch (error) {
            console.error('Error verifying collection:', error);
        }
    };

    return (
        <div>
            <h2>Verify Waste Collection</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="wasteRequestId"
                    placeholder="Waste Request ID"
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="verifiedWeight"
                    placeholder="Verified Weight (kg)"
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="verifiedType"
                    placeholder="Verified Type"
                    onChange={handleChange}
                    required
                />
                <button type="submit">Verify Collection</button>
            </form>
        </div>
    );
};

export default VerifyCollectionPage;
