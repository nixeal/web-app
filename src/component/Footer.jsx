import React from 'react';
import '../css/footer.css';
const Footer = () => {
    const date = new Date().toLocaleString().slice(5,9);
    return (
        <div className="container-fluid bg-dark text-white">
          <div className="footer">
                 <i className="bi bi-facebook"></i>
                 <i className="bi bi-instagram"></i>
                  <i className="bi bi-twitter"></i>
                     <p className="footer-copy"> CopyRight@ {date} </p>
          </div>
        </div>
    );
}

export default Footer;