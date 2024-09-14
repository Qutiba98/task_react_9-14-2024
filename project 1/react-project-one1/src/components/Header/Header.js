// src/components/Header/Header.js
import React from "react";
import '../../styles/styles.css';

function Header() {
  return (
    <header>
      <div
        className="jumbotron jumbotron-fluid"
        id="banner"
        style={{ backgroundImage: "url(img/banner-bk.jpg)" }}
      >
        <div className="container text-center text-md-left">
          <div className="row justify-content-between">
            <div className="col-2">
              <img src="img/logo.png" alt="logo" />
            </div>
            <div className="col-6 align-self-center text-right">
              <a href="#" className="text-white lead">
                Get Early Access
              </a>
            </div>
          </div>
          <h1
            data-aos="fade"
            data-aos-easing="linear"
            data-aos-duration="1000"
            data-aos-once="true"
            className="display-3 text-white font-weight-bold my-5"
          >
            A New Way
            <br />
            To Start Business
          </h1>
          <p
            data-aos="fade"
            data-aos-easing="linear"
            data-aos-duration="1000"
            data-aos-once="true"
            className="lead text-white my-4"
          >
            Lorem ipsum dolor sit amet, id nec enim autem oblique, ei dico
            mentitum duo.
            <br /> Illum iusto laoreet his te. Lorem partiendo mel ex. Ad vitae
            admodum voluptatum per.
          </p>
          <a
            href="#"
            data-aos="fade"
            data-aos-easing="linear"
            data-aos-duration="1000"
            data-aos-once="true"
            className="btn my-4 font-weight-bold atlas-cta cta-green"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
