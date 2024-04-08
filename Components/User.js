import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function Customer() {
    const [Customer, setCustomer] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/Customer')
            .then(res => { setCustomer(res.data); })
            .catch(err => { console.log(err); });
    }, []);

    return (
        <div>
            <h1>Customer</h1>
            <div className="result-container">
                {Customer.map(Customer => (
                    <div className="result-item" key={Customer.id}>
                        <h2>{Customer.Name}</h2>
                        <p><strong>Product:</strong> {Customer.Product}</p>
                        <p><strong>Deliverydate</strong> {Customer.Deliverydate}</p>

                    </div>
                ))}
            </div>
        </div>
    );
}
