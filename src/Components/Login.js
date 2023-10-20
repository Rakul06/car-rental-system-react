import React from 'react';
import './Login.css'
import benz from '../img/Benz.png'
import { useState ,useEffect,useContext} from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import { UserContextFromApp } from '../App';
import {UserContextFromDisp} from '../Components/DisplayComponent'
import {fecthDetails} from '../App'


const Login = ({setShowNav,setUserName}) => {

  const {carDetails}=useContext(UserContextFromApp)
  const {setCarBookingHome}=useContext(UserContextFromDisp);

  console.log("carr from  loin.js context ", carDetails)

  const navigate=useNavigate();
  const [regUsers,setRegUsers]=useState([]);
  const[userDetails,setUserDetails]=useState({
    userName:"",
    passWord:""
  });
  
  useEffect(()=>{
    fecthDetails("https://testdata-9o57.onrender.com/regDetails", setRegUsers)
  },[])

  let handleDetails=(event)=>{
    let name=event.target.name;
    let value=event.target.value;
    setUserDetails((obj)=>{
      return({...obj,[name]:value})
    })
    

  }

  let validateData=(event,userEnterdData)=>{
    event.preventDefault();
    let uName=false,pass=false;
    let uNameError=document.getElementById("userNameError");
    let password=document.getElementById("passWordError");
    let invalid=document.getElementById("invalid");

    let filterFromJson=regUsers.filter((obj)=>(
      userDetails.userName===obj.email
    ))
    userEnterdData.userName===""?uNameError.innerHTML="user email cannot be empty":uNameError.innerHTML="";
    filterFromJson=="" && userEnterdData.passWord==""?password.innerText="password cannot be empty":password.innerText="";
    filterFromJson==""?uName=false:uName=true;
    filterFromJson==""?invalid.innerHTML="No data found invalid login credentials...":invalid.innerHTML="";
    if(filterFromJson.length > 0){
      if((filterFromJson[0].password)===(userDetails.passWord)){
        pass=true;
        password.innerText="";
      }
      else{
        if(userDetails.passWord.length>0){
          password.innerText="incorrect password";
        }
        else{
          password.innerText="password cannot be empty"
        }
        
      }
    }

    if(uName&&pass){
      alert("Login Sucessfull !!!!")
      navigate("/");
      setShowNav(true);
      setCarBookingHome((obj)=>{
        return({...obj,login:true})
      });
      setUserName(filterFromJson[0].name);
     
    }
    else{
      console.log("failed")
    }
   
    
  }
  return (
    <>
      <div className='main-container'>
        <div className='form'>
          <form action="" onSubmit={(event)=>validateData(event,userDetails)}>
            <h2>Login</h2>
            <div className='uname'>
              <label style={{display:"block"}} htmlFor="">User email</label>
              <input type="email" value={userDetails.userName || ""} name='userName' onChange={handleDetails}/>
            </div>
            <span id="userNameError"></span>
            <div className='upass'>
              <label style={{display:"block"}} htmlFor="">Password</label>
              <input type="password" name="passWord"  value={userDetails.passWord || ""} onChange={handleDetails}/>
              <br />
              <span id="passWordError"></span>
            </div>
            
            
            <p><button id="btn" type='submit'>Login</button></p>
            <span id="invalid" style={{marginLeft:"46px"}}></span>
            <div style={{fontSize:"large",padding:"10px",marginTop:"20px"}}>
              <Link>Forgot Password ?</Link>
              <div style={{float:"right"}}><Link to="/Login/Register"> Register Here !!!</Link></div>
            </div>
          </form>
        </div>
        <div className='image'>
          <p ><b style={{color:"#706c6e"}}>LUXURY CAR FROM RS.5000 PER DAY </b></p>
          <p style={{fontSize:"large",color:"#fffefe",}}>Treat yourself in INDIA</p>
          <img src={benz} alt="" />
        </div>
      </div>
    </>
    

  )
}

export default Login