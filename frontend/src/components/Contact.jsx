import React from 'react';
import './Contact.css';
import { useNavigate } from 'react-router-dom';

export default function Support() {
    const navigate = useNavigate('');

const handleBack = () =>{
    navigate(-1);
};

  return (
    <div className="contact-container">
    <div className='support'>
        <div className='support__container'>
        <header className="support-header">
        <div className="back-btn" onClick={handleBack}>
            <img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1719484750/CONFERIO/psw/yf86jzalzgkv9tqfeqru.svg" alt="" />
            </div>
        <p> TRS Help Center</p>
        </header>
        <main>
            <div className="support-main">
                <h1>How can we help you today?</h1>
            </div>
            <input type="search" placeholder='Search' id="support-search" />
        </main>
        </div>
        <div className='contact-form'>
            <h2>Contact us</h2>
            <form action="https://formspree.io/your@email.com" method="POST">
            <input className='contact-input' type="text" name="name" placeholder="Name" />
            <input  className='contact-input' type="email" name="email" placeholder="Email" />
            <textarea  className='contact-sub' name="subject" placeholder="Subject" />
            <textarea className='contact-message' name="message" placeholder="How can we help?" />
            <input className='contact-doc' type='file'/>
            </form> 
            <button  className='contact-btn' type="submit">Send</button> 
           
           
        </div>
    </div>
    </div>
  )
}
