
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import Home from './Components/Home';
import ManageReq from './Components/ManageReq';
import AddUser from './Components/AddUser';
import Approval from './Components/Approval';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequestHist from './Components/RequestHist';
import { useEffect } from 'react';


function App() {

  return (
    <><ToastContainer />
    <BrowserRouter>
   
      <Routes>
      <Route path="/" index element={<Login />} />
      <Route path="*" index element={<Login />} />

      {
      localStorage.getItem('bahrain-token')&&
      <>
      <Route path="/Home" element={<Home />} />
      <Route path="/Request" element={<ManageReq />} />
      <Route path="/AddUser" element={<AddUser />} />
      <Route path="/Approval" element={<Approval />} />
      <Route path='/RequestHist' element = {<RequestHist/>} />
      </>
      
 
      }
</Routes>
   
    
     

    </BrowserRouter></>
   
  );
}

export default App;




