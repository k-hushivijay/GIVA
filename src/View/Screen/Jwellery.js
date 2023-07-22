import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import {Dashbords, Rings, bangles, earings, pandents } from "../Data/Data";

export default function Jwellery(){
    const loc = useLocation()
    const[Data,setData]= useState(loc.state)
    const nav = useNavigate()
    // const [product2,setproduct2]=useState()
   console.log(Data);
    

    // useEffect(()=>{


    //     function show(){
    //         setproduct2(Rings.filter(d=>d.pid==Data.id))
    //         setproduct2(pandents.filter(d=>d.pid==Data.id))
    //         setproduct2(bangles.filter(d=>d.pid==Data.id))
    //         setproduct2(earings.filter(d=>d.pid==Data.id))
    //     }
    
    //     show()
    
    // },[])
    return(
      <>
      <div className="J-Main">
         <div className="J-Head">
           
            </div>
              <div className="J-Main_jwellery" >
                {
                    Data.name=="Rings"?
                  Rings && Rings.map(e=>(
                        <div className="product2-j" onClick={()=>nav('/Select_Jwellery',{state:e})}>
                            <img className="JJ-IMG" src={e.image}/>
                            <h1 className="JJ-txt">{e.name}</h1>

                        </div>
                    ))
                    :
                    Data.name=="Pendants"?
                    pandents && pandents.map(e=>(
                        <div className="product2-j" onClick={()=>nav('/Select_Jwellery',{state:e})}>
                            <img className="JJ-IMG" src={e.image}/>
                            <h1 className="JJ-txt">{e.name}</h1>

                        </div>
                    ))
                    :
                    Data.name=="Earings"?
                    earings &&  earings.map(e=>(
                        <div className="product2-j" onClick={()=>nav('/Select_Jwellery',{state:e})}>
                            <img className="JJ-IMG" src={e.image}/>
                            <h1 className="JJ-txt">{e.name}</h1>


                        </div>
                    ))
                    :
                    Data.name=="Bangles"?
                    bangles &&  bangles.map(e=>(
                        <div className="product2-j" onClick={()=>nav('/Select_Jwellery',{state:e})}>
                            <img className="JJ-IMG" src={e.image}/>
                            <h1 className="JJ-txt-3">{e.name}</h1>

                        </div>
                    ))
                    :null
                }
            </div>
        </div>


      </>
    )
}