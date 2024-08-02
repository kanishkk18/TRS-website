import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Mobiledetail.css';

const Mobiledetail = () => {
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    // Validate the form inputs before navigating to the next page
    navigate('/uploadimage');
  };

  return (
    <div className="mobile-detail">
       <h2>Describe Your Product</h2>
    <div className="mobile-form">
      <form onSubmit={handleNext}>
        <div className="form-group">
          <label htmlFor="brand">Brand*</label>
          <input className='' type="text" id="brand" name="brand" required />
        </div>
        <div className="form-group">
          <label htmlFor="title">Ad title*</label>
          <input type="text" id="title" name="title" required maxLength="70" />
        </div>
        <div className="form-group">
          <label htmlFor="additional-info">Additional information*</label>
          <textarea id="additional-info" name="additional-info" required maxLength="4096"></textarea>
        </div>
        <button className='mobile-next' type="submit">Next</button>
      </form>
    </div>
    </div>
  );
};

export default Mobiledetail;
