import React, { useEffect, useState } from "react";
import { Table ,Button} from "react-bootstrap";
import { useForm } from "react-hook-form";

const ManageAllproduct = () => {
  const [services, setServices] = useState([]);
  const[isdeleted,setIsdeleted]=useState(false);
  useEffect(() => {
    fetch("https://intense-ravine-08808.herokuapp.com/allServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [isdeleted]);

  const handeldelete=(data)=>{
    alert("Do You Want To delete?")
    fetch(`https://intense-ravine-08808.herokuapp.com/deleteproductManager/${data}`,{
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
        <h1>Manage All Product</h1>
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
  
    {services?.map((pd, index) => (
              
          
                 <tr>
                 <td> <img src={pd?.image} className="img-fluid" alt="" srcset="" /> </td>
                 <td>{pd?.name}</td>
                 <td>{pd?.description}</td>
                 <td>{pd?.price}</td>
                 <td>{pd?.status}</td>
                 <Button  onClick={()=>handeldelete(pd._id)} className="btn btn-warning">Delete</Button>
               </tr>
           
         ))}
      
  
     
      
    </tbody>
  </Table>
      </div>
    );
};

export default ManageAllproduct;