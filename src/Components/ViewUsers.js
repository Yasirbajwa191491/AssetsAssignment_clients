import { Container} from "@material-ui/core";
import React,{useState,useEffect} from 'react';
import ReactModal from "react-modal";
import { URL } from '../http';
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css';
import swal from 'sweetalert';
import axios from "axios";
import "../Pages/ViewUsers.css";
import Navigation from "./Navigation";
const ViewUsers = () => {
    const [data, setData] = useState([]);
    const [id, setId] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal =async (id) => {
        setModalIsOpen(true);
        try {
            const response=await axios.get(URL+"/user/"+id)
            if(response.status===200){
             setFname(response.data.data.fname);
             setLname(response.data.data.lname)
             setEmail(response.data.data.email);
             setId(response.data.data._id);
            
            }
            
     } catch (error) {
        console.log(error);
    }

      };
      const closeModal = () => {
        setModalIsOpen(false);
      };
      const handleSubmit = async (event, id, fname, lname, email) => {
        event.preventDefault();
        let response=await axios.patch(URL+"/user/"+id,{
            _id:id,fname:fname,lname:lname,email:email
          })
          if(response.data.message==='User Updated'){
            getUsers()
            swal({
                position: "center",
                icon: "success",
                title: response.data.message,
                timer: 3000,
               
              }); 
          }
        closeModal();
      };
     const getUsers =async  () => {
        try {
            const response=await axios.get(URL+"/users")  
            if(response.status===200){
              setData(response.data.data)
            }
            
     } catch (error) {
        console.log(error);
    }
    }
    const DeleteUser = (id)=>{
        confirmAlert({
            title: 'Status Update',
            message: 'Are you sure to do this?.',
            buttons: [
              {
                label: 'Yes',
                onClick: async() => {
                    let response=await axios.delete(URL+"/user/"+id,{
                        _id:id
                      }) 
                      if(response.data.message==='User Deleted'){
                        getUsers()
                        swal({
                            position: "center",
                            icon: "success",
                            title: response.data.message,
                            timer: 3000,
                           
                          }); 
                      }
                   else{
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
                onClick: () => getUsers()
              }
            ]
          });
    }
    
    
     useEffect(() => {
       getUsers();
     
     }, [])
     
return(
    <div className='head' style={{ background: '#1A2B63', minHeight: '100vh' }}>
              <Navigation/>
    <Container maxWidth="sm">
      <div className='container'>
     <img src="/images/icon.png" alt="Logo" style={{ maxWidth: "19.5%", height: "auto" }}/>
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
<h3 style={{color: "white"}}> Users Data </h3>    

<MDBTable align='middle'   style={{ color: "#a9a9a9", "--bs-input-color": "white",backgroundColor:'white' }}>
      <MDBTableHead light>
        <tr>
          <th scope='col' style={{minWidth:'100px'}}>User id</th>
          <th scope='col' style={{minWidth:'100px'}}>Name</th>
          <th scope='col' style={{minWidth:'100px'}}>Email</th>
          <th scope='col' style={{minWidth:'100px'}}>User Type</th>
          <th scope='col' style={{minWidth:'100px'}}>Action</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      {
        data.map((curEle)=>{
          return  <tr key={curEle._id}>
          <td style={{minWidth:'100px',textAlign:'center'}}>{curEle._id}</td>
          <td style={{minWidth:'100px',textAlign:'center'}}>{curEle.fname + ' ' + curEle.lname}</td>
          <td style={{minWidth:'100px',textAlign:'center'}}>{curEle.email}</td>
          <td style={{minWidth:'150px',textAlign:'center'}}>{curEle.UserType}</td>
          <td style={{minWidth:'100px',textAlign:'center',display:'flex'}}>
            <MDBBtn color='link'  onClick={()=>openModal(curEle._id)} style={{backgroundColor:'yellow',color:'black',minWidth:'100px',borderRadius:'30px',height:'30px'}}>
              <i className='fas fa-times'>Update</i>
            </MDBBtn>
            <MDBBtn color='link'  onClick={()=>DeleteUser(curEle._id)} style={{backgroundColor:'red',color:'white',minWidth:'100px',borderRadius:'30px',height:'30px'}}>
              <i className='fas fa-times'>Delete</i>
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
      >
        <h2>Update User</h2>
        <form onSubmit={(event) => handleSubmit(event, id, fname, lname, email)}>
          <label htmlFor="fname">First Name:</label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
          <br />
          <br/>
          <label htmlFor="lname">Last Name:</label>
          <input
            type="text"
            id="lname"
            name="lname"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
          <br />
          <br/>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br/>
          <br />
          <button type="submit" className="button">Update</button>
          
          <button type="button"  className="button1" onClick={closeModal}>
            Cancel
          </button>
        </form>
        </ReactModal>
     </Container>
     </div>
)
}
export default ViewUsers;