import React from 'react';
import './Property.css'

export default function Pets() {
  return (
    <div className='property'><h1>Pets</h1>
    <div className='property__container'> 
        <div className='property__container__item'>
            <p>Fishes & Aquarium</p>
        </div>
        <div className='property__container__item'>
            <p>Pet Food & Accessories</p>
        </div>
        <div className='property__container__item'>
            <p>Dogs</p>
        </div>
        <div className='property__container__item'>
            <p>Cats</p>
        </div>
        <div className='property__container__item'>
            <p>Other Pets</p>
        </div>
    </div>
    </div>
  )
}
