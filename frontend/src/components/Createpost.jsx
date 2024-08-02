import React, { useState, useEffect, useRef } from "react";
import "./Createpost.css";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";


export default function Createpost() {
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");
  const [step, setStep] = useState(1); // Step state to manage the steps
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  // Toast functions
  const notifyA = (msg) => toast.error(msg);
  const notifyB = (msg) => toast.success(msg);

  useEffect(() => {
    // Saving post to MongoDB
    if (url) {
      fetch("http://localhost:5000/createPost", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          body,
          pic: url,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            notifyA(data.error);
          } else {
            notifyB("Successfully Posted");
            navigate("/");
          }
        })
        .catch((err) => console.log(err));
    }
  }, [url]);

  // Posting image to Cloudinary
  const postDetails = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "Instagram-clone");
    data.append("cloud_name", "kanishkkcloud18");
    fetch("https://api.cloudinary.com/v1_1/kanishkkcloud18/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => setUrl(data.url))
      .catch((err) => console.log(err));
  };

  const loadfile = (event) => {
    var output = document.getElementById("upload-img");
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src); // Free memory
    };
  };

  const handleFileSelect = (event) => {
    loadfile(event);
    setImage(event.target.files[0]);
  };

  const handleNext = () => {
    if (step === 1) {
      setStep(2); // Move to the caption step
    } else {
      postDetails(); // Call postDetails if on the final step
    }
  };

 

  return (
    <div>
      
      <div className="section-grid">
      <h2>Upload your photos</h2>
       
        <div className="grid-container">
          {step === 1 ? (
            <div className="upload-item">
              {/* Image preview */}
              <img
                id="upload-img"
                src= ""  alt=""
             />
              <button className="remove-photo">Remove</button>
               {!image && (
          <div className="upload-item">
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              multiple
              onChange={handleFileSelect}
            />
          </div>
        )}
              
            </div>
          ) : (
            <div className="details">
              <input
                value={body}
                onChange={(e) => setBody(e.target.value)}
                type="number"
                placeholder="price"
              />
            </div>
            )}
            </div>
            <button className="next-button" onClick={handleNext}>
              {step === 1 ? "Next" : "Share"}
            </button>
          </div>
        </div>
      );
    }