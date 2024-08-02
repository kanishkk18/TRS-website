import React from 'react';
import './Support.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Support() {
const navigate = useNavigate('');

const handleBack = () =>{
    navigate(-1);
};

  return (
    <div className='support'>
        <div className='support__container'>
        <header className="support-header">
            <div className="back-btn" onClick={handleBack}>
            <img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1719484750/CONFERIO/psw/yf86jzalzgkv9tqfeqru.svg" alt="" />
            </div>
        <p> TRS Help Center</p>
    <Link to="/Contact"><button className="contactbtn">Contact us</button></Link>
        </header>
        <main>
            <div className="support-main">
                <h1>How can we help you today?</h1>
            </div>
            <input type="search" placeholder='Search' id="support-search" />
        </main>
        </div>
    </div>
  )
}
