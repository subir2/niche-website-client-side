


import React from "react";

import './Banner.css';

import { Container, Button, Row } from "react-bootstrap";

import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import { Link } from "react-router-dom";


const Banner = () => {
    return (
      <div>
          
      <div
        style={{
          background: `url('https://c4.wallpaperflare.com/wallpaper/928/479/800/baby-wallpaper-preview.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <div
            style={{ height: "90vh" }}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="text-center my-5 py-5">
              <Bounce left cascade>
                <h1 className="text-white">Your Baby Our Food!</h1>
              </Bounce>

              <Bounce right cascade>
                <p className="my-4 text-white fs-5">
                Make your child wardrobe brighter with us.
                </p>
              </Bounce>

              <Bounce>
              <Link to={`/explore`}>
                  {" "}
                  <button className="btn btn-success w-50">View Services</button>
                </Link>
                  
              </Bounce>
            </div>
          </div>
        </Container>
      </div>
      <div
        style={{ background: `url('')`, backgroundAttachment: "fixed" }}
      >
        
      </div>
    </div>
    );
};

export default Banner;