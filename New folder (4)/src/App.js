import logo from './logo.svg';
import './App.css';
import React from "react"
import img1 from "./images/upperpart.png";
import img2 from "./images/lowerpart.png"
import img3 from "./images/middleportion.png"
import img4 from "./images/abovefooter.png"
import img5 from "./images/footer.png"
// import Login from '../Login';
import { Link, Route } from "react-router-dom";
// import Allroutes from './Allroutes';
// import Allroutes from './Allroutes';
function App() {
  return (
    <div>
    
     <div id="navbar">
    <h1>crunchbase</h1>
    <input className="searc" type="text" placeholder="Search crunchbase"/>
    <h4>Advanced</h4>
    <h4>Solutions </h4>
    <h4>Products</h4>
    <h4>Resources</h4>
    <h4>Pricing</h4>
    
    {/* <h4><a href="signin.html">Login</a></h4> */}
   
    </div>

   <div>
    <img src={img1} alt="" />
    <img src={img2} alt="" />
    <img src={img3} alt="" />
    <img src={img4} alt="" />
    <img src={img5} alt="" />
   </div>




<div className="App"> 
    
    </div>


    </div>
   
  );
}


export default App;
