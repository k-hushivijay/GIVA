// import axios from 'axios';
import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Sign_up(){
    const nav = useNavigate();
    

    const[fname,setfname]=useState("");
    const[lname,setlname]=useState("");
    const[email,setemail]=useState("");
    const[pass,setpass]=useState("");
    const[Cpass,setCpass]=useState("");

      async function User_Signup(){
        console.log("User-Details");
        console.log(fname);
        console.log(lname);
        console.log(email);
        console.log(pass);
        console.log(Cpass);
        const params ={
            "fname":fname,
            "lname":lname,
            "email":email,
            "pass":pass,
            "cpass":Cpass,
        }
        const res =    await axios.post("http://ankursingh.xyz/api/registerUser.php",params)
        console.log(res.data);

        const{success,message}=res.data


        // const params ={
        //     "fname":fname,
        //     "lname":lname,
        //     "email":email,
        //     "pass":pass,
        // }
        // const res = await axios.post("http://ankursingh.xyz/api/registerUser.php",params)
        // console.log(res.data);

        // const {success,message} = res.data
        if(success ){
            alert(message)
            nav('/Login')
            
            
            setfname("");
            setlname("");
            setemail("");
            setpass("");
            setCpass("");
        }
        else{
            alert("Enter Form")
        }
      
    }


    return(
        <>

        
        <div className="S-Upper">
            <div className="S-Matter">
                <img className='Matter-img' src={require('../Images/Jwellery Background/Logo Back.webp')}/>
                <h1>Sign-Up</h1>
                <div className="S-Inputs">
                    <input type="text" value={fname} onChange={name=>setfname(name.target.value)} className="input-1" placeholder="First-Name"/>
                    <input type="text" value={lname} onChange={name=>setlname(name.target.value)} className="input-2" placeholder="Last-Name"/>
                    <input  type="email" value={email} onChange={name=>setemail(name.target.value)} className="input-3" placeholder="Enter-Email"/>
                    <input type="password" value={pass} onChange={name=>setpass(name.target.value)} className="input-4" placeholder="Enter-Password"/>
                    <input type="password" value={Cpass} onChange={name=>setCpass(name.target.value)} className="input-5" placeholder="Confirm-Password"/>

                </div>
                <input className='Matter-input' onClick={User_Signup} type='submit' />
            </div>

        </div>
        </>
    )
}