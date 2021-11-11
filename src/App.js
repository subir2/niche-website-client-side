import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from './Components/Footer/Footer';
import Navigation from './Components/Home/Navigation/Navigation';
import Login from './Components/Login/Login';
import Signup from './Components/Login/Signup';
import AuthProvider from './Components/contexts/AuthProvider';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';

import AddServices from './Components/AddServices/AddServices';
import Services from './Components/Services/Services';
import Details from './Components/Details/Details';
import MakeAdmin from './Components/Makeadmin/MakeAdmin';
import Dashbaord from './Components/Dashboard/Dashbaord';

function App() {
  return (
   
    <div className="App">
      <AuthProvider>
 <Router>
  
        <Switch>

            <Route exact path="/">
            <Home></Home>
            </Route>
            <Route path="/home">
        <Home></Home>
        </Route>

        {/* <Route path="/Addservices">
        <AddServices/>
        </Route> */}

        <Route path="/services/:serviceId">
     <Details/>
        </Route>

        <Route path="/explore">
       <Services/>
        </Route>


        <Route path="/Login">
        <Login/>
        </Route>

        <PrivateRoute path="/Dashboard">
        <Dashbaord/>
        </PrivateRoute>

        {/* <Route path="/Makeadmin">
        <MakeAdmin/>
        </Route> */}

        <Route path="/signup">
        <Signup/>
        </Route>
      </Switch>
      
      </Router>
      </AuthProvider>


    </div>
  );
}

export default App;
