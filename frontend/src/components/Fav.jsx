import React, { useEffect, useState } from "react";
import PostDetail from "./PostDetail";
import "./Fav.css";
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

export default function Fav() {
  const [likedPosts, setLikedPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  const toggleDetails = (post) => {
    setSelectedPost(selectedPost === post ? null : post);
  };

  useEffect(() => {
    fetch("http://localhost:5000/liked-posts", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result && result.likedPosts) {
          setLikedPosts(result.likedPosts);
        } else {
          console.error("No liked posts found", result);
        }
      })
      .catch((error) => console.error("Error fetching liked posts:", error));
  }, []);

  return (
    <div className="ad-container">
      <p className='top-para'>MY ADS</p>
      <div className="topsec">
        <Link to="/Ads">ADS</Link>
        <Link to="/Fav">FAVORITES</Link>
      </div>

      <div className="fav-cards">
        {likedPosts.map((post) => (
          <div key={post._id} className="fav-card">
            <img
              src={post.photo || ""}
              onClick={() => toggleDetails(post)}
              alt=""
            />
            <div className="fav-content">
              <p>Car is in excellent condition running with service</p>
              <div className="price">
                <p>₹ {post.body || "price not added"}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Navbar />
      {selectedPost && <PostDetail item={selectedPost} toggleDetails={toggleDetails} />}
    </div>
  );
}
