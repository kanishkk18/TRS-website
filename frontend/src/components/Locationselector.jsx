import React, { useState, useEffect } from 'react';
import './Locationselector.css'

const LocationComponent = () => {
  const [location, setLocation] = useState(null);
  const [addressDetails, setAddressDetails] = useState({
    sector: '',
    city: '',
    postcode: '',
    stateAbbr: '',
    country: ''
  });

  useEffect(() => {
    handleGetLocation();
  }, []);

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        fetchAddress(latitude, longitude);
      }, (error) => {
        console.error(error);
        alert("Error getting location. Please enable location services and refresh the page.");
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const fetchAddress = async (latitude, longitude) => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`);
      const data = await response.json();
      const { address } = data;
      setAddressDetails({
        sector: address.suburb || address.neighbourhood || address.village || address.town || address.hamlet || '',
        city: address.city || address.town || address.village || address.hamlet || '',
        postcode: address.postcode || '',
        stateAbbr: address.state || '',
        country: address.country || ''
      });
    } catch (error) {
      console.error('Error fetching address:', error);
    }
  };

  return (
    <div className='location'>
      {location ? (
        <div>
          <p>{addressDetails.city},{addressDetails.postcode}</p>
        </div>
      ) : (
        <p>Loading location...</p>
      )}
    </div>
  );
};

export default LocationComponent;
