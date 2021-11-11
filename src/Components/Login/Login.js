import React, { useState } from 'react';
import { Col, Form, FormControl, InputGroup, Row,Button, Spinner } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

import useAuth from '../../Hooks/useAuth';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import Navigation from '../Home/Navigation/Navigation';
import Footer from '../Footer/Footer';
const Login = () => {

 
  const location = useLocation();
  const history = useHistory();
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();
   

    const handleOnChange = e => {
        const field = e.target.name;
         const value = e.target.value;
         const newLoginData = { ...loginData };
         newLoginData[field] = value;
         setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
      loginUser(loginData.email, loginData.password,location,history);
        e.preventDefault();
    }

    return (
        <div className="text-center my-4">
          <Navigation/>
        <h2>Please Login</h2>
        <p className=" mt-2">Login with Email & Password</p>
        <p className="text-danger text-center">{''}</p>
        <div className="w-25 mx-auto">
          <Form onSubmit={handleLoginSubmit}>
            <Row>
              <Col className="text-start">
                <Form.Label htmlFor="email" visuallyHidden>
                  Your Email Address
                </Form.Label>
                <InputGroup className="mb-2">
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                  </InputGroup.Text>
                  <FormControl
                     onBlur={handleOnChange}
                    type="email"
                    autoComplete="current-email"
                    name="email"
                    placeholder="Enter your email address"
                  />
                </InputGroup>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col className="text-start">
                <Form.Label htmlFor="password" visuallyHidden>
                  Your Password
                </Form.Label>
                <InputGroup className="mb-2">
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
                  </InputGroup.Text>
                  <FormControl
                    onBlur={handleOnChange}
                    type="password"
                    autoComplete="current-password"
                    name="password"
                    placeholder="Enter your password"
                  />
                </InputGroup>
              </Col>
            </Row>
            <Button  type="submit" className="btn btn-primary mt-2 w-100">Login</Button>
            {/* <button type="submit" className="btn btn-primary mt-2 w-100">
              Login
            </button> */}
          </Form>
          {isLoading && <Spinner animation="border" />}
        </div>
        <p className="mt-2">
          <NavLink className="text-decoration-none" to="/signup">
            Need an Account? Please Sign up!
          </NavLink>
        </p>
      <Footer/>
       
      </div>
    );
};

export default Login;