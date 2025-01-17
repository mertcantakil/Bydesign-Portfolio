import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <Link to="/about" style={styles.navLink}>About</Link>
        <Link to="/portfolio" style={styles.navLink}>Portfolio</Link>
      </nav>
      <div style={styles.logoWrap}>
        <Link to="/" style={styles.navLinkLogo}>WELCOME</Link>
      </div>
      <nav style={{...styles.nav, textAlign: 'end'}}>
        <a href="https://www.behance.net/buketyas?locale=tr_TR"
          target='_blank' style={styles.navLink} rel="noreferrer"><i class="fa fa-behance" style={{ color: 'white', fontSize:'20px'}}>
            </i>
        </a>
        <a href="https://www.linkedin.com/in/buketyas/" 
          target='_blank' style={styles.navLink} rel="noreferrer">
            <i class="fa fa-linkedin" style={{ color: 'white', fontSize:'20px'}}></i>
        </a>
        <a href="https://www.instagram.com/design.studio.by/#" 
          target='_blank' style={styles.navLink} rel="noreferrer">
            <i class="fa fa-instagram" style={{ color: 'white', fontSize:'20px'}}></i>
        </a>
        <a href="mailto:buketyas@gmail.com"
         target='_blank' style={styles.navLink} rel="noreferrer">
          <i class="fa fa-google" style={{ color: 'white', fontSize:'20px'}}></i>
        </a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display:'flex',
    alignItems: 'center',
    height: '270px',
    paddingBottom: '0px',
    paddingLeft: '4%',
    paddingRight: '4%',
    paddingTop: '20px',
    position: 'relative',
    zIndex: 3,
    right: 0,
    top: 0,
  },
  logoWrap: {
    textAlign: 'center',
    maxWidth: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: '0px',
    paddingTop: '0px',
    width: '40%',
  },
  nav: {
    float: 'left',
    maxWidth: '100%',
    width: '30%',
  },
  navLinkLogo: {
    color: 'rgb(255, 255, 255)',
    textDecoration: 'none',
    fontSize: '28px',
    padding: '10px',
    fontWeight: 500,
  },
  navLink: {
    color: 'rgb(255, 255, 255)',
    textDecoration: 'none',
    fontSize: '22px',
    padding: '10px',
    fontWeight: 300,
  },
};

export default Header;
