import React from 'react';
import './Property.css'

export default function Property() {
  return (
    <div className='property'><h1>Properties</h1>
    <div className='property__container'> 
        <div className='property__container__item'>
            <p>For Sale:Houses & Appartments</p>
        </div>
        <div className='property__container__item'>
            <p>For Rent:Houses & Appartments</p>
        </div>
        <div className='property__container__item'>
            <p>Lands & Plots</p>
        </div>
        <div className='property__container__item'>
            <p>For Rent:Shops & Offices</p>
        </div>
        <div className='property__container__item'>
            <p>For Sale:Shops & Offices</p>
        </div>
        <div className='property__container__item'>
            <p>PG & Guest Houses</p>
        </div>
    </div>
    </div>
  )
}
