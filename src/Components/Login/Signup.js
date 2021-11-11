import React, { useState } from 'react';
import { Col, Form, FormControl, InputGroup, Row,Button, Spinner } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock,faUser } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from '../../Hooks/useAuth';
import swal from 'sweetalert';

const Signup = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError ,hanldeUserInfoRegister} = useAuth();
    const history = useHistory();

   
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        // console.log(newLoginData);
        setLoginData(newLoginData);
    }
 

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
         registerUser(loginData.email, loginData.password,loginData.name,history);
         hanldeUserInfoRegister(loginData.email,loginData.name);
        e.preventDefault();
    }
    return (
        <div className="text-center my-4">
        <h2>Please Sign Up</h2>
        <p className=" mt-2">Sign Up with Email & Password</p>
        <p className="text-danger text-center">{''}</p>
        <div className="w-25 mx-auto">
          {!isLoading && <Form
           onSubmit={handleLoginSubmit}
          >
            
            <Row>
            <Col className="text-start">
              <Form.Label htmlFor="name" visuallyHidden>
                Your Name
              </Form.Label>
              <InputGroup className="mb-2">
                <InputGroup.Text>
                  <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </InputGroup.Text>
                <FormControl
                  onBlur={handleOnChange}
                  type="text"
                  autoComplete="current-text"
                  name="name"
                  placeholder="Enter your name"
                />
              </InputGroup>
            </Col>
          </Row>
  
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
                    name="password2"
                    placeholder="Re-Enter your password"
                  />
                </InputGroup>
              </Col>
            </Row>
            <Button type="submit" className="w-100 mt-3">
              Sign UP
            </Button>
          </Form>}
          {isLoading && <Spinner animation="border" />}
          {/* {user?.email && swal("Good job!", "You clicked the button!", "success")} */}
       
        </div>
        <p className="mt-2">
          <NavLink className="text-decoration-none" to="/login">
            Already have an account? Please login!
          </NavLink>
        </p>
      </div>
    );
};

export default Signup;