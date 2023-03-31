import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import './navstyle.scss';
import {Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';


const Navbar=()=>{
    const navigate=useNavigate();
  const handleSearch = () => {
    navigate("/login");
  };
  const homenav=()=>{
    navigate("/");
  }
    return(
<div  className="d-flex flex-row justify-content-between align-items-center mx-0 px-3 py-2" id="header" >
     <h3 onClick={homenav}  id="logo-name">Dubai</h3>
     
     
    
    <div id="buttons" className="d-flex flex-row  justify-content-end align-items-center ">
    <div id="nav-links" className="d-flex flex-row justify-content-evenly" >
           
           {/* <Link to={"/"} className="links" >Home</Link> */}
           <Link className="links" to={"/dsaf"} >Desert Safari</Link>
           <Link className="links" to={"/dexp"} >Desert Experience</Link>
           <Link className="links" to={"/dbug"}>Dune Buggies</Link>
           <Link className="links" to={"/special"} >Special Offers</Link>
          <PersonOutlineOutlinedIcon className="icons" onClick={handleSearch} ></PersonOutlineOutlinedIcon>
          <ShoppingBagOutlinedIcon className="icons" ></ShoppingBagOutlinedIcon>

        </div>
    
    
    
    </div>
</div>
    );
}

export default Navbar;