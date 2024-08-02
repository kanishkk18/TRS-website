import React, { useEffect, useState } from "react";
import "./Following.css";
import { useParams } from "react-router-dom";

export default function MyFollowingPost() {
  var picLink = "https://cdn-icons-png.flaticon.com/128/3177/3177440.png";
  const { userid } = useParams();
  const [isFollow, setIsFollow] = useState(false);
  const [user, setUser] = useState("");
  const [posts, setPosts] = useState([]);

  const followUser = (userId) => {
    fetch("http://localhost:5000/follow", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        followId: userId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsFollow(true);
      });
  };

  const unfollowUser = (userId) => {
    fetch("http://localhost:5000/unfollow", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        followId: userId,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsFollow(false);
      });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/myfollwingpost/${userid}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setUser(result.user); // User details
        setPosts(result.posts.slice(0, 3)); // Limit to 3 posts
        
        if (
          result.user.followers.includes(
            JSON.parse(localStorage.getItem("user"))._id
          )
        ) {
          setIsFollow(true);
        }
      })
      .catch((err) => {
        console.error("Error fetching data: ", err);
      });
  }, [isFollow, userid]);

  return (
    <div className="followers-list">
      <h2>All followers</h2>
      {user && (
        <div className="following-card">
          {/* card header */}
          <div className="following-header">
            <div className="following-pic">
              <img src={user.photo ? user.photo : picLink} alt="Profile Pic" />
           
            <div className="follower-info">
            <span className="following-name">{user.name}</span>
            <span className="following-username">{user.userName}</span>
          </div>
          </div>
         
          <button
            className="user-followBtn"
            onClick={() => {
              if (isFollow) {
                unfollowUser(user._id);
              } else {
                followUser(user._id);
              }
            }}
          >
            {isFollow ? "Unfollow" : "Follow"}
          </button>
           </div>
          <div className="following-images">
            {posts.map((post) => (
              <div key={post._id} className="following-image">
                <img src={post.photo} alt="" />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
