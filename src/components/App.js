import React, { useEffect, useState } from 'react';
import apiService from '../services/apiService';
import './App.css'; // Import the CSS file

const App = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        apiService.getData().then(response => {
            console.log('Data received from API:', response);
            setData(response);
        });
    }, []);

    return (
        <div>
            <h1>Data from Backend API</h1>
            <table className="data-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default App;
