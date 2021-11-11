import React, { useEffect, useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

import "./Dashboard.css";


import useAuth from "../../Hooks/useAuth";

import AddServices from "./../AddServices/AddServices";
import MakeAdmin from "../Makeadmin/MakeAdmin";
import MyBookings from "../Mybooking/Mybookings";

const Dashbaord = () => {
  let { path, url } = useRouteMatch();
  const { user ,logOut} = useAuth();
  const [isAdmi, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/checkAdmin/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]?.role === "admin") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      });
  }, [user?.email]);
  console.log(isAdmi);
  return (
    <div>
      <div className="dashboard-container ">
        <div className="row">
          <div className="col-md-3 ">
            <div className="dashboard">
              <h5>Dashboard</h5>

              {!isAdmi && (<Link to={`${url}`} style={{ textDecoration: 'none' }}>
                <li className="dashboard-menu mt-5">My Booking</li>
              </Link>)}
{/* 
              <Link to={`${url}/BookingList`}>
                <li className="dashboard-menu mt-5">Booking list</li>
              </Link> */}

              {/* <Link to={`${url}/review`}>
                <li className="dashboard-menu mt-5">Review</li>
              </Link> */}
              <div className="admin-dashboard">
                <li className="dashboard-menu mt-5">Orders list</li>

                {isAdmi && (
                  <Link to={`${url}/Addservices`}style={{ textDecoration: 'none' }}>
                    <li className="dashboard-menu">Add Service</li>
                  </Link>
                )}
                 {isAdmi &&(
                <Link to={`${url}/Makeadmin`} style={{ textDecoration: 'none' }}>
                  <li className="dashboard-menu">Make Admin</li>
                </Link>)}


                {/* <Link to={`${url}/manageServices`}>
                  <li className="dashboard-menu">Manage Service</li>
                </Link> */}

{user?.email ?
                        <Button onClick={logOut} variant="light">Logout</Button> :
                        <Nav.Link as={Link} to="/Login">Login</Nav.Link>}
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <Switch>
              <Route exact path={path}>
                <MyBookings></MyBookings>
              </Route>
              {/* <Route exact path={`${path}/review`}>
                <Review></Review>
              </Route> */}
              {/* <Route exact path={`${path}/BookingList`}>
                <MyBookings></MyBookings>
              </Route> */}
              <Route exact path={`${path}/Makeadmin`}>
                <MakeAdmin></MakeAdmin>
              </Route>
              <Route exact path={`${path}/Addservices`}>
                <AddServices></AddServices>
              </Route>
              {/* <Route exact path={`${path}/manageServices`}>
                <ManageServices></ManageServices>
              </Route> */}
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashbaord;