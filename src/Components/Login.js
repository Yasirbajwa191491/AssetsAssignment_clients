import { TextField, Button, Container } from '@material-ui/core';
import "../Pages/Login.css";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { URL } from "../http";
import swal from 'sweetalert';
const Login = () => {
  const navigate = useNavigate();

  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputError, setInputError] = useState("");
  useEffect(() => {
    if (inputEmail) {
      setInputError("");
    }
  }, [inputEmail]);

  useEffect(() => {
    if (inputPassword) {
      setInputError("");
    }
  }, [inputPassword]);
  const signin = async (e) => {
    e.preventDefault();
    
const res = await axios.post(URL+"/login", {
email:inputEmail,
password:inputPassword,
  });
if (res.data.message === "Login Success") {
  localStorage.setItem("UserType", res.data.UserType);
  localStorage.setItem("User_id",res.data.User_id);
  localStorage.setItem("bahrain-token",res.data.token);
  localStorage.setItem('user-name',res.data.name)

  swal({
    position: "center",
    icon: "success",
    title: res.data.message,
    timer: 3000,
   
  });
  navigate("/Home");
  window.location.reload();
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
  useEffect(()=>{
if(localStorage.getItem("bahrain-token")){
  navigate('/Home')
}
  },[])
  return (
    
      <div className='head' style={{ background: '#1A2B63', minHeight: '100vh' }}>
        
        <Container maxWidth="sm">
          <div className='container'>
         <img src="/images/icon.png" alt="Logo" style={{ maxWidth: "30%", height: "auto" }}/>
         <div className='typography'>
        <span className='small-text'>KINGDOM OF BAHRAIN</span>
       <br/>
        <span className='large-text'>Ministry of Interior</span>
  <br/>
  <span className='small-text'>HUMAN RESOURCES</span>
</div>
         </div>
         <br/>
         <br/>
         <br/>
          <TextField className='textfield'
            label="Username"
            type="email"
            variant="filled"
            fullWidth
            margin="normal"
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
          />
          <TextField className='textfield'
            label="Password"
            type="password"
            variant="filled"
            fullWidth
            margin="normal"
            value={inputPassword}
            onChange={(e) => setInputPassword(e.target.value)}
          />
          <div style={{ color: "red", margin: "10px" }}>{inputError}</div>
          <br/>
          <br/>
          <Button variant="contained" fullWidth className='loginButton' onClick={signin}>
            Login
          </Button>
        </Container>
        
      </div>
    
    
  
  );
};

export default Login;
