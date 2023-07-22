import { useNavigate } from 'react-router-dom';
import {Brand,jwellery_type} from '../Data/Data';
import { useState } from 'react';
export default function Screen(){

  const nav = useNavigate()
  console.log(Brand);
  console.log(jwellery_type);
  const [product1,setproduct1]=useState(jwellery_type)
  
    return(
      <>
     <div className="Main-Head">
  <div className='MM'>
        <div className="Sc-Matter">
          <div>
            <img src={require('../Images/Jwellery Background/Giva Diva Sale.webp')} className='Sc-img'/>
            </div>
        </div>
        <div className='Sc-Product-List'>
          {
            product1.map(d=>(
              <div className='sreen-jwellery'  onClick={()=>nav('/Jwellery',{state:d})}>
                <img src={d.image} className='jwelleryimages'/>
                <div  className='jwellerytext'>
                  <h3>
                  {d.name}
                  </h3>
                </div>
                

              </div>
             

            ))
          }
          

        </div>

        <div  className='JWELLERY_TYPE'>
              <div className='Gold-Jwellery'>
                  <img className='g-jwel' src={require('../Images/Jwellery Background/GOLD JWELLERY.webp')}/>
              </div>
              <div className='Silver-jwellery'>
                  <img className='s-jwel' src={require('../Images/Jwellery Background/SILVER JWELLERY.jpg')}/>
              </div>

        </div>
        </div>
    
     </div>
      </>
    )
}