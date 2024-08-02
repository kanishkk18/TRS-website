import React, { useState, useEffect } from 'react';
import './Chat-list.css';
import Navbar from "./Navbar";

const chats = [
  { id: 1, name: 'Rehan Wangasaff', message: "Ur Welcome!" },
  { id: 2, name: 'Peter Parker', message: "Can You Come Here Today?" },
  { id: 3, name: 'Bebeb', message: "What You Doing?", userimg:"https://res.cloudinary.com/kanishkkcloud18/image/upload/v1717574820/samples/upscale-face-1.jpg" },
  { id: 4, name: 'Yoga', message: "Sokin Sin Ngab" },
  { id: 1, name: 'Rehan Wangasaff', message: "Ur Welcome!" },
  { id: 2, name: 'Peter Parker', message: "Can You Come Here Today?" },
  { id: 3, name: 'Bebeb', message: "What You Doing?" },
  { id: 4, name: 'Yoga', message: "Sokin Sin Ngab" },
  { id: 1, name: 'Rehan Wangasaff', message: "Ur Welcome!" },
  { id: 2, name: 'Peter Parker', message: "Can You Come Here Today?" },
  { id: 3, name: 'Bebeb', message: "What You Doing?", userimg:"https://res.cloudinary.com/kanishkkcloud18/image/upload/v1717574820/samples/upscale-face-1.jpg" },
  { id: 4, name: 'Yoga', message: "Sokin Sin Ngab" },
  { id: 1, name: 'Rehan Wangasaff', message: "Ur Welcome!" },
  { id: 2, name: 'Peter Parker', message: "Can You Come Here Today?" },
  { id: 3, name: 'Bebeb', message: "What You Doing?" },
  { id: 4, name: 'Yoga', message: "Sokin Sin Ngab" },
];

const ChatList = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleSwipeUp = () => {
    setIsExpanded(!isExpanded);
  };

  const handleScroll = (e) => {
    const currentScrollTop = e.target.scrollTop;
    if (currentScrollTop < lastScrollTop) {
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
    setLastScrollTop(currentScrollTop);
  };

  useEffect(() => {
    const recentChats = document.querySelector('.recent-chats');
    recentChats.addEventListener('scroll', handleScroll);
    return () => recentChats.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <div>
      <Navbar />
      <div className={`chat-list ${isExpanded ? 'expanded' : ''}`}>
        <div className="header-content">
          <div className="header">

            <ruby className="username">welcome<rt>kanishkkb_18 &#128075;</rt></ruby>
          
            <div className='notify-svg'><svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19.3399 14.49L18.3399 12.83C18.1299 12.46 17.9399 11.76 17.9399 11.35V8.82C17.9399 6.47 16.5599 4.44 14.5699 3.49C14.0499 2.57 13.0899 2 11.9899 2C10.8999 2 9.91994 2.59 9.39994 3.52C7.44994 4.49 6.09994 6.5 6.09994 8.82V11.35C6.09994 11.76 5.90994 12.46 5.69994 12.82L4.68994 14.49C4.28994 15.16 4.19994 15.9 4.44994 16.58C4.68994 17.25 5.25994 17.77 5.99994 18.02C7.93994 18.68 9.97994 19 12.0199 19C14.0599 19 16.0999 18.68 18.0399 18.03C18.7399 17.8 19.2799 17.27 19.5399 16.58C19.7999 15.89 19.7299 15.13 19.3399 14.49Z" fill="#ffffff"></path> <path d="M14.8297 20.01C14.4097 21.17 13.2997 22 11.9997 22C11.2097 22 10.4297 21.68 9.87969 21.11C9.55969 20.81 9.31969 20.41 9.17969 20C9.30969 20.02 9.43969 20.03 9.57969 20.05C9.80969 20.08 10.0497 20.11 10.2897 20.13C10.8597 20.18 11.4397 20.21 12.0197 20.21C12.5897 20.21 13.1597 20.18 13.7197 20.13C13.9297 20.11 14.1397 20.1 14.3397 20.07C14.4997 20.05 14.6597 20.03 14.8297 20.01Z" fill="#ffffff"></path> </g></svg></div> 
          </div>
        </div>
        {!isExpanded && (
          <>
            <div className="story-btn">
              <p style={{ color: 'white' }}>New Ads</p>
              <button style={{ backgroundColor: 'transparent', border: "none", color: "grey", fontSize: 14, padding: 0 }}>See All</button>
            </div>
            <div className="stories">
              <div className="story">
                <img src="https://res.cloudinary.com/kanishkkcloud18/image/upload/v1717574820/samples/upscale-face-1.jpg" alt="" />
                <p>jeniffer</p>
              </div>
              {/* Repeat story items */}
            </div>
          </>
        )}
        <div className={`recent-chats ${isExpanded ? 'full-screen' : ''}`}>
          <button className='recent-swipeup' onClick={handleSwipeUp}></button>
          <div className='reacent-chat'>
            <div className="archive-button">
              <p>Recent Chats</p>
              <button className="archivebtn">Archive Chat</button>
            </div>
            {chats.map(chat => (
              <div className="chat-item" key={chat.id}>
                <div className="chat-avatar">{chat.name[0]}</div>
                <div className="chat-info">
                  <div className="chat-name">{chat.name}</div>
                  <div className="chat-message">{chat.message}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
