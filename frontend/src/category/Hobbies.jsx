import React from 'react';
import './Property.css'

export default function Hobbies() {
  return (
    <div className='property'><h1>Books,Sports & Hobbies</h1>
    <div className='property__container'> 
        <div className='property__container__item'>
            <p>Books</p>
        </div>
        <div className='property__container__item'>
            <p>Gym & Fitness</p>
        </div>
        <div className='property__container__item'>
            <p>Musical Instruments</p>
        </div>
        <div className='property__container__item'>
            <p>Sports Equipment</p>
        </div>
        <div className='property__container__item'>
            <p>Other Hobbies</p>
        </div>
    </div>
    </div>
  )
}
