import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navigation from "../Home/Navigation/Navigation";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://intense-ravine-08808.herokuapp.com/allServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(services);
  return (
    <div>
        <Navigation/>
      <h1>Our Products</h1>
      <div className="services">
        <div className="row container ">
          {services?.map((pd, index) => (
            <div className="col-md-6 col-lg-4 mb-2">
              <div className="service p-3 border border  h-100">
                <div className="service-img">
                  <img className="w-50" src={pd?.image} alt="" />
                </div>
                <h4>{pd.name}</h4>
                <p>{pd.description}</p>
                <p>Rate : {pd.price} <em>৳</em></p>
                <Link to={`/services/${pd._id}`}>
                  {" "}
                  <button className="btn btn-success">Order Now</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Services;