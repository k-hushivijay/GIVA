import axios from 'axios';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login(){

    const nav = useNavigate()
    const [email,setemail]=useState("");
    const [ pass,setpass]=useState("");

  async  function Login(){
        console.log("User-Login");
        console.log(email);
        console.log(pass);

        const params=   {
            "email":email,
            "pass":pass,
        }
        const res = await axios.post("http://ankursingh.xyz/api/Employeelogin.php",params)
        console.log(res.data);

        const{success,message}=res.data

        if(success){
            alert(message)
            localStorage.setItem("user",email)
            nav('/')
            window.location.reload()

            setemail("");
            setpass("");
        }
        else{
            alert("information is not correct")
        }

    }
    function register(){
            nav("/Sign_up")

    }
    return(
        <>
        <div className="L-Head">
            <div className="L-Matter">
            <img  className='L-image' src={require('../Images/Jwellery Background/Anushka Sharma.jpg')}/>
                <h1>
                    Log-In
                </h1>
                
                <div className="L-Inputs">
                    <input value={email} onChange={name=>setemail(name.target.value)} type="email" placeholder="User-Email"/>
                    <input value={pass} onChange={name=>setpass(name.target.value)} type="password" placeholder="User-Password"/>
                </div>
                <div className='Submit'>
                <input onClick={Login} type='submit' value="login"/>
                </div>
                <div className='SSS'>
                <input onClick={register} type='submit' value="Sign-Up"/>
                </div>
            </div>
           

        </div>

        
        </>
    )
}