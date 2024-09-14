// src/components/MainContent/MainContent.js
import React from "react";
import "../../styles/styles.css";

function MainContent() {
  return (
    <main>
      {/* Three-block section */}
      <div className="container my-5 py-2">
        <h2 className="text-center font-weight-bold my-5">
          Smartest protection for your site
        </h2>
        <div className="row">
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-once="true"
            className="col-md-4 text-center"
          >
            <img
              src="img/smart-protect-1.jpg"
              alt="Anti-spam"
              className="mx-auto"
            />
            <h4>Anti-spam</h4>
            <p>Lorem ipsum dolor sit amet porro his no his deleniti</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-once="true"
            className="col-md-4 text-center"
          >
            <img
              src="img/smart-protect-2.jpg"
              alt="Phishing Detect"
              className="mx-auto"
            />
            <h4>Phishing Detect</h4>
            <p>Ne error antiopam usu. Sed vocen concludaturque ea</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
            data-aos-once="true"
            className="col-md-4 text-center"
          >
            <img
              src="img/smart-protect-3.jpg"
              alt="Smart Scan"
              className="mx-auto"
            />
            <h4>Smart Scan</h4>
            <p>Et usu ocurreret elaboraret doctus prodesse assueverit.</p>
          </div>
        </div>
      </div>

      {/* Feature sections */}
      <div className="jumbotron jumbotron-fluid feature" id="feature-first">
        <div className="container my-5">
          <div className="row justify-content-between text-center text-md-left">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="true"
              className="col-md-6"
            >
              <h2 className="font-weight-bold">Take a look inside</h2>
              <p className="my-4">
                Te iisque labitur eos, nec sale argumentum scribentur no,
                <br /> augue disputando in vim. Erat fugit sit at, ius lorem
                deserunt deterruisset no.
              </p>
              <a
                href="#"
                className="btn my-4 font-weight-bold atlas-cta cta-blue"
              >
                Learn More
              </a>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-once="true"
              className="col-md-6 align-self-center"
            >
              <img
                src="img/feature-1.png"
                alt="Take a look inside"
                className="mx-auto d-block"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="jumbotron jumbotron-fluid feature" id="feature-last">
        <div className="container">
          <div className="row justify-content-between text-center text-md-left">
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-once="true"
              className="col-md-6 flex-md-last"
            >
              <h2 className="font-weight-bold">Safe and reliable</h2>
              <p className="my-4">
                Duo suas detracto maiestatis ad, commodo lucilius invenire nec
                ad,
                <br /> eum et oratio disputationi. Falli lobortis his ad
              </p>
              <a
                href="#"
                className="btn my-4 font-weight-bold atlas-cta cta-blue"
              >
                Learn More
              </a>
            </div>
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="true"
              className="col-md-6 align-self-center flex-md-first"
            >
              <img
                src="img/feature-2.png"
                alt="Safe and reliable"
                className="mx-auto d-block"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Price Table */}
      <div className="container my-5 py-2" id="price-table">
        <h2 className="text-center font-weight-bold d-block mb-3">
          Check our pricing
        </h2>
        <div className="row">
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-once="true"
            className="col-md-4 text-center py-4 mt-5"
          >
            <h4 className="my-4">STARTUP</h4>
            <p className="font-weight-bold">
              $ <span className="display-2 font-weight-bold">0</span> / MO.
            </p>
            <ul className="list-unstyled">
              <li>Up to 5 Documents</li>
              <li>Up to 3 Reviews</li>
              <li>5 team Members</li>
              <li>Limited Support</li>
            </ul>
            <a
              href="#"
              className="btn my-4 font-weight-bold atlas-cta cta-ghost"
            >
              Get Free
            </a>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            className="col-md-4 text-center py-4 mt-5 rounded"
            id="price-table__premium"
          >
            <h4 className="my-4">PREMIUM</h4>
            <p className="font-weight-bold">
              $ <span className="display-2 font-weight-bold">10</span> / MO.
            </p>
            <ul className="list-unstyled">
              <li>Up to 15 Documents</li>
              <li>Up to 10 Reviews</li>
              <li>25 team Members</li>
              <li>Limited Support</li>
            </ul>
            <a
              href="#"
              className="btn my-4 font-weight-bold atlas-cta cta-green"
            >
              Get Free
            </a>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-once="true"
            className="col-md-4 text-center py-4 mt-5"
          >
            <h4 className="my-4">PROFESSIONAL</h4>
            <p className="font-weight-bold">
              $ <span className="display-2 font-weight-bold">30</span> / MO.
            </p>
            <ul className="list-unstyled">
              <li>Unlimited Documents</li>
              <li>Unlimited Reviews</li>
              <li>Unlimited Members</li>
              <li>Unlimited Support</li>
            </ul>
            <a
              href="#"
              className="btn my-4 font-weight-bold atlas-cta cta-ghost"
            >
              Get Free
            </a>
          </div>
        </div>
      </div>

      {/* Client Logos */}
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-md-2 py-2 align-self-center">
              <img
                src="img/client-1.png"
                className="mx-auto d-block"
                alt="Client 1"
              />
            </div>
            <div className="col-sm-4 col-md-2 py-2 align-self-center">
              <img
                src="img/client-2.png"
                className="mx-auto d-block"
                alt="Client 2"
              />
            </div>
            <div className="col-sm-4 col-md-2 py-2 align-self-center">
              <img
                src="img/client-3.png"
                className="mx-auto d-block"
                alt="Client 3"
              />
            </div>
            <div className="col-sm-4 col-md-2 py-2 align-self-center">
              <img
                src="img/client-4.png"
                className="mx-auto d-block"
                alt="Client 4"
              />
            </div>
            <div className="col-sm-4 col-md-2 py-2 align-self-center">
              <img
                src="img/client-5.png"
                className="mx-auto d-block"
                alt="Client 5"
              />
            </div>
            <div className="col-sm-4 col-md-2 py-2 align-self-center">
              <img
                src="img/client-6.png"
                className="mx-auto d-block"
                alt="Client 6"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
