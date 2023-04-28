import { Container } from "react-bootstrap";
import "../Pages/ManageReq.css";
import Button from 'react-bootstrap/Button';
import { faArrowsRotate,faCompactDisc,faWifi} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UsbFilled } from '@ant-design/icons';
import { URL } from "../http";
import { useState } from "react";
import axios from "axios";
import Logout from "./Logout";

import swal from 'sweetalert';
import Navigation from "./Navigation";

const ManageReq = () => {
  const [cd, setCd] = useState("");
  const [usb, setUsb] = useState("");
  const [internet, setInternet] = useState("");
  const [startingDate, setStartingDate] = useState("");
  const [enddate, setEnddate] = useState("");

  const sendReq = async (usb, cd, internet) => {
    
     if (usb) {
      const res = await axios.post(URL+"/Usb_Submission", {
        StartingDate: startingDate,
        EndDate: enddate,
        UserID: localStorage.getItem("User_id")
      });
      if(res.data.message === "USB Submission Successfully"){
     
        swal({
          position: "center",
          icon: "success",
          title: res.data.message,
          timer: 3000,
         
        });
          setTimeout(() => {
            window.location.reload();
          }, 3000);
    }
      else{
     
        swal({
          position: "center",
          icon: "error",
          title: res.data.error,
          timer: 3000,
         
        });
          setTimeout(() => {
            window.location.reload();
          }, 2000);

      }
  }
  if (cd) {
    const res = await axios.post(URL+"/CD_Submission", {
      StartingDate: startingDate,
      EndDate: enddate,
      UserID: localStorage.getItem("User_id")
    });
    if(res.data.message === "CD Submission Successfully"){
   
      swal({
        position: "center",
        icon: "success",
        title: res.data.message,
        timer: 3000,
       
      });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
        
  }
    else{
      
      swal({
        position: "center",
        icon: "error",
        title: res.data.error,
        timer: 3000,
       
      });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
    }

  }
  if (internet) {
    const res = await axios.post(URL+"/Internet_Submission", {
      StartingDate: startingDate,
      EndDate: enddate,
      UserID: localStorage.getItem("User_id")
    });
    if(res.data.message === "Internet Submission Successfully"){
     
      swal({
        position: "center",
        icon: "success",
        title: res.data.message,
        timer: 3000,
       
      });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
        
  }
    else{
     
      swal({
        position: "center",
        icon: "error",
        title: res.data.error,
        timer: 3000,
       
      });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
    }
  }
  };
  
  
    return (

      
   
        <div className='head' style={{ background: '#1A2B63', minHeight: '100vh' }}>
          <Navigation/>
          <Container maxWidth="sm">
            <div className='req_container'>
           <img src="/images/icon.png" alt="Logo" style={{ maxWidth: "20%", height: "auto" }}/>
           <div className='typography'>
          <span className='small-text'>KINGDOM OF BAHRAIN</span>
         <br/>
          <span className='large-text'>Ministry of Interior</span>
         <br/>
        <span className='small-text'>HUMAN RESOURCES</span>
       </div>
           </div>
   
    
  
          
          </Container>
          <br/>
          <br/>
       
         <div className="req_page">
          <Logout/>
          <br/>
          <br/>
         <Button variant="primary" size="lg" className="req_Buttons" disabled>
     
       <div className="req_text">
         
     <FontAwesomeIcon icon={faArrowsRotate} size="xl" style={{"--fa-primary-color": "#8e8f90", "--fa-secondary-color": "#8e8f90", marginRight: "30px" }} />   Make a Request
     </div>
          </Button>
   <br/>
   <br/>
  
   <label className="req_option">
    <input type="radio" name="access" value="usb"  onChange={e => setUsb(e.target.value) }/>
    <div className="req_text1">
      <UsbFilled style={{ fontSize: '40px',marginRight: "30px" }}/> Access for USB
    </div>
  </label>
  <br/>
  <br/>
  <br/>
  <label className="req_option">
    <input type="radio" name="access" value="cd"  onChange={e => setCd(e.target.value)} />
    <div className="req_text1">
      <FontAwesomeIcon icon={faCompactDisc} style={{ fontSize: '40px',marginRight: "30px" }} /> Access for CD
    </div>
  </label>
  <br/>
  <br/>
  <br/>
  <label className="req_option">
    <input type="radio" name="access" value="internet" onChange={e => setInternet(e.target.value) }/>
    <div className="req_text1">
      <FontAwesomeIcon icon={faWifi} style={{ fontSize: '40px',marginRight: "30px" }} /> Access for Internet
    </div>
  </label>
  <br/>
  <br/>
  <br/>
  <div>
         <label for="from-date" style={{ fontSize: '20px', color: "white" }}>From:</label>
         
         <label for="to-date"  style={{ fontSize: '20px',marginLeft: "180px", color: "white" }}>Till:</label>
         <br/>
         <input type="date" id="from-date" name="from-date" style={{ borderRadius: "10px",width: "150px", height:"20px", fontFamily:"sans-serif",fontSize:"15px" }} value={startingDate} onChange={e => setStartingDate(e.target.value)}/>
       
         
         <input type="date" id="to-date" name="to-date" style={{ marginLeft: "80px",borderRadius: "10px",width: "150px", height:"20px", fontFamily:"sans-serif",fontSize:"15px" }} value={enddate} onChange={e => setEnddate(e.target.value)}/>
         </div>
         <br/>
         <br/>
         <Button variant="contained" className='signupbutton' style={{marginLeft: "170px", color:"#1A2B63", width: "150px"}} onClick={() => sendReq(usb, cd, internet)}>
          
          Send Request
          
         </Button>

         </div>
        
         
  </div>
      
      
    
    );
}
export default ManageReq;