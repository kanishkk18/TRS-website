import React, { useState } from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import Chats from "./components/Chatlist";
import Sell from "./components/Sell";
import Ads from "./components/Ads";
import Account from "./profile/Account";
import Fav from './components/Fav';
import EditProfile from './profile/EditProfile';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginContext } from "./context/LoginContext";
import Modal from "./components/Modal";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Createpost from "./components/Createpost";
import Support from "./components/Support";
import Contact from './components/Contact';
import Property from "./category/Property";
import Mobile from './category/Mobile';
import Job from './category/Job';
import Bike from "./category/Bike";
import Electronics from './category/Electronics';
import Vehicles from './category/Vehicles';
import Furniture from "./category/Furniture";
import Fashion from "./category/Fashion";
import Hobbies from "./category/Hobbies";
import Pets from "./category/Pets";
import Services from "./category/Services";
import Jobdetail from "./details/Jobdetail";
import Mobiledetail from "./details/Mobiledetails";
import Uploadimage from './details/Uploadimage';
import Bikedetail from './details/Bikedetail';
import LocationSelector from "./components/Locationselector";
import Following from './components/Following';


function App() {
  const [userLogin, setUserLogin] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <BrowserRouter>
    <div>
    <LoginContext.Provider value={{ setUserLogin, setModalOpen }}>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Chats" element={<Chats/>}></Route>
        <Route path="/Sell" element={<Sell/>}></Route>
        <Route path="/Ads" element={<Ads/>}></Route>
        <Route path="/Account" element={<Account/>}></Route>
        <Route path="/Fav" element={<Fav/>}></Route> 
        <Route path="/EditProfile" element={<EditProfile/>}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signIn" element={<SignIn />}></Route>
        <Route path="/createpost" element={<Createpost />}></Route>
        <Route path="/support" element={<Support />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/Property" element={<Property/>}></Route>
        <Route path="/Mobile" element={<Mobile/>}></Route>
        <Route path="/Job" element={<Job/>}></Route>
        <Route path="/Bike" element={<Bike/>}></Route>
        <Route path="/Electronics" element={<Electronics/>}></Route>
        <Route path="/Vehicles" element={<Vehicles/>}></Route>
        <Route path="/Furniture" element={<Furniture/>}></Route>
        <Route path="/Fashion" element={<Fashion/>}></Route>
        <Route path="/Hobbies" element={<Hobbies/>}></Route>
        <Route path="/Pets" element={<Pets/>}></Route>
        <Route path="/Services" element={<Services/>}></Route>
        <Route path="/Jobdetail" element={<Jobdetail/>}></Route>
        <Route path="/Mobiledetail" element={<Mobiledetail/>}></Route>
        <Route path="/Uploadimage" element={<Uploadimage/>}></Route>
        <Route path="/Bikedetail" element={<Bikedetail/>}></Route>
        <Route path="/LocationSelector" element={<LocationSelector/>}></Route>
        <Route path="/Following" element={<Following/>}></Route>
        
      </Routes>
      <ToastContainer theme="dark"/>
      {modalOpen && <Modal setModalOpen={setModalOpen}></Modal>}
      </LoginContext.Provider>
    </div>
    </BrowserRouter>
  );
}

export default App;
