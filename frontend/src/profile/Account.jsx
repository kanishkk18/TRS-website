import React, { useEffect, useState, useContext } from "react";
import './Account.css';
import Navbar from "../components/Navbar";
import {Link} from "react-router-dom";
import { LoginContext } from "../context/LoginContext";
import ProfilePic from "../profile/ProfilePic";

const Account = ({login}) => {
  const { setModalOpen } = useContext(LoginContext);
  const picLink = "https://cdn-icons-png.flaticon.com/128/3177/3177440.png";
  const [pic, setPic] = useState([]);
  const [user, setUser] = useState({});
  const [changePic, setChangePic] = useState(false);


  const changeprofile = () => {
    setChangePic(!changePic);
  };

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("user"));
    if (localUser && localUser._id) {
      fetch(`http://localhost:5000/user/${localUser._id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result) {
            setPic(result.post || []);
            setUser(result.user || {});
          } else {
            console.error("No result found");
          }
        })
        .catch((error) => console.error("Error fetching user data:", error));
    } else {
      console.error("User ID not found in localStorage");
    }
  }, []);

  const loginStatus = () => {
    const token = localStorage.getItem("jwt");
    if (login || token) {
      return [
        <>
        </>,
      ];
    } 
  };

  return (
    <div className='accountpage'> 
    <Navbar/>
      <div className="profile-header">
        <p>My Account</p>
      </div>
    <div className="profile-container">
      <div className="profile-info">
        <div className="avatar">
        <img
              onClick={changeprofile}
              src={user.Photo ? user.Photo : picLink}
              alt=""
            />
        </div>
        <div className="welcome-message">
          <h3> {user.name || "TRS User"}</h3>
          <div className='follow-detail'>
          <p>{pic.length} posts</p>
          <p>{user.followers ? user.followers.length : "0"} Followers</p>
          <p>{user.following ? user.following.length : "0"} Following</p>
          </div>
        </div>
      </div>
   <Link to="/Editprofile"><button className="edit-button">View and Edit Profile</button></Link>
      <div className="profile-menu">
      {loginStatus(useContext)}
     <Link to="/Following">  <div className="menu-item">
          <p>My Network</p>
          <img src='https://res.cloudinary.com/kanishkkcloud18/image/upload/v1719484750/CONFERIO/psw/yf86jzalzgkv9tqfeqru.svg' alt=''/>
        </div></Link>
        <div className="menu-item">
          <p>My Orders</p>
          <img src='https://res.cloudinary.com/kanishkkcloud18/image/upload/v1719484750/CONFERIO/psw/yf86jzalzgkv9tqfeqru.svg' alt=''/>
          </div>
        <div className="menu-item">
          <p> Account Settings</p>
          <img src='https://res.cloudinary.com/kanishkkcloud18/image/upload/v1719484750/CONFERIO/psw/yf86jzalzgkv9tqfeqru.svg' alt=''/>
        </div>
        <Link to="/Support">  <div className="menu-item">
        <p> Help and Support</p>
          <img src='https://res.cloudinary.com/kanishkkcloud18/image/upload/v1719484750/CONFERIO/psw/yf86jzalzgkv9tqfeqru.svg' alt=''/>
        </div></Link>
        <div className="menu-item">
         <p>Language</p> 
          <img src='https://res.cloudinary.com/kanishkkcloud18/image/upload/v1719484750/CONFERIO/psw/yf86jzalzgkv9tqfeqru.svg' alt=''/>
        </div>
        <div className="menu-item"  onClick={() => setModalOpen(true)}>
         <p>Log out</p> 
          <img src='https://res.cloudinary.com/kanishkkcloud18/image/upload/v1719484750/CONFERIO/psw/yf86jzalzgkv9tqfeqru.svg' alt=''/>
        </div>
      </div>
    </div>
    {changePic && <ProfilePic changeprofile={changeprofile} />}
    </div>
  );
};

export default Account;
