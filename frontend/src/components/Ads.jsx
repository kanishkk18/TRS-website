import React, { useEffect, useState } from "react";
import PostDetail from "./PostDetail";
import "./Ads.css";
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

export default function Ads() {
  const [pic, setPic] = useState([]);
  const [show, setShow] = useState(false);
  const [posts, setPosts] = useState([]);

  const toggleDetails = (posts) => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
      setPosts(posts);
    }
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user._id) {
      fetch(`http://localhost:5000/user/${user._id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result && result.post) {
            setPic(result.post);
          } else {
            console.error("No posts found in the result", result);
          }
        })
        .catch((error) => console.error("Error fetching user data:", error));
    } else {
      console.error("User ID not found in localStorage");
    }
  }, []);

  return (
    <div className="ad-container">
      
      <p className='top-para'>MY ADS</p>
      <div className="topsec">
        <Link to="/Ads">ADS</Link>
        <Link to="/Fav">FAVORITES</Link>
      </div>

      <div className="ad-cards">
        {pic.map((pics) => (
          pics ? (
            <div key={pics._id} className="ad-card">
              <img
                src={pics.photo || ""}
                onClick={() => toggleDetails(pics)}
                alt=""
              />
              <svg
                onClick={() => toggleDetails(pics)}
                width="64px"
                height="64px"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M6 18L18 6M18 6H9M18 6V15"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
              <div className="card-content">
                <h3>Trust & Co.</h3>
                <p>Car is in excellent condition running with service records</p>
                <div className="tags">
                  <span className="views">views 10</span>
                  <span className="likes">Likes {pics.likes ? pics.likes.length : 0}</span>
                  <p>{pics.body || "No description available"}</p>
                </div>
              </div>
            </div>
          ) : null
        ))}
      </div>
      <Navbar />
      {show && <PostDetail item={posts} toggleDetails={toggleDetails} />}
    </div>
  );
}
