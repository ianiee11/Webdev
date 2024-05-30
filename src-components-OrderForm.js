import React, { useState } from 'react';
import axios from 'axios';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    subject: '',
    type: '',
    pages: 1,
    deadline: '',
    details: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://your-backend-url.herokuapp.com/api/orders', formData);
      alert('Order placed successfully');
    } catch (err) {
      console.error(err);
      alert('Error placing order');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Subject:
        <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
      </label>
      <label>
        Type of Document:
        <input type="text" name="type" value={formData.type} onChange={handleChange} required />
      </label>
      <label>
        Number of Pages:
        <input type="number" name="pages" value={formData.pages} onChange={handleChange} required />
      </label>
      <label>
        Deadline:
        <input type="date" name="deadline" value={formData.deadline} onChange={handleChange} required />
      </label>
      <label>
        Additional Details:
        <textarea name="details" value={formData.details} onChange={handleChange} required></textarea>
      </label>
      <button type="submit">Submit Order</button>
    </form>
  );
};

export default OrderForm;
