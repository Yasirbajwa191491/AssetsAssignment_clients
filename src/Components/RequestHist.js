
import { Container} from "@material-ui/core";
import { MDBDataTableV5 } from "mdbreact";
import { useEffect,useState } from "react";
import Button from 'react-bootstrap/Button';
import {faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";
import { URL } from "../http";
import "../Pages/RequestHist.css";
const RequestHist = () => {
  const [usbdata, setUsbdata] = useState([]);
  const [cddata, setCddata] = useState([]);
  const [internetdata, setInternetdata] = useState([]);
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
  useEffect(() => {
    getusbData();
    getcdData();
    getinternetData();
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
<h3 style={{color: "white"}}> USB </h3>

<MDBDataTableV5
  style={{ color: "#F1BC4C", "--bs-input-color": "white" }}
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

<MDBDataTableV5
  style={{ color: "#F1BC4C", "--bs-input-color": "white" }}
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
      <MDBDataTableV5
  style={{ color: "#F1BC4C", "--bs-input-color": "white" }}
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