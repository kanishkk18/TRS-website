import React, { useState, useContext } from "react";
import "./SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { LoginContext } from "../context/LoginContext";


export default function SignIn() {
  const { setUserLogin } = useContext(LoginContext)
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // Toast functions
  const notifyA = (msg) => toast.error(msg)
  const notifyB = (msg) => toast.success(msg)

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const postData = () => {
    //checking email
    if (!emailRegex.test(email)) {
      notifyA("Invalid email")
      return
    }
    // Sending data to server
    fetch("http://localhost:5000/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password

      })
    }).then(res => res.json())
      .then(data => {
        if (data.error) {
          notifyA(data.error)
        } else {
          notifyB("Signed In Successfully")
          console.log(data)
          localStorage.setItem("jwt", data.token)
          localStorage.setItem("user", JSON.stringify(data.user))

          setUserLogin(true)
          navigate("/")
        }
        console.log(data)
      })
  }

  return (
    <div className="signin">
    <div className="form-container">
      <div className="logo">
        <img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1718475378/CONFERIO/gbkp0siuxyro0cgjq9rq.png" alt="Logo" />
      </div>
      <div className="form">
        <h2 style={{color:"#000000"}}>Login</h2>
        <input type="email" placeholder="Email" value={email}  onChange={(e) => { setEmail(e.target.value) }}/>
        <input type="password" placeholder="Password" value={password}
            onChange={(e) => { setPassword(e.target.value) }}/>
        <button className="button" onClick={() => { postData() }} value="Sign In">Login</button>
        <p className='login-para' style={{color:'black'}}>Don't have any account?  <Link style={{ color:"rgb(0,149,246)", fontSize: 14 }} to="/Signup">Sign up</Link></p>
      </div>
    </div>
  </div>
  );
}
