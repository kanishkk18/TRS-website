import React, { useState } from "react";
import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


export default function SignUp() {
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [userName, setUserName] = useState("")
  const [password, setPassword] = useState("")

  // Toast functions
  const notifyA = (msg) => toast.error(msg)
  const notifyB = (msg) => toast.success(msg)

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/

  const postData = () => {
    //checking email
    if (!emailRegex.test(email)) {
      notifyA("Invalid email")
      return
    } else if (!passRegex.test(password)) {
      notifyA("Password must contain at least 8 characters, including at least 1 number and 1 includes both lower and uppercase letters and special characters for example #,?,!")
      return
    }

    // Sending data to server
    fetch("http://localhost:5000/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        userName: userName,
        email: email,
        password: password

      })
    }).then(res => res.json())
      .then(data => {
        if (data.error) {
          notifyA(data.error)
        } else {
          notifyB(data.message)
          navigate("/signin")
        }
        console.log(data)
      })
  }

  return (
        <div className="signup">
        <div className="signup-container">
          <p className="signup-top-p">Sign Up</p>
            <div className="signup-form">

            <div>
                <input  type="text" placeholder="Full Name" Name="Full Name" id="Fullname" value={name}
                onChange={(e) => { setName(e.target.value)}}
                />
            </div>

            <div>
                <input type="text" placeholder="Username" Name="Username" id="Username" value={userName}
                onChange={(e) =>{ setUserName(e.target.value)}}
                />
            </div>
            <div>
                <input type="email" value={email} placeholder="Email" Name="Email" id="email" onChange={(e) =>
                    {setEmail(e.target.value)}}
                />
            </div>
            <div>
                <input type="password" placeholder="password" 
                value={password} onChange={(e) => {setPassword(e.target.value)}}
                />
            </div>

                <button type="submit" className="signup-button" onClick={()=>{postData()}}>Sign up</button>

                <p className="signup-para">Already have any account? <Link to="/Signin">Sign In</Link></p>
                </div>

        </div>
    </div>
  );
}
