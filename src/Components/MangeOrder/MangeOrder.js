import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";

const MangeOrder = () => {
    const {user}=useAuth();
  const [orders, setOrders] = useState([]);
  const { register, handleSubmit } = useForm();
  const[isdeleted,setIsdeleted]=useState(false);

  const [isstatus, setIsStatus] = useState(false)
  const [orderId, setOrderId] = useState("");

//   console.log(status);
  useEffect(() => {
    fetch("http://localhost:5000/allOrders")
      .then((res) => res.json())
      .then((data) => setOrders(data)
      
      );
  }, [isdeleted,isstatus]);

  // const status = "apporved";
  const handleOrderId = (id) => {
    setOrderId(id);
    console.log(id);
  };



  const handleOrderId1 = (data,id) => {
    console.log(data);
    fetch(`http://localhost:5000/statusUpdate/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => 
      {
         if(result){
           alert("Approved Successfully");
         }
        setIsStatus(result)
      }
      );
  };


  


  
  const handeldelete=(data)=>{
    alert("Do You Want To delete?")
    fetch(`http://localhost:5000/deleteorderManager/${data}`,{
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
    <div className="container">
      <h1>All orders {orders.length}</h1>

      <div className="services">
        <div className="row container">
          {orders?.map((pd, index) => (
            <div className="col-md-6 col-lg-4">
              <div className="service p-3 border border m-2">
                <div className="service-img">
                  <img className="w-50" src={pd?.image} alt="" />
                </div>
                <h1>{pd.name}</h1>
                <p>{pd.description}</p>
                <p>{pd.price}</p>
               
                  <button onClick={() => handleOrderId1(orders,pd?._id)} className="btn btn-success">Approved</button>
                  <button onClick={()=>handeldelete(pd._id)} className="btn bg-danger p-2">Delete</button>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MangeOrder;