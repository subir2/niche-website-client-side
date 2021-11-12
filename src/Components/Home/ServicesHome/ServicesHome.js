
import React, { useEffect, useState }  from 'react';
import { Card ,Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import './ServiceHome.css';
import Bounce from "react-reveal/Bounce";

const ServicesHome = () => {
    const [servicesHome, setServicesHome] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/allServices")
        .then((res) => res.json())
        .then((data) => setServicesHome(data));
    }, []);

    return (
        <div>
            <h1>Our Products</h1>
            <hr/>
              <div className="all-products mb-5">
              <Bounce>
              <div className="row container text-center">

                  {
                   servicesHome?.slice(0,6).map((pd,index)=>(
                      <div className="col-md-4 mt-2">
                          <div className="user  border border p-2  mt-5 mb-4 h-100">
                          <img className="img-fluid" src={pd?.image} alt="" srcset="" />
                          <h4>{pd.name}</h4>
                          <p>Rate:{pd.price} <em>৳</em></p>
                          
                   
                   
                          <Link to={`/services/${pd._id}`}>
                  {" "}
                  <button className="btn btn-success">Order Now</button>
                </Link>
                  
                          </div>
                      </div>

                   )
                   
                )
                  }


              </div>

              </Bounce>

            </div>
        </div>
    );
};

export default ServicesHome;