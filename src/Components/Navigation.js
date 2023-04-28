
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
      cursor: "pointer",
      height: "30px",
      fontSize: "20px",
    }}
    onClick={handleBack}
  >
    Back
  </Button>
  
  <Button
    style={{
 
      width: "100px",
      cursor: "pointer",
      height:"30px",
      fontSize: "20px",
      marginTop: "20px"
    }}
    onClick={handleHome}
  >
    Home
  </Button>


</>
);
}
export default Navigation;