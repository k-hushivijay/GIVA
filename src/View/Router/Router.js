import {Routes, Route ,Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import Screen from "../Screen/Screen";
import Sign_up from "../Screen/Sign_up";
import Login from "../Screen/Login";
import Jwellery from "../Screen/Jwellery";
import Select_Jwellery from "../Screen/Select_Jwellery";


export default function Router(){
    
    // const loc = useLocation()
    // const [ Data,setData]= useState(loc.state)
    // console.log(Data);
    const nav=useNavigate()
    const[user,setuser]= useState(localStorage.getItem('user'))
    function logout(){
        console.log("Logout");
        localStorage.clear()
        nav('/')
        window.location.reload()
    }
    


    return(
        
       <>
       <div className="R-Head">
       {/* <div className="R-txt">
            <h3 className="RR-TEXT" onClick={()=>nav('/Jwellery')} >
                Pandents
                Earings
                Rings
                Bangles
            </h3>
        </div> */}
       
        <div className="R-Logo">
            <img src={require('../Images/LOGO IMAGES/GivaLogo.avif')}/>
          

        </div>
        
        {
        user==null?
        <>
      
       <Link className="Sign-upLINK" to="/Login">
 </>:

       <button className="Routerbtn" onClick={logout}>Logout</button>

    

        
        
        
        <img src={require('../Images/LOGO IMAGES/User.png')}/>
       </Link>
}
       
       <Link className="CartLink" to='/Cart'>
        <img  src={require('../Images/LOGO IMAGES/Bag.png')} className="bagL"/>
       </Link>
       
       </div>



       <Routes>
        <Route path="/" Component={Screen}/>
        <Route path="/Sign_up" Component={Sign_up}/>
        <Route path="/Login" Component={Login}/>
        <Route path="/Jwellery" Component={Jwellery}/>
        <Route path="/Select_Jwellery" Component={Select_Jwellery}/>
       </Routes>
       </>
    )
}