import React, { useEffect, useState } from "react";
import "./EditProfile.css";
import ProfilePic from "./ProfilePic";
import { Link } from 'react-router-dom';


export default function EditProfile() {
  const picLink = "https://cdn-icons-png.flaticon.com/128/3177/3177440.png";
  const [user, setUser] = useState({});
  const [changePic, setChangePic] = useState(false);
  const [name, setName] = useState('Kanishk Bansal');
  const [pronouns, setPronouns] = useState('');
  const [bio, setBio] = useState("Hii I'm a web developer and a UI/UX designer");

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

  return (
    <div className="profile-edit">
      <div className="header">
        <Link to="/Account" > <img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1719484750/CONFERIO/psw/yf86jzalzgkv9tqfeqru.svg" alt="" /></Link>
        <p>Edit Profile</p>
        <button className="save-button">Save</button>
      </div>
      <div className="profile-photo">
        <img
          onClick={changeprofile}
          src={user.Photo ? user.Photo : picLink}
          alt=""
        />
        <button className="update-photo" onClick={changeprofile}>Update photo</button>
        {changePic && <ProfilePic changeprofile={changeprofile} />}
      </div>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name*</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength="50"
          />
        </div>
        <div className="form-group">
          <label htmlFor="pronouns">Pronouns</label>
          <input
            type="text"
            id="pronouns"
            value={pronouns}
            onChange={(e) => setPronouns(e.target.value)}
            maxLength="4"
          />
        </div>
        <div className="form-group">
          <label htmlFor="bio">Short bio</label>
          <textarea
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            maxLength="160"
          />
        </div>
      </form>
      <div className="about-page">

      </div>
    </div>
  );
}
