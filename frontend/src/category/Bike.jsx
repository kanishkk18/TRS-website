import React from 'react';
import './Property.css';
import { Link } from 'react-router-dom';

export default function Bike() {
  return (
    <div className='property'><h1>Bikes</h1>
    <div className='property__container'> 
     <Link to="/Bikedetail"> <div className='property__container__item'>
            <p>Motorcycles</p>
        </div>
        <div className='property__container__item'>
            <p>Scooters</p>
        </div></Link> 
        <div className='property__container__item'>
            <p>Spare Parts</p>
        </div>
        <div className='property__container__item'>
            <p>Bicycles</p>
        </div>
    </div>
    </div>
  )
}
