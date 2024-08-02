import React, { useState, useEffect } from "react";
import "./PostDetail.css";

export default function PostDetail({ item, toggleDetails }) {
  
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


  const renderDescription = () => {
    switch (item.type) {
      case 'mobile':
        return (
          <div className="description">
            <h3>{item.name}</h3>
            <p>Price: {item.price}</p>
            <p>Condition: {item.condition}</p>
            <p>Storage: {item.storage}</p>
            <p>{item.additionalInfo}</p>
          </div>
        );
      case 'bike':
        return (
          <div className="description">
            <h3>{item.name}</h3>
            <p>Price: {item.price}</p>
            <p>Condition: {item.condition}</p>
            <p>Mileage: {item.mileage}</p>
            <p>{item.additionalInfo}</p>
          </div>
        );
      case 'car':
        return (
          <div className="description">
            <h3>{item.name}</h3>
            <p>Price: {item.price}</p>
            <p>Condition: {item.condition}</p>
            <p>Mileage: {item.mileage}</p>
            <p>{item.additionalInfo}</p>
          </div>
        );
      case 'house':
        return (
          <div className="description">
            <h3>{item.name}</h3>
            <p>Price: {item.price}</p>
            <p>Location: {item.location}</p>
            <p>Size: {item.size}</p>
            <p>{item.additionalInfo}</p>
          </div>
        );
      default:
        return <p>No description available</p>;
    }
  };

  
  return (
    <div className="productdetail">
      <div className="product-detail-header">
      <div className="back-btn"onClick={() => {
          toggleDetails();
        }}>
            <img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1719484750/CONFERIO/psw/yf86jzalzgkv9tqfeqru.svg" alt="" />
            </div>
            <div className="share-like">
            
            <svg width="25px" height="24px" viewBox="0 0 26 26" version="1.1"  fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>share</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" > <g id="Icon-Set" transform="translate(-312.000000, -726.000000)" fill="#ffffff"> <path d="M331,750 C329.343,750 328,748.657 328,747 C328,745.343 329.343,744 331,744 C332.657,744 334,745.343 334,747 C334,748.657 332.657,750 331,750 L331,750 Z M317,742 C315.343,742 314,740.657 314,739 C314,737.344 315.343,736 317,736 C318.657,736 320,737.344 320,739 C320,740.657 318.657,742 317,742 L317,742 Z M331,728 C332.657,728 334,729.343 334,731 C334,732.657 332.657,734 331,734 C329.343,734 328,732.657 328,731 C328,729.343 329.343,728 331,728 L331,728 Z M331,742 C329.23,742 327.685,742.925 326.796,744.312 L321.441,741.252 C321.787,740.572 322,739.814 322,739 C322,738.497 321.903,738.021 321.765,737.563 L327.336,734.38 C328.249,735.37 329.547,736 331,736 C333.762,736 336,733.762 336,731 C336,728.238 333.762,726 331,726 C328.238,726 326,728.238 326,731 C326,731.503 326.097,731.979 326.235,732.438 L320.664,735.62 C319.751,734.631 318.453,734 317,734 C314.238,734 312,736.238 312,739 C312,741.762 314.238,744 317,744 C318.14,744 319.179,743.604 320.02,742.962 L320,743 L326.055,746.46 C326.035,746.64 326,746.814 326,747 C326,749.762 328.238,752 331,752 C333.762,752 336,749.762 336,747 C336,744.238 333.762,742 331,742 L331,742 Z" id="share"> </path> </g> </g> </g></svg>
            <svg width="25px" height="26px" viewBox="0 0 24 24" fill="none" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div>

      </div>
      <div className="product-container">
        <div className="postPic">
          <img src={item.photo} alt="" />
        </div>
        <div className="product-card-content">
          <div className="product-card-p">
            <p>₹ {item.body}</p>
            <p>{item.title}</p>
          </div>
          <div className="location-date">
          {location ? (
        <div style={{display:"flex", marginLeft:-12}}>  <nav className="current-location"> <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></nav>
          <p>{addressDetails.sector},{addressDetails.city}</p>
        </div>
      ) : (
        <p>Loading location...</p>
      )}
            <p>{new Date(item.createdAt).toLocaleDateString()}</p>
          </div>
          <div className="details">
            <div className="product-description">
              <p>Details</p>
              <p>Description</p>
              {/* Render dynamic description */}
              {renderDescription()}
            </div>
          </div>
          <div className="post-detail-user">
            <img className="product-detail-user" src={item.postedBy.photo} alt={item.postedBy.name} />
            <p>{item.postedBy.name}</p>
            <img className="right-arrow" src='https://res.cloudinary.com/kanishkkcloud18/image/upload/v1719484750/CONFERIO/psw/yf86jzalzgkv9tqfeqru.svg' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}
