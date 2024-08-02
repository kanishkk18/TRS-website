import React, { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Location from "./Locationselector";
import PostDetail from "./PostDetail";

function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
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
    const token = localStorage.getItem("jwt");
    if (!token) {
      navigate("./"); // to direct user if not logged in yet
    }

    // Fetching all posts
    fetch("http://localhost:5000/allposts", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result);
      })
      .catch((err) => console.log(err));
  }, []);

 

  const likePost = (id) => {
    fetch("http://localhost:5000/like", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        const newData = data.map((posts) => {
          if (posts._id === result._id) {
            return result;
          } else {
            return posts;
          }
        });
        setData(newData);
        console.log(result);
      });
  };
  const unlikePost = (id) => {
    fetch("http://localhost:5000/unlike", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        const newData = data.map((posts) => {
          if (posts._id === result._id) {
            return result;
          } else {
            return posts;
          }
        });
        setData(newData);
        console.log(result);
      });
  };

  

  return (
    <div>
      
    <div className="home">
      <div className="hero-top">
        <nav className="current-location"> <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> <p><Location/></p></nav>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Find Cars, Mobile Phones and more..." />
      </div>

      <div className="category-container">
        <div className="category-list">
          <div className="category-item">
            <img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1719670893/CONFERIO/psw/zf5g4vc1s4yaaiibkwgw.png" alt="" />
            <p>Cars</p>
          </div>
          <div className="category-item">
            <img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1719671268/CONFERIO/psw/mwj9lq3wczvackb346xz.webp" alt="" />
            <p>Mobiles</p>
          </div>
          <div className="category-item">
            <img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1719672701/CONFERIO/psw/y02vlnh2zerzubadmhfc.png" alt="" />
            <p>Properties</p>
          </div>
          <div className="category-item">
            <img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1719674168/CONFERIO/psw/plcujw53b8obsvpqjuyq.webp" alt="" />
            <p>Jobs</p>
          </div>
          <div className="category-item">
            <img
              src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1719671268/CONFERIO/psw/ohizcbd5ni7bnxvo8nwd.webp"
              alt=""
            />
            <p>Bikes</p>
          </div>
          <div className="category-item">
            <img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1719675409/CONFERIO/psw/cvnylpcsn9b8cofypgt2.webp" alt="" />
            <p>Electronics</p>
          </div>
          <div className="category-item">
            <img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1719680350/CONFERIO/psw/ltewr6mqotxffm4c9pf8.webp" alt="" />
            <p>Furniture</p>
          </div>
          <div className="category-item">
            <img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1719680218/CONFERIO/psw/knopp05r3yize5k1rcte.png" alt="" />
            <p>Fashion</p>
          </div>
          <div className="category-item">
            <img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1719680762/CONFERIO/psw/mnew5lw12iq8fjit4e5t.png" alt="" />
            <p>Hobbies</p>
          </div>
          <div className="category-item">
            <img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1719681447/CONFERIO/psw/cx5yp0htxdsbqfdao6zp.png" alt="" />
            <p>Beauty</p>
          </div>
          <div className="category-item">
            <img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1719675409/CONFERIO/psw/usedvxcn8xax9hathc0p.webp" alt="" />
            <p>Homes</p>
          </div>
          <div className="category-item">
            <img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1719681676/CONFERIO/psw/aebufq2il9qsiosvtbyz.png" alt="" />
            <p>Travel</p>
          </div>
          <div className="category-item">
            <img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1719682099/CONFERIO/psw/wzhb90oojztbvajuwrd6.png" alt="" />
            <p>Sevices</p>
          </div>
          <div className="category-item">
            <img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1719675409/CONFERIO/psw/gsva1igyhpxcrqukecrj.webp" alt="" />
            <p>Appliances</p>
          </div>
        </div>
      </div>

      <div className="imgslide">
        <figure>
        <img src="https://i.pinimg.com/736x/62/e4/01/62e401f664d19ddd42413d136d0458e4.jpg" alt="" />
        <img src="https://i.pinimg.com/564x/ff/fc/97/fffc97effccca652c56e08a6bdb53959.jpg" alt="" />
        <img src="https://i.pinimg.com/736x/39/f4/03/39f403df4ac79ab48ca911b03c077c1c.jpg" alt="" />
        <img src="https://i.pinimg.com/564x/64/fe/aa/64feaaf83bce31893e1256e9dec7618a.jpg" alt="" />
      </figure>
        <div className="hero-products">
          <div className="hero-product-item">
          <div className="product-cards">
            <p>Looking for<br/>Desktops</p>
            <img className="product-img" src="https://img.freepik.com/premium-psd/cyber-monday-sale-mock-up-with-futuristic-assortment_23-2148659808.jpg?ga=GA1.1.72098254.1718279037&semt=sph" alt=""/>
          </div>
          <div className="product-cards">
            <p>Buy Sports<br/>Equipments</p>
            <img className="product-img" src="https://i.pinimg.com/736x/05/43/5b/05435bea87fecaf1f80e80287e7bae0e.jpg" alt=""/>
          </div>
          <div className="product-cards">
            <p>Looking for<br/> Furnitures </p>
            <img className="product-img" src="https://i.pinimg.com/564x/99/27/44/992744d043beb390f202da44e07fbba6.jpg" alt=""/>
          </div>
          <div className="product-cards">
            <p>Buy some <br/>Jewels </p>
            <img className="product-img" src="https://i.pinimg.com/564x/70/43/19/704319f1d85abd8cd9b42517bb063954.jpg" alt=""/>
          </div>
          <div className="product-cards">
            <p>Looking for<br/>Bikes</p>
            <img className="product-img" src="https://i.pinimg.com/564x/41/16/c7/4116c7372dc75e45d8d91ac213bc6e82.jpg" alt=""/>
          </div>
          <div className="product-cards">
            <p>Looking for<br/>Cars </p>
            <img className="product-img" src="https://i.pinimg.com/564x/08/ad/a5/08ada57c3bb6f9d6b92e53ddc6499e5e.jpg" alt=""/>
          </div>
          <div className="product-cards">
            <p>Looking for <br/>Watches </p>
            <img className="product-img" src="https://i.pinimg.com/564x/2c/1d/13/2c1d13e8934c18185a1d79c9072156b7.jpg" alt=""/>
          </div>
          <div className="product-cards">
            <p>Looking for <br/>Clothes </p>
            <img className="product-img" src="https://i.pinimg.com/564x/a0/a2/6b/a0a26bc73cf9fb6e591447d8786135a2.jpg" alt=""/>
          </div>
        </div>
        </div>
      </div>

       {/* card */}
       {Array.isArray(data) ? (
          data.map((posts) => (
            <div className="cards-container" key={posts.id}>
              <div className="card"  onClick={() => toggleDetails(posts)}>
                <img src={posts.photo} alt="" />
                <div className="card-info">
                {posts.likes.includes(
                JSON.parse(localStorage.getItem("user"))._id
              ) ? (
                <span
                  className="material-symbols-outlined material-symbols-outlined-red"
                  onClick={() => {
                    unlikePost(posts._id);
                  }}
                >
                  favorite
                </span>
              ) : (
                <span
                  className="material-symbols-outlined"
                  onClick={() => {
                    likePost(posts._id);
                  }}
                >
                  favorite
                </span>
              )}
                  <h2>{posts.body}</h2>
                  
                  <p className="card-location" style={{ fontSize: 12, marginTop: 48 }}><Location></Location></p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No posts available</p>
        )}

    </div>
    <Navbar/>
    {show && <PostDetail item={posts} toggleDetails={toggleDetails} />}
    </div>
  );
}

export default Home;
