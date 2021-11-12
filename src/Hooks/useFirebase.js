import React from 'react';
import initilizeAuthentication from "../Components/Login/Firebase/Firebase.init";
//import { getAuth, signInWithPopup, GoogleAuthProvider ,signOut ,onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword,onAuthStateChanged,signOut,updateProfile} from "firebase/auth";
initilizeAuthentication();

const UseFirebase =()=>{
    const [isLoading, setIsLoading] = useState(true);
    const[user,setUser]=useState({});
    
    
const auth = getAuth();


const registerUser = (email,password,name,history) => {
    console.log(name);
   setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const newUser = { email, displayName: name };
            setUser(newUser);
             // send name to firebase after creation
             updateProfile(auth.currentUser, {
                displayName: name
            }).then(() => {
            }).catch((error) => {
            });
            history.replace('/');
           
        })
        .catch((error) => {
           
        })
     .finally(() => setIsLoading(false));
}

const hanldeUserInfoRegister = (email,name) => {
    fetch("https://intense-ravine-08808.herokuapp.com/addUserInfo", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ email ,name}),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
           const destination = location?.state?.from || '/';
           history.replace(destination);
         //   setAuthError('');
        })
        .catch((error) => {
        //    setAuthError(error.message);
        })
       .finally(() => setIsLoading(false));
}



useEffect(()=>{
const unsubscribed=onAuthStateChanged(auth,user=>{

    if(user){
        setUser(user);
    }
    else{
        setUser({})
    }
    setIsLoading(false);

});
return ()=>unsubscribed;


},[])

const logOut=()=>{
    signOut(auth)
    .then(()=>{});
}
return {
    user,
    setUser,
    logOut,
    registerUser,
    loginUser,
    isLoading,
    hanldeUserInfoRegister

}


}
export default UseFirebase;