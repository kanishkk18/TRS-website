import React from 'react';
import './Property.css';
import { Link } from 'react-router-dom';

export default function Property() {
  return (
    <div className='property'><h1>Mobiles</h1>
    <div className='property__container'> 
   <Link to="/Mobiledetail"><div className='property__container__item'>
            <p>Mobile Phones</p>
        </div></Link>
        <div className='property__container__item'>
            <p>Accessories</p>
        </div>
        <div className='property__container__item'>
            <p>Tablets</p>
        </div>
    </div>
    </div>
  )
}
