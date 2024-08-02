import React from 'react';
import './Property.css'

export default function Furniture() {
  return (
    <div className='property'><h1>Furniture</h1>
    <div className='property__container'> 
        <div className='property__container__item'>
            <p>Sofa & Dining</p>
        </div>
        <div className='property__container__item'>
            <p>Beds & Wardrobes</p>
        </div>
        <div className='property__container__item'>
            <p>Home Decor & Garden</p>
        </div>
        <div className='property__container__item'>
            <p>Kids Furniture</p>
        </div>
        <div className='property__container__item'>
            <p>Other Household Items</p>
        </div>
    </div>
    </div>
  )
}
