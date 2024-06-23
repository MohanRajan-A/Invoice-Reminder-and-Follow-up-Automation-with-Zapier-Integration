
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InvoiceList = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await axios.get('/api/invoices');
        setInvoices(response.data);
      } catch (error) {
        console.error('Error fetching invoices:', error);
      }
    };
    fetchInvoices();
  }, []);

  const triggerAutomation = async (invoiceId) => {
    try {
      await axios.post('/api/invoices/trigger', { invoiceId });
      alert('Automation triggered successfully!');
    } catch (error) {
      console.error('Error triggering automation:', error);
    }
  };

  return (
    <div>
      <h2>Due Invoices</h2>
      <ul>
        {invoices.map((invoice) => (
          <li key={invoice.id}>
            {invoice.recipient} - ${invoice.amount} (Due: {invoice.dueDate})
            <button onClick={() => triggerAutomation(invoice.id)}>Trigger Automation</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvoiceList;
