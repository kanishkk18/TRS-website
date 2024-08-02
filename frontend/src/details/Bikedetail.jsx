import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Bikedetail.css';

const Form = () => {
  const [brand, setBrand] = useState('');
  const [year, setYear] = useState('');
  const [kmDriven, setKmDriven] = useState('');
  const [adTitle, setAdTitle] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    // Validate the form inputs before navigating to the next page
    navigate('/uploadimage');
  };

  return (
    <div className="bike">
        <h2>Add some details</h2>
    <div className="bike-container">
      <form onSubmit={handleNext}>
        <div className="bike-form">
          <label htmlFor="brand">Brand*</label>
          <select id="bike-brand" value={brand} onChange={(e) => setBrand(e.target.value)} required>
            <option value="" disabled>Select Brand</option>
            {/* Add your options here */}
            <option value="brand1">Yahama</option>
            <option value="brand2">Honda</option>
            <option value="brand3">Brand 3</option>
          </select>
        </div>
        <div className="bike-form">
          <label htmlFor="year">Year*</label>
          <input
            type="number"
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            required
          />
        </div>
        <div className="bike-form">
          <label htmlFor="kmDriven">Km Driven*</label>
          <input
            type="number"
            id="kmDriven"
            value={kmDriven}
            onChange={(e) => setKmDriven(e.target.value)}
            required
          />
        </div>
        <div className="bike-form">
          <label htmlFor="adTitle">Ad title*</label>
          <input
            type="text"
            id="adTitle"
            value={adTitle}
            onChange={(e) => setAdTitle(e.target.value)}
            maxLength="70"
            required
          />
        </div>
        <div className="bike-form">
          <label htmlFor="additionalInfo">Additional information*</label>
          <textarea
            id="additionalInfo"
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
            maxLength="4096"
            required
          ></textarea>
        </div>
        <button className='mobile-next' type="submit">Next</button>
      </form>
    </div>
    </div>
  );
};

export default Form;
