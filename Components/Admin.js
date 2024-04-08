import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function ResultManagement() {
    const [results, setResults] = useState([]);
    const [Name, setName] = useState('');
    const [Product, setProduct] = useState('');
    const [Deliverydate, setDeliverydate] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3001/Customer')
            .then(res => { setResults(res.data); })
            .catch(err => { console.log(err); });
    }, []);

    const handleAddResult = () => {
        axios.post('http://localhost:3001/Customer', {
            Name:Name,
            Product: Product,
            Deliverydate: parseInt(Deliverydate)
        })
        .then(res => { console.log(res); })
        .catch(err => { console.log(err); });
    };

    const handleDeleteResult = (resultId) => {
        axios.delete(`${resultId}`)
            .then(res => { console.log(res); })
            .catch(err => { console.log(err); });
    };

    return (
        <div className="container">
            <h1>Warehouse ManagementSystem </h1>

            <form onSubmit={handleAddResult}>
                <label>Name:</label><br/>
                <input type="text" value={Name} onChange={(e) => setName(e.target.value)} />
                <br />

                <label>Product:</label><br/>
                <input type="text" value={Product} onChange={(e) => setProduct(e.target.value)} />
                <br />

                <label>Deliverydate:</label><br/>
                <input type="number" value={Deliverydate} onChange={(e) => setDeliverydate(e.target.value)} />
                <br />

                <button type="submit">Add Customer</button>
            </form>

            <br />

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Product</th>
                        <th>Deliverydatee</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map(result => (
                        <tr key={result.id}>
                            <td>{result.Name}</td>
                            <td>{result.Product}</td>
                            <td>{result.Deliverydate}</td>
                            <td>
                                <button onClick={() => handleDeleteResult(result.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

