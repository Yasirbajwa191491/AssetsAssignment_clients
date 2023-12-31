import React,{useState,useEffect} from 'react'
import { Container} from "@material-ui/core";
import axios from 'axios';
import { URL } from '../http';
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import swal from 'sweetalert';
import Navigation from './Navigation';
import ReactModal from "react-modal";
import Button from 'react-bootstrap/Button';

const PendingRequests = () => {
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [myimage,setMyImage]=useState('')
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const allApprovedRequests=async()=>{
        try {
          const response=await axios.get(URL+"/usbpending_list")  
          if(response.status===200){
            setData(response.data.data)
          }
          const resp=await axios.get(URL+"/cdpending_list")  
          if(resp.status===200){
            setData1(resp.data.data)
          }
          const res=await axios.get(URL+"/internetpending_list")  
          if(res.status===200){
            setData2(res.data.data)
          }
        } catch (error) {
            console.log(error);
        }
    }
    const closeModal = () => {
      setModalIsOpen(false);
    };
    const statusHandler=(id,status)=>{
        confirmAlert({
            title: 'Status Update',
            message: 'Are you sure to do this?.',
            buttons: [
              {
                label: 'Yes',
                onClick: async() => {
                    let response=await axios.patch(URL+"/cd/approval",{
                        _id:id,User_id:localStorage.getItem('User_id'),Status:status
                      }) 
                      console.log(response,'res');
                      if(response.data.message==='CD Approved'){
                        allApprovedRequests()
                        swal({
                            position: "center",
                            icon: "success",
                            title: response.data.message,
                            timer: 3000,
                           
                          }); 
                      }
                      else if(response.data.message==='CD Rejected'){
                        allApprovedRequests()
                        swal({
                            position: "center",
                            icon: "success",
                            title: response.data.message,
                            timer: 3000,
                           
                          });  
                      } else{
                        swal({
                          position: "center",
                          icon: "error",
                          title: response.data.error,
                          timer: 3000,
                         
                        });   
                      }
                }
              },
              {
                label: 'No',
                onClick: () => allApprovedRequests()
              }
            ]
          });
     
    }
    const statusHandlerUSB=(id,status)=>{
        confirmAlert({
            title: 'Status Update',
            message: 'Are you sure to do this?.',
            buttons: [
              {
                label: 'Yes',
                onClick: async() => {
                    let response=await axios.patch(URL+"/usb/approval",{
                        _id:id,User_id:localStorage.getItem('User_id'),Status:status
                      }) 
                      if(response.data.message==='USB Approved'){
                        allApprovedRequests()
                        swal({
                            position: "center",
                            icon: "success",
                            title: response.data.message,
                            timer: 3000,
                           
                          }); 
                      }
                      else if(response.data.message==='USB Rejected'){
                        allApprovedRequests()
                        swal({
                            position: "center",
                            icon: "success",
                            title: response.data.message,
                            timer: 3000,
                           
                          });  
                      } else{
                        swal({
                          position: "center",
                          icon: "error",
                          title: response.data.error,
                          timer: 3000,
                         
                        });   
                      }
                }
              },
              {
                label: 'No',
                onClick: () => allApprovedRequests()
              }
            ]
          });
     
    }
    const statusHandlerInternet=(id,status)=>{
        confirmAlert({
            title: 'Status Update',
            message: 'Are you sure to do this?.',
            buttons: [
              {
                label: 'Yes',
                onClick: async() => {
                    let response=await axios.patch(URL+"/internet/approval",{
                        _id:id,User_id:localStorage.getItem('User_id'),Status:status
                      }) 
                      if(response.data.message==='Internet Approved'){
                        allApprovedRequests()
                        swal({
                            position: "center",
                            icon: "success",
                            title: response.data.message,
                            timer: 3000,
                           
                          }); 
                      }
                      else if(response.data.message==='Internet Rejected'){
                        allApprovedRequests()
                        swal({
                            position: "center",
                            icon: "success",
                            title: response.data.message,
                            timer: 3000,
                           
                          });  
                      } else{
                        swal({
                          position: "center",
                          icon: "error",
                          title: response.data.error,
                          timer: 3000,
                         
                        });   
                      }
                }
              },
              {
                label: 'No',
                onClick: () => allApprovedRequests()
              }
            ]
          });
     
    }
    useEffect(()=>{
        allApprovedRequests()
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

<MDBTable align='middle'   style={{ color: "#a9a9a9", "--bs-input-color": "white",backgroundColor:'white' }}>
      <MDBTableHead light>
        <tr>
          <th scope='col' ></th>
          <th scope='col' style={{minWidth:'100px'}}>Starting Date</th>
          <th scope='col' style={{minWidth:'100px'}}>End Date</th>
          <th scope='col' style={{minWidth:'100px'}}>Submission Date</th>
          <th scope='col' style={{minWidth:'150px'}}>Requested By</th>
          <th scope='col' style={{minWidth:'100px'}}>Status</th>
          <th scope='col' style={{minWidth:'100px'}}>Action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      {
        data.map((curEle)=>{
          return  <tr key={curEle._id}>
          <td onClick={()=>{setModalIsOpen(true); setMyImage(curEle.photo)}}><img src={`./images/${curEle.photo}`} width={75} height={75} style={{borderRadius:'50%'}} alt="" srcset="" /></td>
          <td style={{minWidth:'100px',textAlign:'center'}}>{curEle.StartingDate}</td>
          <td style={{minWidth:'100px',textAlign:'center'}}>{curEle.EndDate}</td>
          <td style={{minWidth:'100px',textAlign:'center'}}>{curEle.SubmissionDate}</td>
          <td style={{minWidth:'150px',textAlign:'center'}}>{curEle.UserID+' - '+curEle?.userdata[0]?.email}</td>
          <td style={{minWidth:'100px',textAlign:'center'}}>{curEle.Status}</td>
          <td style={{minWidth:'100px',textAlign:'center',display:'flex'}}>
            <MDBBtn color='link'  onClick={()=>statusHandlerUSB(curEle._id,'Approved')} style={{backgroundColor:'yellow',color:'black',minWidth:'100px',borderRadius:'30px',height:'30px'}}>
              <i className='fas fa-times'>Approve</i>
            </MDBBtn>
            <MDBBtn color='link'  onClick={()=>statusHandlerUSB(curEle._id,'Rejected')} style={{backgroundColor:'red',color:'white',minWidth:'100px',borderRadius:'30px',height:'30px'}}>
              <i className='fas fa-times'>Reject</i>
            </MDBBtn>
          </td>
        </tr>
        })
      }
        
       
      </MDBTableBody>
    </MDBTable>
</div>
<div style={{marginTop:'10px'}}>
<h3 style={{color: "white"}}> CD </h3>    

<MDBTable align='middle'   style={{ color: "#a9a9a9", "--bs-input-color": "white",backgroundColor:'white' }}>
      <MDBTableHead light>
        <tr>
        <th scope='col' ></th>
          <th scope='col' style={{minWidth:'100px'}}>Starting Date</th>
          <th scope='col' style={{minWidth:'100px'}}>End Date</th>
          <th scope='col' style={{minWidth:'100px'}}>Submission Date</th>
          <th scope='col' style={{minWidth:'150px'}}>Requested By</th>
          <th scope='col' style={{minWidth:'100px'}}>Status</th>
          <th scope='col' style={{minWidth:'100px'}}>Action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      {
        data1.map((curEle)=>{
          return  <tr key={curEle._id}>
          <td onClick={()=>{setModalIsOpen(true); setMyImage(curEle.photo)}}><img src={`./images/${curEle.photo}`} width={75} height={75} style={{borderRadius:'50%'}} alt="" srcset="" /></td>
          <td style={{minWidth:'100px',textAlign:'center'}}>{curEle.StartingDate}</td>
          <td style={{minWidth:'100px',textAlign:'center'}}>{curEle.EndDate}</td>
          <td style={{minWidth:'100px',textAlign:'center'}}>{curEle.SubmissionDate}</td>
          <td style={{minWidth:'150px',textAlign:'center'}}>{curEle.UserID+' - '+curEle?.userdata[0]?.email}</td>
          <td style={{minWidth:'100px',textAlign:'center'}}>{curEle.Status}</td>
          <td style={{minWidth:'100px',textAlign:'center',display:'flex'}}>
            <MDBBtn color='link'  onClick={()=>statusHandler(curEle._id,'Approved')} style={{backgroundColor:'yellow',color:'black',minWidth:'100px',borderRadius:'30px',height:'30px'}}>
              <i className='fas fa-times'>Approve</i>
            </MDBBtn>
            <MDBBtn color='link'  onClick={()=>statusHandler(curEle._id,'Rejected')} style={{backgroundColor:'red',color:'white',minWidth:'100px',borderRadius:'30px',height:'30px'}}>
              <i className='fas fa-times'>Reject</i>
            </MDBBtn>
          </td>
        </tr>
        })
      }
        
       
      </MDBTableBody>
    </MDBTable>
</div>
<div style={{marginTop:'10px'}}>
<h3 style={{color: "white"}}> Internet </h3>    

<MDBTable align='middle'   style={{ color: "#a9a9a9", "--bs-input-color": "white",backgroundColor:'white' }}>
      <MDBTableHead light>
        <tr>
        <th scope='col' ></th>
          <th scope='col' style={{minWidth:'100px'}}>Starting Date</th>
          <th scope='col' style={{minWidth:'100px'}}>End Date</th>
          <th scope='col' style={{minWidth:'100px'}}>Submission Date</th>
          <th scope='col' style={{minWidth:'150px'}}>Requested By</th>
          <th scope='col' style={{minWidth:'100px'}}>Status</th>
          <th scope='col' style={{minWidth:'100px'}}>Action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      {
        data2.map((curEle)=>{
          return  <tr key={curEle._id}>
          <td onClick={()=>{setModalIsOpen(true); setMyImage(curEle.photo)}}><img src={`./images/${curEle.photo}`} width={75} height={75} style={{borderRadius:'50%'}} alt="" srcset="" /></td>
           <td style={{minWidth:'100px',textAlign:'center'}}>{curEle.StartingDate}</td>
          <td style={{minWidth:'100px',textAlign:'center'}}>{curEle.EndDate}</td>
          <td style={{minWidth:'100px',textAlign:'center'}}>{curEle.SubmissionDate}</td>
          <td style={{minWidth:'150px',textAlign:'center'}}>{curEle.UserID+' - '+curEle?.userdata[0]?.email}</td>
          <td style={{minWidth:'100px',textAlign:'center'}}>{curEle.Status}</td>
          <td style={{minWidth:'100px',textAlign:'center',display:'flex'}}>
            <MDBBtn color='link'  onClick={()=>statusHandlerInternet(curEle._id,'Approved')} style={{backgroundColor:'yellow',color:'black',minWidth:'100px',borderRadius:'30px',height:'30px'}}>
              <i className='fas fa-times'>Approve</i>
            </MDBBtn>
            <MDBBtn color='link'  onClick={()=>statusHandlerInternet(curEle._id,'Rejected')} style={{backgroundColor:'red',color:'white',minWidth:'100px',borderRadius:'30px',height:'30px'}}>
              <i className='fas fa-times'>Reject</i>
            </MDBBtn>
          </td>
        </tr>
        })
      }
        
       
      </MDBTableBody>
    </MDBTable>

</div>
<ReactModal  appElement={document.body}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Update User Details"
        className="Modal"
        style={{
          overlay: {
      position: 'fixed',
      top: 200,
      left: 300,
      right: 400,
      bottom: 100,
      borderRadius: '10px',
      backgroundColor: 'rgba(255, 255, 255, 0.75)'
    },
    content: {
      position: 'absolute',
      top: '40px',
      left: '40px',
      right: '40px',
      bottom: '40px',
      border: '1px solid #ccc',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '20px'
    }
        }}
      >
      <Button variant="primary" style={{backgroundColor:'blue !important'}} size="sm" className="Buttons" onClick={()=>setModalIsOpen(false)}>Close</Button>
        <img src={`./images/${myimage}`} alt="img" width={650} height={350} srcset="" />
      
        </ReactModal>
</Container>
    </div>
  )
}

export default PendingRequests