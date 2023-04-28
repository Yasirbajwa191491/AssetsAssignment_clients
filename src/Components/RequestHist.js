
import { Container} from "@material-ui/core";
import { MDBDataTableV5 } from "mdbreact";
import { useEffect,useState } from "react";
import Button from 'react-bootstrap/Button';
import {faRotateLeft,faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";
import { URL } from "../http";
import {TextField} from "@material-ui/core";
import "../Pages/RequestHist.css";
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
    setUsbdata(res.data.data);
  }
  const getcdData =async () => {
    const id = localStorage.getItem("User_id");
    const res = await axios.get(URL+"/cdsubmission_list/" + id);
    setCddata(res.data.data);
  }
  const getinternetData =async () => {
    const id = localStorage.getItem("User_id");
    const res = await axios.get(URL+"/internetsubmission_list/" + id);
    setInternetdata(res.data.data);
  }
  const getusbDays = async () => {
    const id = localStorage.getItem("User_id");
    const res = await axios.get(URL+"/usbdays_list/"+id);
    setUsbdays(res.data.days);
  }
  const getcdDays = async () => {
    const id = localStorage.getItem("User_id");
    const res = await axios.get(URL+"/cddays_list/"+id);
    setCddays(res.data.days);
  }
  const getinternetDays = async () => {
    const id = localStorage.getItem("User_id");
    const res = await axios.get(URL+"/internetdays_list/"+id);
    setInternetdays(res.data.days);
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
<Button variant="primary" size="lg" className="Buttons1" disabled>
     
        <div className="text">
            
        <FontAwesomeIcon icon={faRotateLeft} size="xl" style={{"--fa-primary-color": "#8e8f90", "--fa-secondary-color": "#8e8f90", marginRight: "30px"}} />   My Request History
        </div>
  </Button>
<br/>
<br/>

<h3 style={{color: "white"}}> USB </h3>


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
      {
  usbdays !=='Request Pending' || usbdays !=='Request Expired' ?
<div >
  <h3 style={{color:'white',textAlign:'center'}}><FontAwesomeIcon icon={faCheck} size="xl" style={{color:'green'}}></FontAwesomeIcon> 90 Days of USB Access</h3>
  <h3 style={{color:'white',textAlign:'center'}}>Days Left</h3>
  <h2 style={{color:'white',marginLeft:'10px',textAlign:'center'}}>{usbdays}</h2>
</div>:

<TextField style={{ width: "500px"}} disabled value={`Current Status: ${usbdays}`} InputProps={{style: {color: "red"}}} />
}<br/><br/>
      <h3 style={{color: "white"}}> CD </h3>
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
       {
  cddays !=='Request Pending' || cddays !=='Request Expired' ?
<div >
  <h3 style={{color:'white',textAlign:'center'}}><FontAwesomeIcon icon={faCheck} size="xl" style={{color:'green'}}></FontAwesomeIcon> 90 Days of CD Access</h3>
  <h3 style={{color:'white',textAlign:'center'}}>Days Left</h3>
  <h2 style={{color:'white',marginLeft:'10px',textAlign:'center'}}>{cddays}</h2>
</div>:

<TextField style={{ width: "500px"}} disabled value={`Current Status: ${cddays}`} InputProps={{style: {color: "red"}}} />
}<br/><br/>
      <h3 style={{color: "white"}}> Internet </h3>
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
       {
  internetdays !=='Request Pending' || internetdays !=='Request Expired' ?
<div >
  <h3 style={{color:'white',textAlign:'center'}}><FontAwesomeIcon icon={faCheck} size="xl" style={{color:'green'}}></FontAwesomeIcon> 90 Days of Internet Access</h3>
  <h3 style={{color:'white',textAlign:'center'}}>Days Left</h3>
  <h2 style={{color:'white',marginLeft:'10px',textAlign:'center'}}>{internetdays}</h2>
</div>:

<TextField style={{ width: "500px"}} disabled value={`Current Status: ${internetdays}`} InputProps={{style: {color: "red"}}} />
}<br/><br/>
</Container>
</div>
);

}
export default RequestHist;