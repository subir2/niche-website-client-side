


import React from "react";

import './Banner.css';

import { Container, Button, Row } from "react-bootstrap";

import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";


const Banner = () => {
    return (
      <div>
          
      <div
        style={{
          background: `url('https://wallpapers.com/images/high/night-sky-stars-wallpaper-wallpaper-hd-wallpaper-y5pmbuy7mfv93mae.jpg')`,
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
                <h1 className="text-white">Where the journey begins!</h1>
              </Bounce>

              <Bounce right cascade>
                <p className="my-4 text-white fs-5">
                Let us transport you with our highly affordable and reliable holiday packages!
                </p>
              </Bounce>

              <Bounce>
                <Button
                  onClick={''}
                  className="rounded-pill fs-5 py-2 px-4"
                  variant="primary"
                >
                  View Services
                </Button>
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