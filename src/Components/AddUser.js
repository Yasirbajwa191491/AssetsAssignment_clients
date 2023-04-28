import { TextField, Container, Button} from '@material-ui/core';
import { useState, useEffect } from "react";
import "../Pages/AddUser.css";
import axios from 'axios';
import swal from 'sweetalert';
import { URL } from "../http";
import Logout from './Logout';

const AddUser = () => {
 
const [inputfname, setInputfname] = useState("");
const [inputlname, setInputlname] = useState("");
const [inputemail, setInputemail] = useState("");
const [inputpassword, setInputpassword] = useState("");
const [inputcpassword, setInputcpassword] = useState("");
const [usertype, setUsertype] = useState("");


const registerUser = async (e) => {
  e.preventDefault();

  const res = await axios.post(URL+'/signup', {
    fname:inputfname,
    lname:inputlname,
    email:inputemail,
    password:inputpassword,
    cpassword:inputcpassword,
    UserType:usertype
  });
  if(res.data.message === "User Created"){
  swal({
    position: "center",
    icon: "success",
    title: res.data.message,
    timer: 3000,
   
  });
}
  else{
   
    swal({
      position: "center",
      icon: "error",
      title: res.data.error,
      timer: 3000,
     
    });
  }

 
   
  
  
}
return (
<div className='head' style={{ background: '#1A2B63', minHeight: '100vh' }}>

<Container maxWidth="sm">

<div className='container'>
         <img src="/images/icon.png" alt="Logo" style={{ maxWidth: "25%", height: "auto" }}/>
         <div className='typography'>
        <span className='small-text'>KINGDOM OF BAHRAIN</span>
       <br/>
        <span className='large-text'>Ministry of Interior</span>
  <br/>
  <span className='small-text'>HUMAN RESOURCES</span>
</div>
         </div>
      <br/> 
      <Logout/>
      <br/>
<form onSubmit={registerUser}>
<TextField className='textfield'
            label="First Name"
            type="text"
            variant="filled"
            margin="normal"
            value={inputfname}
            onChange={(e) => setInputfname(e.target.value)}
 />
 
 <TextField className='textfield'
            label="Last Name"
            type="text"
            variant="filled"
            margin="normal"
            style={{marginLeft:"10px"}}
            value={inputlname}
            onChange={(e) => setInputlname(e.target.value)}
 />
<br/>
<TextField className='textfield'
            label="Email"
            type="email"
            variant="filled"
            margin="normal"
            value={inputemail}
            onChange={(e) => setInputemail(e.target.value)}
            
 />
 <TextField className='textfield'
            label="Password"
            type="password"
            variant="filled"
            margin="normal"
            style={{marginLeft:"10px"}}
            value={inputpassword}
            onChange={(e) => setInputpassword(e.target.value)}
 />
 <br/>
 <TextField className='textfield'
            label="Confirm Password"
            type="password"
            variant="filled"
            margin="normal"
            value={inputcpassword}
            onChange={(e) => setInputcpassword(e.target.value)}
            
 />
  <select
            name="UserType"
            className="select"
            onChange={(e) => setUsertype(e.target.value)}
          >
            <option value="none" selected disabled hidden>
              Select User Type 
            </option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
          <br/>
          <br/>
          <br/>
          <Button variant="contained" className='signupbutton' style={{marginLeft: "170px", color:"#1A2B63"}} onClick={registerUser}>
            Add User
          </Button>
          
      
</form>
</Container>
</div>


);
}
export default AddUser;