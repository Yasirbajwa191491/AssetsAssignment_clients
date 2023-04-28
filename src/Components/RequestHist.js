
import { Container} from "@material-ui/core";
import { MDBDataTableV5 } from "mdbreact";
import { useEffect,useState } from "react";
import Button from 'react-bootstrap/Button';
import {faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";
import { URL } from "../http";
import {TextField} from "@material-ui/core";
import "../Pages/RequestHist.css";
import Logout from "./Logout";
import Navigation from "./Navigation";
const RequestHist = () => {
  const [usbdata, setUsbdata] = useState([]);
  const [cddata, setCddata] = useState([]);
  const [internetdata, setInternetdata] = useState([]);
  const [usbdays, setUsbdays] = useState("");
  const [cddays, setCddays] = useState("");
  const [internetdays, setInternetdays] = useState("");

  const getusbData =async () => {
    const id = localStorage.getItem("User_id");
    const res = await axios.get(URL+"/usbsubmission_list/" + id);
    if(res.status===200){
    setUsbdata(res.data.data);
    }
  }
  const getcdData =async () => {
    const id = localStorage.getItem("User_id");
    const res = await axios.get(URL+"/cdsubmission_list/" + id);
    if(res.status===200){
    setCddata(res.data.data);
    }
  }
  const getinternetData =async () => {
    const id = localStorage.getItem("User_id");
    const res = await axios.get(URL+"/internetsubmission_list/" + id);
    if(res.status===200){
    setInternetdata(res.data.data);
    }
  }
  const getusbDays = async () => {
    const id = localStorage.getItem("User_id");
    const res = await axios.get(URL+"/usbdays_list/"+id);
    if (res.status === 200) {
      if (res.data.days) {
        setUsbdays(res.data.days);
      } else if (!res.data.days) {
        setUsbdays("User hasn't requested for Usb Access");
      }
    }
  };
  
  
  const getcdDays = async () => {
    const id = localStorage.getItem("User_id");
    const res = await axios.get(URL+"/cddays_list/"+id);
    if (res.status === 200) {
      if (res.data.days) {
      setCddays(res.data.days);
      }else if (!res.data.days) {
        setCddays("User hasn't requested for CD Access");
      }
    }
  }
  const getinternetDays = async () => {
    const id = localStorage.getItem("User_id");
    const res = await axios.get(URL+"/internetdays_list/"+id);
    if (res.status === 200) {
      if (res.data.days) {
    setInternetdays(res.data.days);
      }else if (!res.data.days) {
        setInternetdays("User hasn't requested for Internet Access");
      }
    }
  }
  useEffect(() => {
    getusbData();
    getcdData();
    getinternetData();
    getusbDays();
    getcdDays();
    getinternetDays();
  }, []);
    return (
<div className='head' style={{ background: '#1A2B63', minHeight: '100vh' }}>
 
<Navigation/>

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
<Logout/>
<br/>
<br/>
<Button variant="primary" size="lg" className="Buttons1" disabled>
     
        <div className="text">
            
        <FontAwesomeIcon icon={faRotateLeft} size="xl" style={{"--fa-primary-color": "#8e8f90", "--fa-secondary-color": "#8e8f90", marginRight: "30px"}} />   My Request History
        </div>
  </Button>
<br/>
<br/>

<h3 style={{color: "white"}}> USB </h3>
{/* <TextField style={{ width: "500px"}} disabled value={`Current Status: ${usbdays}`} InputProps={{style: {color: "red"}}} /> */}
<h3 style={{color: "white"}}>  </h3>
<MDBDataTableV5
  style={{ color: "#a9a9a9", "--bs-input-color": "white",backgroundColor:'white' }}
        hover
        entriesOptions={[5, 20, 25]}
        entries={5}
        pagesAmount={4}
        data={{
          columns: [
            {
              label: "Starting date",
              field: "startdate",
              width: 150,
              attributes: {
                "aria-controls": "DataTable",
                "aria-label": "startdate",
              },
            },
            {
              
              label: "End Date",
              field: "enddate",

            },
            {
              label:"Submission Date",
              field:"submissiondate",
            },
            {
              label:"Approved Date",
              field:"appdate"
            }
           ],
           rows: usbdata.map((items) => {
            return {
              startdate: items.StartingDate ,
              enddate: items.EndDate,
              submissiondate: items.SubmissionDate,
              appdate:items.ApprovalDate
            
              
            };
          }),
        }}
        searchTop = {false}
        searchBottom={false}
      />
      <h3 style={{color: "white"}}> CD </h3>
      <TextField style={{ width: "500px"}} disabled value={`Current Status: ${cddays}`} InputProps={{style: {color: "red"}}} />
<MDBDataTableV5
    style={{ color: "#a9a9a9", "--bs-input-color": "white",backgroundColor:'white' }}

        hover
        entriesOptions={[5, 20, 25]}
        entries={5}
        pagesAmount={4}
        data={{
          columns: [
            {
              label: "Starting date",
              field: "startdate",
              width: 150,
              attributes: {
                "aria-controls": "DataTable",
                "aria-label": "startdate",
              },
            },
            {
              label: "End Date",
              field: "enddate",

            },
            {
              label:"Submission Date",
              field:"submissiondate",
            },
            {
              label:"Approved Date",
              field:"appdate"
            }
           ],
           rows: cddata.map((items) => {
            return {
              startdate: items.StartingDate ,
              enddate: items.EndDate,
              submissiondate: items.SubmissionDate,
              appdate:items.ApprovalDate
            
              
            };
          }),
        }}
        searchTop = {false}
        searchBottom={false}
      />
      <h3 style={{color: "white"}}> Internet </h3>
      <TextField style={{ width: "500px"}} disabled value={`Current Status: ${internetdays}`} InputProps={{style: {color: "red"}}} />
      <MDBDataTableV5
    style={{ color: "#a9a9a9", "--bs-input-color": "white",backgroundColor:'white' }}

        hover
        entriesOptions={[5, 20, 25]}
        entries={5}
        pagesAmount={4}
        data={{
          columns: [
            {
              label: "Starting date",
              field: "startdate",
              width: 150,
              attributes: {
                "aria-controls": "DataTable",
                "aria-label": "startdate",
              },
            },
            {
              label: "End Date",
              field: "enddate",

            },
            {
              label:"Submission Date",
              field:"submissiondate",
            },
            {
              label:"Approved Date",
              field:"appdate"
            }
           ],
           rows: internetdata.map((items) => {
            return {
              startdate: items.StartingDate ,
              enddate: items.EndDate,
              submissiondate: items.SubmissionDate,
              appdate:items.ApprovalDate
            
              
            };
          }),
        }}
        searchTop = {false}
        searchBottom={false}
      />
</Container>
</div>
);

}
export default RequestHist;