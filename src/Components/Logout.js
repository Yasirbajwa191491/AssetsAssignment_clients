import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../Pages/Logout.css";
import swal from 'sweetalert';

const Logout = () => {

    const navigate = useNavigate();
    const handle_logout = () => {
        localStorage.removeItem("UserType");
        localStorage.removeItem("User_id");
        localStorage.removeItem("bahrain-token");
       
        swal({
            position: "center",
            icon: "success",
            title: "Logout Successfully",
            timer: 3000,
           });
        navigate("/");
        window.location.reload();
      }
return ( 
      <Button variant="primary" size="lg" className="logout_Btn" onClick={handle_logout}>
     
<div className="logout_txt">
    
<FontAwesomeIcon icon={faRightFromBracket}  size="xl" style={{color: "red", marginRight: "30px"}} />   Logout
</div>
</Button>);
}
export default Logout;