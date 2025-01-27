import React from 'react';
import { Link } from "react-router-dom";
import './Header.css'; // Yeni CSS dosyası oluşturacağız

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-menu">
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/portfolio" className="nav-link">Portfolio</Link>
      </nav>
      <div className="logo-wrap">
        <Link to="/" className="nav-link-logo">WELCOME</Link>
      </div>
      <nav className="nav-social">
        <a href="https://www.behance.net/buketyas?locale=tr_TR"
          target='_blank' className="nav-link" rel="noreferrer">
          <i className="fa fa-behance"></i>
        </a>
        <a href="https://www.linkedin.com/in/buketyas/" 
          target='_blank' className="nav-link" rel="noreferrer">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/design.studio.by/#" 
          target='_blank' className="nav-link" rel="noreferrer">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="mailto:buketyas@gmail.com"
          target='_blank' className="nav-link" rel="noreferrer">
          <i className="fa fa-google"></i>
        </a>
      </nav>
    </header>
  );
};

export default Header;
