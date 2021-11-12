import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import sectionBg from "./../../images/bgsection.png"
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Bounce";
import Footer from "../Footer/Footer";
const About = () => {
  return (
      <>
    <div
      style={{ background: `url(${sectionBg})`, backgroundAttachment: "fixed" }}
      className="py-5"
    >
      <Container>
        <Zoom>
          <h2 className="text-center text-white mb-4">
            WELCOME TO BABY CARE WEBSITE
          </h2>
        </Zoom>
        <Row>
          <Col md className="pe-3">
            <Bounce bottom>
              <h5 className="text-white">About Us</h5>
              <p className="text-muted">
              Every mom knows that the best way to keep kids happy until dinner time is with a fun game or a yummy snack, and this is both!
              </p>
              <p className="text-muted">
              A weblog, also called a blog, is a type of Web page that you regularly update, like an online diary or journal. Blogs have become a popular way for families to share what is going on in their lives and it is a great way to post information about your baby. A blog is a good alternative to a more traditional Web site if you plan on making very frequent changes and additions.
              </p>
            </Bounce>
          </Col>
          <Col md className="pe-3">
            <Bounce bottom>
              <h5 className="text-white">Our Vision</h5>
              <p className="text-muted">
              A much better option is to create a Web site for your baby. This can be as simple as a single page with a few pictures and a few lines of text that describe the picture, or a larger site with pages for each stage of your baby's development. As you get more advanced, you can add movies, stories, and even a guest book for family members to add their own comments.
              </p>
              <h5 className="text-white">Our Mission</h5>
              <p className="text-muted">
              But isn't it hard to create a Web site? It can be if you are trying to learn everything on your own and you aren't very Internet savvy. If you don't know what HTML (hypertext markup language) and FTP (file transfer protocol) are, then you might have some learning to do if you want to start a Web site from scratch. Fortunately, there are many easy and free ways to create a Web site, even if you have no experience and don't know where to start.
              </p>
            </Bounce>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md>
            <Bounce bottom>
              <h5 className="text-white"></h5>
              <p className="text-muted">
                Be the first to know about news and updates.We never share you
                mail with others. Trust us!
              </p>
            </Bounce>
          </Col>
          <Col md className="d-flex align-items-center">
            <Bounce bottom>
              <Form className="w-100">
                <Form.Label className="text-white">
                  Leave your mail below
                </Form.Label>
                <Form.Group
                  className="d-flex text-white"
                  controlId="formBasicEmail"
                >
                  <Form.Control
                    style={{ background: "transparent", color: "white" }}
                    className="py-2 rounded-0"
                    type="email"
                    placeholder="Enter email"
                  />
                  <button
                    style={{ width: "120px" }}
                    className="btn rounded-0 btn-primary"
                  >
                    SIGN UP
                  </button>
                </Form.Group>
              </Form>
            </Bounce>
          </Col>
        </Row>
      </Container>
  
    </div>

     </>
    
  );
};

export default About;