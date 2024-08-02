import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Jobdetail.css';

const Jobdetail = () => {
    const [formData, setFormData] = useState({
        salaryPeriod: '',
        positionType: '',
        salaryFrom: '',
        salaryTo: '',
        adTitle: '',
        additionalInfo: '',
    });

    const navigate = useNavigate();

    const handleButtonClick = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/saveForm', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                navigate('/Uploadimage');
            } else {
                console.error('Failed to save form data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="job-container">
            <h2>Describe Your Service </h2>
        <form onSubmit={handleSubmit} className="job-form" style={{marginTop:-20}}>
            <div>
                <label>Salary Period*</label>
                <div className="button-group" style={{marginTop:10}}>
                    {['Hourly', 'Monthly', 'Weekly', 'Yearly'].map((period) => (
                        <button
                            type="button"
                            key={period}
                            className={formData.salaryPeriod === period ? 'selected' : ''}
                            onClick={() => handleButtonClick('salaryPeriod', period)}
                        >
                            {period}
                        </button>
                    ))}
                </div>
            </div>
            <div>
                <label style={{marginTop:20}}>Position Type*</label>
                <div className="button-group" style={{marginTop:10}}>
                    {['Contract', 'Full-time', 'Part-time', 'Temporary'].map((type) => (
                        <button
                            type="button"
                            key={type}
                            className={formData.positionType === type ? 'selected' : ''}
                            onClick={() => handleButtonClick('positionType', type)}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </div>
            <div className="job-inputs">
            <div>
                <label>Salary From</label>
                <input type="text" name="salaryFrom" value={formData.salaryFrom} onChange={handleChange} />
            </div>
            <div>
                <label>Salary To</label>
                <input type="text" name="salaryTo" value={formData.salaryTo} onChange={handleChange} />
            </div>
            <div>
                <label>Ad Title*</label>
                <input type="text" name="adTitle" value={formData.adTitle} onChange={handleChange} />
            </div>
            <div>
                <label>Additional Information*</label>
                <textarea name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} />
            </div>
            </div>
            <button className='mobile-next' type="submit">Next</button>
        </form>
        </div>
    );
};

export default Jobdetail;
