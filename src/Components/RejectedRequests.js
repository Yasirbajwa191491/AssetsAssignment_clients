import React,{useState,useEffect} from 'react'
import { Container} from "@material-ui/core";
import axios from 'axios';
import { URL } from '../http';
import { MDBDataTableV5 } from "mdbreact";
import Navigation from './Navigation';


const RejectedRequests = () => {
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const allRejectedRequests=async()=>{
        try {
          const response=await axios.get(URL+"/usbrejected_list")  
          if(response.status===200){
            setData(response.data.data)
          }
          const resp=await axios.get(URL+"/cdrejected_list")  
          if(resp.status===200){
            setData1(resp.data.data)
          }
          const res=await axios.get(URL+"/internetrejected_list")  
          if(res.status===200){
            setData2(res.data.data)
          }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        allRejectedRequests()
    },[])
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
<br/>
<div style={{marginTop:'10px'}}>
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
              label:"Rejected By",
              field:"appdate",
              width: 250,
            },
            {
              label:"Requested By",
              field:"requestedby"
            },
            {
              label:"Status",
              field:"status"
            },

           ],
           rows: data.map((items) => {
            return {
              startdate: items.StartingDate ,
              enddate: items.EndDate,
              submissiondate: items.SubmissionDate,
              appdate:items.RejectedBy+' - '+items?.userdata?.email,
              status:items.Status,
              requestedby:items.RequestUser?._id+' - '+items.RequestUser?.email

            
              
            };
          }),
        }}
        searchTop = {true}
        searchBottom={false}
      />
</div>
<div style={{marginTop:'10px'}}>
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
              label:"Rejected By",
              field:"appdate",
              width: 250,
            },
            {
              label:"Requested By",
              field:"requestedby"
            },
            {
              label:"Status",
              field:"status"
            },

           ],
           rows: data1.map((items) => {
            return {
              startdate: items.StartingDate ,
              enddate: items.EndDate,
              submissiondate: items.SubmissionDate,
              appdate:items.RejectedBy+' - '+items?.userdata?.email,
              status:items.Status,
              requestedby:items.RequestUser?._id+' - '+items.RequestUser?.email

            
              
            };
          }),
        }}
        searchTop = {true}
        searchBottom={false}
      />
</div>
<div style={{marginTop:'10px'}}>
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
              label:"Rejected By",
              field:"appdate",
              width: 250,
            },
            {
              label:"Requested By",
              field:"requestedby"
            },
            {
              label:"Status",
              field:"status"
            },

           ],
           rows: data2.map((items) => {
            return {
              startdate: items.StartingDate ,
              enddate: items.EndDate,
              submissiondate: items.SubmissionDate,
              appdate:items.RejectedBy+' - '+items?.userdata?.email,
              status:items.Status,
              requestedby:items.RequestUser?._id+' - '+items.RequestUser?.email

            
              
            };
          }),
        }}
        searchTop = {true}
        searchBottom={false}
      />
</div>
</Container>
    </div>
  )
}

export default RejectedRequests