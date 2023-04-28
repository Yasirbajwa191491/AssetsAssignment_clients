
import { Container} from "@material-ui/core";
import Button from 'react-bootstrap/Button';
import { faArrowsRotate, faRotateLeft,faCircleCheck,faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom";
import "../Pages/Home.css"
import Logout from "./Logout";
import { useEffect } from "react";

const Home = () =>{
  const navigate = useNavigate();
  const handleReq = () => {
    navigate("/Request");
  }
  const handle_Add = () => {
    navigate("/AddUser");
  }
  const handle_app = () => {
    navigate("/Approval");
  }
  const handle_reqhist = () => {
    navigate("/RequestHist")
  }
useEffect(()=>{
document.title='Logged- '+localStorage.getItem('user-name')
},[])
    return (

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
<div>
    <br/>
    <br/>
   <Logout/>
   
    {
  localStorage.getItem("UserType")==='User'&&  
  <> 
  <br/>
    <br/> 
  <Button variant="primary" size="lg" className="Buttons" onClick={handleReq}>
     
        <div className="text">
            
        <FontAwesomeIcon icon={faArrowsRotate} size="xl" style={{"--fa-primary-color": "#8e8f90", "--fa-secondary-color": "#8e8f90", marginRight: "30px" }} />   Make a Request
        </div>
      </Button>
      </>
    }
      
   
      {
  localStorage.getItem("UserType")==='User'&& 
<>
<br/><br/>
      <Button variant="primary" size="lg" className="Buttons" onClick={handle_reqhist}>
     
        <div className="text">
            
        <FontAwesomeIcon icon={faRotateLeft} size="xl" style={{"--fa-primary-color": "#8e8f90", "--fa-secondary-color": "#8e8f90", marginRight: "30px"}} />   My Request History
        </div>
      </Button>
      </>
      }
     
      {
  localStorage.getItem("UserType") !=='User'&&   
  <> 
  <br/>
      <br/>
  <Button variant="primary" size="lg" className="Buttons" onClick={handle_app}>
     
     <div className="text">
         
     <FontAwesomeIcon icon={faCircleCheck} size="xl" style={{color: "#707275", marginRight: "30px"}} />   My Approvals
     </div>
   </Button>
   </>
}
{
  localStorage.getItem("UserType") !=='User'&&   
  <> 
  <br/>
      <br/>
      <Button variant="primary" size="lg" className="Buttons" onClick={handle_Add}>
     
        <div className="text">
            
        <FontAwesomeIcon icon={faUser}  size="xl" style={{color: "#707275", marginRight: "30px"}} />   Add New User
        </div>
      </Button>
     </>
}
     
</div>
</Container>
</div>
    );
}
export default Home;