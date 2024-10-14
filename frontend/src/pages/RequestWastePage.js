import React, { useState, useContext } from 'react';
import apiService from '../services/apiService';
import { AuthContext } from '../context/AuthContext';

const RequestWastePage = () => {
    const { user } = useContext(AuthContext);
    const [bins, setBins] = useState([{ binType: 'food waste', weight: 0 }]);
    const [special, setSpecial] = useState(false);
    const [specialWasteType, setSpecialWasteType] = useState('');

    const handleBinChange = (index, e) => {
        const newBins = [...bins];
        newBins[index][e.target.name] = e.target.value;
        setBins(newBins);
    };

    const handleAddBin = () => {
        setBins([...bins, { binType: 'food waste', weight: 0 }]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const requestData = {
            bins: special ? [...bins, { binType: specialWasteType, weight: 0 }] : bins,
        };
        try {
            const response = await apiService.createWasteRequest(requestData);
            alert('Waste collection request created successfully: ' + response.msg);
        } catch (error) {
            console.error('Error creating waste request:', error);
            alert('Error creating waste request: ' + error.message);
        }
    };

    return (
        <div>
            <h2>Request Waste Collection</h2>
            <form onSubmit={handleSubmit}>
                {bins.map((bin, index) => (
                    <div key={index}>
                        <select name="binType" onChange={(e) => handleBinChange(index, e)} value={bin.binType}>
                            <option value="food waste">Food Waste</option>
                            <option value="paper waste">Paper Waste</option>
                            <option value="plastic waste">Plastic Waste</option>
                        </select>
                        <input
                            type="number"
                            name="weight"
                            placeholder="Weight (kg)"
                            onChange={(e) => handleBinChange(index, e)}
                            value={bin.weight}
                            required
                        />
                    </div>
                ))}
                <button type="button" onClick={handleAddBin}>Add Another Bin</button>
                <br />
                <input
                    type="checkbox"
                    checked={special}
                    onChange={(e) => setSpecial(e.target.checked)}
                />
                <label>Special Waste</label>
                {special && (
                    <select value={specialWasteType} onChange={(e) => setSpecialWasteType(e.target.value)}>
                        <option value="">Select Special Waste Type</option>
                        <option value="electronic waste">Electronic Waste</option>
                        <option value="medicine waste">Medicine Waste</option>
                    </select>
                )}
                <br />
                <button type="submit">Request Waste Collection</button>
            </form>
        </div>
    );
};

export default RequestWastePage;
