import React, { useState, useEffect } from 'react';
import './Service.css'

const WarehouseManagementSystem = () => {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    // Fetch inventory data from a backend API
    const fetchInventoryData = async () => {
      try {
        const response = await fetch('https://api.example.com/inventory');
        const data = await response.json();
        setInventory(data);
      } catch (error) {
        console.error('Error fetching inventory data:', error);
      }
    };

    fetchInventoryData();
  }, []);

  return (
    <div className='clr'>
        <center>Services us</center>
      <h1> Order Fulfillment: 
               WMS streamlines the order fulfillment process by optimizing picking, packing, and shipping operations. It helps reduce order processing times and improve order accuracy.</h1><br></br>
               <h1>Picking and Packing:
                      WMS optimizes picking routes, assigns tasks to warehouse staff, and ensures accurate picking and packing of orders. It may utilize technologies like barcode scanning to enhance efficiency.</h1><br></br>
                      <h1>Shipping and Transportation Management:
                         WMS integrates with transportation management systems to coordinate outbound shipments, generate shipping labels, and track deliveries.</h1><br></br>
      <ul>
        {inventory.map(item => (
          <li key={item.id}>{item.name} - Quantity: {item.quantity}</li>
        ))}
      </ul>
    </div>
  );
};

export default WarehouseManagementSystem;