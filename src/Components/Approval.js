
import { Container} from "@material-ui/core";
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck,faSpinner,faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Logout from "./Logout";
const Approval = () => {
    const [data, setData] = useState([]);
   useEffect(() => {
 axios.get()
   
     
   }, [])
   
    const handle_app = () => {

    }
    const handle_pend = () => {

    }
    return(
<div className='head' style={{ background: '#1A2B63', minHeight: '100vh' }}>
        
        <Container maxWidth="sm">
          <div className='home_container'>
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
<br/>
<Logout/>
<br/>
<br/>
<Button variant="primary" size="lg" className="Buttons" onClick={handle_pend}>
     
     <div className="text">
         
     <FontAwesomeIcon icon={faSpinner}  size="xl" style={{"--fa-primary-color": "#8e8f90", "--fa-secondary-color": "#8e8f90", marginRight: "30px" }} />   Pending Requests
     </div>
   </Button>
   <br/>
   <br/>
    <Button variant="primary" size="lg" className="Buttons" onClick={handle_app}>
     
     <div className="text">
     <Link to='/ApprovedRequests' style={{color:'#a9a9a9',textDecoration:'none'}}>       
     <FontAwesomeIcon icon={faListCheck} size="xl" style={{"--fa-primary-color": "#8e8f90", "--fa-secondary-color": "#8e8f90", marginRight: "30px" }} />   Approved Requests
     </Link>
     </div>
   </Button>
 
   
   <br/>
   <br/>
   <Button variant="primary" size="lg" className="Buttons" onClick={handle_pend}>
     
     <div className="text">
     
     <FontAwesomeIcon icon={faCircleXmark}  size="xl" style={{"--fa-primary-color": "#8e8f90", "--fa-secondary-color": "#8e8f90", marginRight: "30px" }} />   Rejected Requests
     
     </div>
   </Button>
</Container>
</div>
    );
}
export default Approval;