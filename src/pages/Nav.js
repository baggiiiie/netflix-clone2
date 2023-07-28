/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Nav.css';

function Nav() {
  const [navHide, setNavHide] = useState(true);
  const navigate = useNavigate();
  
  const navTransition = () => {
    if (window.scrollY > 100) {
      setNavHide(false);
    } else {
      setNavHide(true);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', navTransition);
    return () => window.removeEventListener('scroll', navTransition);
  }, []);

  return (
    <div className={`nav ${!navHide && 'nav_black'}`}>
      <div className="nav_contents">
        <img
          onClick={() => navigate("/")}
          className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix Logo"
        />
        <img
          onClick={() => navigate("/profile")}
          className="nav_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Netflix avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
