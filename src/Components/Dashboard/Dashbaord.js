import React, { useEffect, useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

import "./Dashboard.css";
import PrivateRoute from '../Login/PrivateRoute/PrivateRoute';

import useAuth from "../../Hooks/useAuth";

import AddServices from "./../AddServices/AddServices";
import MakeAdmin from "../Makeadmin/MakeAdmin";
import MyBookings from "../Mybooking/Mybookings";
import Pay from "../Pay/Pay";
import Home from "../Home/Home/Home";
import Review from "../Review/Review";
import MangeOrder from "../MangeOrder/MangeOrder";
import ManageAllproduct from "../ManageAllproduct/ManageAllproduct";
import Footer from "../Footer/Footer";

const Dashbaord = () => {
  let { path, url } = useRouteMatch();
  const { user ,logOut} = useAuth();
  const [isAdmi, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch(`https://intense-ravine-08808.herokuapp.com/checkAdmin/${user?.email}`)
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
            {<Link to="/home">
            <li  className="dashboard-menu mt-5"><i className="fa fa-fw fa-home"></i> Go To The Home Page</li></Link>}
              

         

              {!isAdmi && (<Link to={`${url}`} style={{ textDecoration: 'none' }}>
                <li className="dashboard-menu mt-5">My Orders</li>
              </Link>)}

              {!isAdmi && (<Link to={`${url}/pay`} style={{ textDecoration: 'none' }}>
                <li className="dashboard-menu mt-5">Payment</li>
              </Link>)}


{!isAdmi && ( <Link to={`${url}/review`} style={{ textDecoration: 'none' }}>
                <li className="dashboard-menu mt-5">Review</li>
              </Link>)}


              <div className="admin-dashboard">
                <li className="dashboard-menu mt-5">Orders list</li>

                {isAdmi && (
                  <Link to={`${url}/Addservices`}style={{ textDecoration: 'none' }}>
                    <li className="dashboard-menu">Add Service</li>
                  </Link>
                )}

                 {isAdmi && (
                 <Link to={`${url}/productList`} style={{ textDecoration: 'none' }}>
              <li className="dashboard-menu mt-5">Manage All Product</li>
            </Link>
                )}



                 {isAdmi &&(
                <Link to={`${url}/Makeadmin`} style={{ textDecoration: 'none' }}>
                  <li className="dashboard-menu">Make Admin</li>
                </Link>)}

                {isAdmi &&(
                <Link to={`${url}/manageServices`} style={{ textDecoration: 'none' }}>
                  <li className="dashboard-menu">Manage All Orders</li>
                
                </Link>)}

{user?.email ?
                        <Button onClick={logOut} variant="light">Logout</Button> :
                        <Nav.Link as={Link} to="/Login">Login</Nav.Link>}
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <Switch>

            <Route exact path="/home">
            <Home></Home>
            </Route>

              <PrivateRoute exact path={path}>
                <MyBookings></MyBookings>
              </PrivateRoute>
              <Route exact path={`${path}/review`}>
                <Review></Review>
              </Route>
              <Route exact path={`${path}/productList`}>
                <ManageAllproduct></ManageAllproduct>
              </Route>
         
              <Route exact path={`${path}/Makeadmin`}>
                <MakeAdmin></MakeAdmin>
              </Route>
              <Route exact path={`${path}/Addservices`}>
                <AddServices></AddServices>
              </Route>
              <Route exact path={`${path}/pay`}>
                <Pay></Pay>
              </Route>
              {isAdmi &&(
              <Route exact path={`${path}/manageServices`}>
               <MangeOrder/>
              </Route>) }
            </Switch>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Dashbaord;