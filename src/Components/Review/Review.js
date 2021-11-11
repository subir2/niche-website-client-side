import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";



const Review = () => {
    
  const { register, handleSubmit, watch, errors ,reset} = useForm();
  const { user } = useAuth();
  const onSubmit = (data) => {
   
    fetch("http://localhost:5000/addSReview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
 
      .then(result=>{
          if(result){
           alert("Review Posted Sucessfully")
      reset();

          }
          
      });

    console.log(data);
  };
  return (
    <div>
      <h1>Review</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-field"
          name="email"
          value={user?.email}
          type="email"
          {...register("email", { required: true })}
        />
        <br />
        <input
          className="input-field"
          name="comments"
          placeholder="Comments"
          {...register("comments", { required: true })}
        />
        <br/>
        <br/>
          <input
          className="input-field"
          name="ratings"
          type="number"
          placeholder="Ratings 0-5"
          {...register("ratings", { required: true })}
        />
        <br />

        <input
          className="submit-btn btn btn-danger mt-3"
          type="submit"
         
          value="Register"
        />


      </form>
    </div>
  );
};

export default Review;