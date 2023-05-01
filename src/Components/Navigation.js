
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
const Navigation = () => {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    }
    const handleHome = () => {
        navigate("/Home");
    }
return(
    <>

  <Button
    style={{
      width: "100px",
      marginRight: "10px",
      marginTop: "20px",
      cursor: "pointer",
      height: "30px",
      fontSize: "20px",
       position: "fixed",
    }}
    onClick={handleBack}
  >
    Back
  </Button>
  <br/>
  <Button
    style={{
 
      width: "100px",
      cursor: "pointer",
      height:"30px",
      fontSize: "20px",
      marginTop: "20px",
      position: "fixed",
      marginTop: "40px",
    }}
    onClick={handleHome}
  >
    Home
  </Button>


</>
);
}
export default Navigation;