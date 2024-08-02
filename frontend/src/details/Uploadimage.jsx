import React, { useState, useEffect, useRef } from "react";
import './Uploadimage.css';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const UploadPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [body, setBody] = useState("");
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
      fetch("http://localhost:5000/createpost", {
        method: "POST",
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
  }, [url, body, navigate]);

  const postDetails = () => {
    const data = new FormData();
    data.append("file", photos[0]); // Assuming you are uploading one photo at a time
    data.append("upload_preset", "Instagram-clone");
    data.append("cloud_name", "kanishkkcloud18");

    fetch("https://api.cloudinary.com/v1_1/kanishkkcloud18/image/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.url) {
          setUrl(data.url);
        } else {
          notifyA("Failed to upload image");
        }
      })
      .catch((err) => console.log(err));
  };

  const handleFileChange = (e) => {
    const selectedPhotos = Array.from(e.target.files);
    const totalPhotos = photos.length + selectedPhotos.length;

    if (totalPhotos <= 10) {
      setPhotos((prevPhotos) => [...prevPhotos, ...selectedPhotos]);
    } else {
      alert('You can only upload up to 10 photos.');
    }
  };

  const handleRemovePhoto = (index) => {
    setPhotos((prevPhotos) => prevPhotos.filter((_, i) => i !== index));
  };

  const handleNext = () => {
    if (step === 1) {
      setStep(2); // Move to the caption step
    } else {
      postDetails(); // Call postDetails if on the final step
    }
  };

  return (
    <div className="section-grid">
      <h2>Upload your photos</h2>
      <div className="grid-container">
        {step === 1 ? (
          <>
            {photos.map((photo, index) => (
              <div key={index} className="upload-item">
                <img src={URL.createObjectURL(photo)} alt="" />
                <button className="remove-photo" onClick={() => handleRemovePhoto(index)}>Remove</button>
              </div>
            ))}
            {photos.length < 10 && (
              <div className="upload-item">
                <input
                className="upload-input"
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  multiple
                  onChange={handleFileChange}
                />
              </div>
            )}
          </>
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
      <button className="next-button" onClick={handleNext} disabled={photos.length === 0}>
        {step === 1 ? "Next" : "post"}
      </button>
    </div>
  );
};

export default UploadPhotos;
