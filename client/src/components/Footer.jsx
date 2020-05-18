import React from 'react';
import ReactDOM from 'react-dom';


 const Footer = (props) => {

  return (
    <footer className="typeface">
      <div className="links">
        <ul className="footer-links">
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Location</a></li>
        </ul>
      </div>
      <div className="copyright">
        Copyright &copy; Canton Food Co. |
        Wholesale food serving LA County, Los Angeles, CA
    </div>
      <div className="designInfo">
        Designed by Bryan.E
    </div>
    </footer>
  )
}

export default Footer