import React,{useState,useEffect} from 'react'
import { Container} from "@material-ui/core";
import axios from 'axios';
import { URL } from '../http';
import Navigation from './Navigation';
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { UsbFilled } from '@ant-design/icons';
import { faCompactDisc,faWifi,faBell} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Logout from "./Logout";


const Reminders = () => {
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const allApprovedRequests=async()=>{
        try {
          const response=await axios.get(URL+"/usbapproval_list")  
          if(response.status===200){
            setData(response.data.data)
          }
          const resp=await axios.get(URL+"/cdapproval_list")  
          if(resp.status===200){
            setData1(resp.data.data)
          }
          const res=await axios.get(URL+"/internetapproval_list")  
          if(res.status===200){
            setData2(res.data.data)
          }
        } catch (error) {
            console.log(error);
        }
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
<br/>
<Logout/>

      <Button variant="primary" size="lg" className="Buttons" >
     
        <div className="text">
            
        <FontAwesomeIcon icon={faBell}  size="xl" style={{color: "#707275", marginRight: "30px"}} />   Reminders
        </div>
      </Button>
<div style={{marginTop:'10px'}}> 

<MDBTable align='middle'   style={{ color: "#a9a9a9", "--bs-input-color": "white",backgroundColor:'white' }}>
      <MDBTableHead light>
        <tr>
          <th scope='col' ></th>
          <th scope='col' style={{minWidth:'100px'}}>User ID</th>
          <th scope='col' style={{minWidth:'100px'}}>Name</th>
          <th scope='col' style={{minWidth:'100px'}}>Email</th>
          <th scope='col' style={{minWidth:'100px'}}></th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      {
        data.map((curEle)=>{
          return  <tr key={curEle._id}>
          <td><img src={`./images/${curEle.photo}`} width={75} height={75} style={{borderRadius:'50%'}} alt="" srcset="" /></td>
          <td style={{minWidth:'100px',textAlign:'center'}}>{curEle.RequestUser?._id}</td>
          <td style={{minWidth:'100px',textAlign:'center'}}>{curEle.RequestUser?.fname} {curEle.RequestUser?.lname}</td>
          <td style={{minWidth:'100px',textAlign:'center'}}>{curEle.RequestUser?.email}</td>
          <td style={{minWidth:'100px',textAlign:'center',display:'flex'}}>
           {
                (Math.ceil((new Date(curEle.EndDate).getTime()-new Date(curEle.StartingDate).getTime())/(1000*3600*24))<=10)?
                <div className="req_text1" style={{backgroundColor:'red',minWidth:'250px',marginTop:'30px',height:'50px'}}>
      <UsbFilled style={{ fontSize: '40px',marginRight: "30px" }}/> Days Left: {Math.ceil((new Date(curEle.EndDate).getTime()-new Date(curEle.StartingDate).getTime())/(1000*3600*24))}
            </div>:
            <div className="req_text1" style={{backgroundColor:'green',minWidth:'250px',marginTop:'30px',height:'50px'}}>
      <UsbFilled style={{ fontSize: '40px',marginRight: "30px" }}/> Days Left: {Math.ceil((new Date(curEle.EndDate).getTime()-new Date(curEle.StartingDate).getTime())/(1000*3600*24))}
            </div>
            }
           
          </td>
        </tr>
        })
      }
      {
        data1.map((curEle)=>{
          return  <tr key={curEle._id}>
          <td><img src={`./images/${curEle.photo}`} width={75} height={75} style={{borderRadius:'50%'}} alt="" srcset="" /></td>
          <td style={{minWidth:'100px',textAlign:'center'}}>{curEle.RequestUser?._id}</td>
          <td style={{minWidth:'100px',textAlign:'center'}}>{curEle.RequestUser?.fname} {curEle.RequestUser?.lname}</td>
          <td style={{minWidth:'100px',textAlign:'center'}}>{curEle.RequestUser?.email}</td>
          <td style={{minWidth:'100px',textAlign:'center',display:'flex'}}>
           {
                (Math.ceil((new Date(curEle.EndDate).getTime()-new Date(curEle.StartingDate).getTime())/(1000*3600*24))<=10)?
                <div className="req_text1" style={{backgroundColor:'red',minWidth:'250px',marginTop:'30px',height:'50px'}}>
      <FontAwesomeIcon icon={faCompactDisc} style={{ fontSize: '40px',marginRight: "30px" }} /> Days Left: {Math.ceil((new Date(curEle.EndDate).getTime()-new Date(curEle.StartingDate).getTime())/(1000*3600*24))}
            </div>:
            <div className="req_text1" style={{backgroundColor:'green',minWidth:'250px',marginTop:'30px',height:'50px'}}>
      <FontAwesomeIcon icon={faCompactDisc} style={{ fontSize: '40px',marginRight: "30px" }} /> Days Left: {Math.ceil((new Date(curEle.EndDate).getTime()-new Date(curEle.StartingDate).getTime())/(1000*3600*24))}
            </div>
            }
           
          </td>
        </tr>
        })
      }
        
      {
        data2.map((curEle)=>{
          return  <tr key={curEle._id}>
          <td><img src={`./images/${curEle.photo}`} width={75} height={75} style={{borderRadius:'50%'}} alt="" srcset="" /></td>
          <td style={{minWidth:'100px',textAlign:'center'}}>{curEle.RequestUser?._id}</td>
          <td style={{minWidth:'100px',textAlign:'center'}}>{curEle.RequestUser?.fname} {curEle.RequestUser?.lname}</td>
          <td style={{minWidth:'100px',textAlign:'center'}}>{curEle.RequestUser?.email}</td>
          <td style={{minWidth:'100px',textAlign:'center',display:'flex'}}>
           {
                (Math.ceil((new Date(curEle.EndDate).getTime()-new Date(curEle.StartingDate).getTime())/(1000*3600*24))<=10)?
                <div className="req_text1" style={{backgroundColor:'red',minWidth:'250px',marginTop:'30px',height:'50px'}}>
      <FontAwesomeIcon icon={faWifi} style={{ fontSize: '40px',marginRight: "30px" }} /> Days Left: {Math.ceil((new Date(curEle.EndDate).getTime()-new Date(curEle.StartingDate).getTime())/(1000*3600*24))}
            </div>:
            <div className="req_text1" style={{backgroundColor:'green',minWidth:'250px',marginTop:'30px',height:'50px'}}>
      <FontAwesomeIcon icon={faWifi} style={{ fontSize: '40px',marginRight: "30px" }} /> Days Left: {Math.ceil((new Date(curEle.EndDate).getTime()-new Date(curEle.StartingDate).getTime())/(1000*3600*24))}
            </div>
            }
           
          </td>
        </tr>
        })
      }
        
       
      </MDBTableBody>
    </MDBTable>
</div>
</Container>
    </div>
  )
}

export default Reminders