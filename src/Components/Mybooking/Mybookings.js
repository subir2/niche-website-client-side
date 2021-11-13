import React, { useEffect, useState } from "react";
import { Table,Button } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";


const MyBookings = () => {
  const { user } = useAuth();
  const [booking,setBooking]=useState([]);
  const[isdeleted,setIsdeleted]=useState(false);

  useEffect(() => {
    fetch(`https://intense-ravine-08808.herokuapp.com/myOrder/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, [user?.email,isdeleted]);
  
  console.log(booking);


  const handeldelete=(data)=>{
    alert("Do You Want To delete?")
    console.log(data);
    fetch(`https://intense-ravine-08808.herokuapp.com/deleteorder/${data}`,{
        method:"DELETE",
        headers:{"content-type":"application/json"},
    })
    .then(res=>res.json())
    .then(result=>{
        if(result.deletedCount){
         setIsdeleted(true);
        
        }
        else{
         setIsdeleted(false);
        }
    });
  }

  return (
    <div>
      <h1>MyBookings</h1>
      <Table striped bordered hover variant="dark">
  <thead>
    <tr>
    <th></th>
      <th>Name</th>
      <th>Description</th>
      <th>Price</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>

  {booking?.map((pd, index) => (
            
        
               <tr>
               <td> <img src={pd?.image} className="img-fluid" alt="" srcset="" /> </td>
               <td>{pd?.name}</td>
               <td>{pd?.description}</td>
               <td>{pd?.price}</td>
               <td>{pd?.status}</td>
              
               <Button  onClick={()=>handeldelete(pd?._id)} className="btn btn-warning">Delete</Button>
             </tr>
         
       ))}
    

   
    
  </tbody>
</Table>
    </div>
  );
};

export default MyBookings;