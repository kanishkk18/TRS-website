import React, { useState, useEffect } from 'react';
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [page, setPage] = useState(1);
  
    useEffect(() => {
      const nav = document.querySelector("[data-nav]");
      nav?.classList.remove(`nav--tilt${page}`);
      nav?.classList.add(`nav--tilt${page}`);
    }, [page]);
  
    const handleClick = (e) => {
      e.preventDefault();
      let parent = e.target;
  
      while (parent && !parent.hasAttribute("data-nav-item")) {
        parent = parent.parentElement;
      }
  
      if (parent) {
        const pageNumber = +parent.getAttribute("data-nav-item");
        if (pageNumber !== page) {
          setPage(pageNumber);
          const items = document.querySelectorAll("[data-nav-item]");
          Array.from(items).forEach(item => {
            item.removeAttribute("aria-describedby");
          });
          parent.setAttribute("aria-describedby", "current");
          spawnCards();
        }
      }
    };
  
    const spawnCards = () => {
      const flyOut = "card--fly-out";
      const cards = document.querySelectorAll("[data-card]");
      Array.from(cards).forEach(card => {
        card.classList.remove(flyOut);
        void card.offsetWidth;
        card.classList.add(flyOut);
      });
    };

  return (

	<nav className="nav" data-nav  onClick={handleClick}>
		<ul className="nav__items">
			<li className="nav__item" style={{marginLeft:-20}}>
			<Link to="/" class="nav__item-btn" data-nav-item="1" aria-describedby="current">
					<svg className="nav__item-icon" width="24px" height="24px" viewBox="0 0 24 24">
						<g className="icon1-1">
							<path fill="currentColor" d="M23.1,20.4H0.8c-0.4,0-0.7-0.2-0.8-0.6s0-0.8,0.3-1l11.5-8.1c0.3-0.2,0.7-0.2,1,0l10.8,8.1
														 c0.3,0.2,0.4,0.6,0.3,1C23.8,20.1,23.5,20.4,23.1,20.4z M4.8,18.6h14.4c0.7,0,0.8-0.3,0.3-0.8l-6.2-4.6c-0.6-0.4-1.5-0.4-2.1,0
														 l-6.6,4.7C4,18.3,4.1,18.6,4.8,18.6z"/>
							<path d="M9.5,6c0.1-3.3,4.9-3.3,5,0C14.4,9.3,9.6,9.3,9.5,6L9.5,6z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-dasharray="11 4.7"/>
						</g>
					</svg>
					<span className="nav__item-text">Home</span>
				</Link>
			</li>
			<li className="nav__item">
				<Link to="/Chats" className="nav__item-btn" data-nav-item="2">
					<svg className="nav__item-icon" width="24px" height="24px" viewBox="0 0 24 24">
						<g fill="none" stroke="currentColor" stroke-width="2">
							<rect className="icon2-1" x="1" y="1" rx="3" ry="3" width="9" height="9" />
							<rect className="icon2-2" x="14" y="1" rx="3" ry="3" width="9" height="9" />
							<rect className="icon2-3" x="1" y="14" rx="3" ry="3" width="9" height="9" />
							<rect className="icon2-4" x="14" y="14" rx="3" ry="3" width="9" height="9" />
						</g>
					</svg>
					<span className="nav__item-text">Chats</span>
				</Link>
			</li>
			<li className="nav__item">
				<Link to="/Sell" className="nav__item-btn" data-nav-item="3">
					<svg className="nav__item-icon" width="24px" height="24px" viewBox="0 0 24 24">
						<g className="icon3-1" fill="currentColor">
							<path d="M19.3,0H4.7C4.1,0,3.6,0.5,3.6,1.1v21.8c0,0.4,0.2,0.8,0.6,1c0.4,0.2,0.8,0.1,1.2-0.1l6.6-5.3l6.6,5.3c0.2,0.2,0.4,0.2,0.7,0.2c0.2,0,0.3,0,0.5-0.1c0.4-0.2,0.6-0.6,0.6-1V1.1C20.4,0.5,19.9,0,19.3,0z M18.2,20.6l-5.5-4.4C12.5,16.1,12.2,16,12,16s-0.5,0.1-0.7,0.2l-5.5,4.4V2.2h12.4V20.6z"/>
						</g>
					</svg>
					<span className="nav__item-text">Sell</span>
				</Link>
			</li>
			<li className="nav__item">
				<Link to="/Ads" className="nav__item-btn" data-nav-item="4">
					<svg className="nav__item-icon" width="24px" height="24px" viewBox="0 0 24 24">
						<g fill="none" stroke="currentColor" stroke-width="2">
							<rect className="icon4-1" fill="currentColor" stroke-width="0" x="2.75" y="7.5" width="18.5" height="0"/>
							<rect className="icon4-2" x="2.5" y="7" rx="3" ry="3" width="19" height="16" />
							<path d="M7.5,10V5.5C7.5,3,9.5,1,12,1h0c2.5,0,4.5,2,4.5,4.5V10" stroke-linecap="round"/>
							<path className="icon4-3" d="M7.5,10V5.5C7.5,3,9.5,1,12,1h0c2.5,0,4.5,2,4.5,4.5V10" stroke-linecap="round"/>
						</g>
					</svg>
					<span className="nav__item-text">Ads</span>
				</Link>
			</li>
			<li className="nav__item"style={{marginRight:10}}>
				<Link to="/Account" className="nav__item-btn" data-nav-item="5">
					<svg className="nav__item-icon" width="24px" height="24px" viewBox="0 0 24 24">
						<g fill="none" stroke="currentColor" stroke-width="2">
							<g className="icon5-1">
								<circle cx="12" cy="6.5" r="5.5"/>
							</g>
							<path d="M3,23c0-3.4,4-6,9-6s9,2.6,9,6" stroke-linecap="round"/>
						</g>
					</svg>
					<span className="nav__item-text">Account</span>
				</Link>
			</li>
		</ul>
		<div id="current" hidden>Current page</div>
	</nav>

  );
}

export default Navbar;
