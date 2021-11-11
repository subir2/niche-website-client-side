import React from 'react';
import'./Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {

  faPhone,
  faAddressCard,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-start">
                <h1>Tourism</h1>
                <div className="icons-container d-flex text-center ">
                  <div className="icon icon-insta">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                  </div>
                  <div className="icon icon-t">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </div>
                  <div className="icon icon-you">
                    <FontAwesomeIcon icon={faYoutube} />
                  </div>
                  <div className="icon icon-fb">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </div>
                </div>
                <p className="mt-4 ">
                  
                </p>

                <p className="mt-5">
                  <small>Shawon Sarker © . All rights reserved.</small>
                </p>
              </div>
            </div>
         
            <div className="col-md-7">
              <div className="right-footer-container">
             
                <div className="phone d-flex align-items-center justify-content-center mt-4 ">
                  <div className="foter-phone-icon">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div>
                    <h5>+01727589571</h5>
                  </div>
                </div>
                <div className="map d-flex align-items-center justify-content-center ">
                  <div className="foter-phone-icon">
                    <FontAwesomeIcon icon={faAddressCard} />
                  </div>
                  <div>
                    <p>
                     Dhaka Bangladesh 
                      <br /> 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Footer;