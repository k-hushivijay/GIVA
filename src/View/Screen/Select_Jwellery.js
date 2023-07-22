import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { Rings, bangles, earings, pandents } from "../Data/Data";



export default function Select_Jwellery()
{


    const loc = useLocation()
    const nav = useNavigate()

    const [Data,setData]=useState(loc.state);
    
   
    console.log(Data);
    return(
       <>

       <div className="S--Main">
                     <div className="S--Head">
            
            
                                      <img src={Data.image} className="S--Image"/>
            

                     </div>
                   <div className="S--Mid">
                                        <h1>{Data.name}</h1>
                                        <h1>{Data.rate}</h1>
                                        <button className="SS-BTN">Add-To-Cart</button>
                                        <button className="SS_BTN_1">Buy It Now</button>
                                        <button className="SS-BTN-2">
                                          <img src={require('../Images/LOGO IMAGES/Heart.webp')} className="BTTN-img"/>
                                          ADD TO WISHLIST

                                        </button>

                                        <div className="S--Mid-img">
                                          <img  src={require('../Images/LOGO IMAGES/warranty.png')}className="Mid-img-1"/>
                                          
                                          <img src={require('../Images/LOGO IMAGES/shipping.webp')} className="Mid-img-2"/>
                                          
                                          <img src={require('../Images/LOGO IMAGES/reuturn.avif')} className="Mid-img-3"/>
                                                    
                                         
                                          

                                        </div>
                                        <div className="S--Mid_txt">
                                        <h3>6 Months warranty</h3>
                                          <h3>Free shipping</h3>
                                          <h4>Easy Return</h4>
                                        </div>
                                        
            
                     </div>

       </div>
       </>
    )
}