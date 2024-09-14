// src/components/Footer/Footer.js
import React from "react";
import '../../styles/styles.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="container text-center text-md-left">
        <div className="row">
          <div className="col-md-4">
            <h5 className="font-weight-bold mb-4">About Us</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              sit amet felis et purus.
            </p>
          </div>
          <div className="col-md-4">
            <h5 className="font-weight-bold mb-4">Contact</h5>
            <ul className="list-unstyled">
              <li>Email: contact@example.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Address: 1234 Street Name, City, State, ZIP</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="font-weight-bold mb-4">Follow Us</h5>
            <a href="#" className="mx-2">
              Facebook
            </a>
            <a href="#" className="mx-2">
              Twitter
            </a>
            <a href="#" className="mx-2">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
