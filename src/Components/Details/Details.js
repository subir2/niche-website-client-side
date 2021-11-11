import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import Navigation from "../Home/Navigation/Navigation";

const Details = () => {
  const [service, setService] = useState({});
  const { user } = useAuth();
  const { serviceId } = useParams();


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
      console.log(data);
    data.email = user?.email;
    data.status = "pending";
    fetch("http://localhost:5000/addOrders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    console.log(data);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/singleService/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div>
        <Navigation/>
    <div className="details-container">
        <h1>Purchase && order Page </h1>
      <div className="row container">
          
      <div className="col-md-6 col-lg-4">
              <div className="service p-3 border border m-2">
                <div className="service-img">
                  <img className="w-50" src={service?.image} alt="" />
                </div>
                <h1>{service.name}</h1>
                <p>{service.description}</p>
                <p>{service.price}</p>
               
                  <button  onClick={()=>onSubmit(service) }className="btn btn-success">Order Now</button>
                
              </div>
            </div>
         
   
        <div className="col-md-6">
          <form>
          <input
              {...register("displayName")}
             
              defaultValue={user?.displayName}
              className="p-2 m-2 w-100 input-field"
            />

            <input
              {...register("name")}
              placeholder="Name"
              defaultValue={service?.name}
              className="p-2 m-2 w-100 input-field"
            />

            <input
              {...register("description")}
              defaultValue={service?.description}
              placeholder="Description"
              className="p-2 m-2 w-100 input-field"
            />

            <input
              {...register("image", { required: true })}
              placeholder="Image Link"
              defaultValue={service?.image}
              className="p-2 m-2 w-100 input-field"
            />

            <input
              {...register("price", { required: true })}
              placeholder="Price"
              defaultValue={service?.price}
              type="number"
              className="p-2 m-2 w-100 input-field"
            />

            <select {...register("model")} className="p-2 m-2 w-100">
              <option value="premium">premium</option>
              <option value="classic">classic</option>
              <option value="business">business</option>
            </select>
            <br />

            {errors.exampleRequired && <span>This field is required</span>}

            
          </form>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Details;