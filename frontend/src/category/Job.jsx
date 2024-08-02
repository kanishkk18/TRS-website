import React from 'react';
import './Property.css';
import { Link } from 'react-router-dom';

export default function Property() {
  return (
    <div className='property'><h1>Properties</h1>
    <div className='property__container'> 
     <Link to='/Jobdetail'> <div className='property__container__item'>
            <p>Data entry & Back office</p>
        </div>
        <div className='property__container__item'>
            <p>Sales & Marketing</p>
        </div>
        <div className='property__container__item'>
            <p>BPO & Telecaller</p>
        </div>
        <div className='property__container__item'>
            <p>Driver</p>
        </div>
        <div className='property__container__item'>
            <p>Office Assistant</p>
        </div>
        <div className='property__container__item'>
            <p>Delivery & Collection</p>
        </div>
        <div className='property__container__item'>
            <p>Teacher</p>
        </div>
        <div className='property__container__item'>
            <p>Cook</p>
        </div>
        <div className='property__container__item'>
            <p>Receptionist & Front office</p>
        </div>
        <div className='property__container__item'>
            <p>Operator & Technician</p>
        </div>
        <div className='property__container__item'>
            <p>IT Engineer & Developer</p>
        </div>
        <div className='property__container__item'>
            <p>Hotel & Travel Executive</p>
        </div>
        <div className='property__container__item'>
            <p>Accountant</p>
        </div>
        <div className='property__container__item'>
            <p>Designer</p>
        </div>
        <div className='property__container__item'>
            <p>Other Jobs</p>
        </div></Link>

    </div>
    </div>
  )
}
