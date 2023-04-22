// import logo from './logo.svg';
import './App.css';
import MyNavbar from './components/MyNavbar';
import React, {
  Component
} from "react";

import Arr from './components/myDoctorData';
import doctorData from './components/myDoctorData'
import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';

import myAccordion from '../src/components/myAccordion';




// import AppBar from '@material-ui/core/AppBar'
// import Toolbar from '@material-ui/core/Toolbar'
// import Typography from '@material-ui/core/Typography'

let App = () => {
  // console.log("arr",Arr === doctorData)
  return(
    <>
  <MyNavbar />
  <myAccordion />
    
  <div>
    <h1></h1>
  </div>


  <Accordion defaultActiveKey="0">
      {doctorData.map((data)=>{
        return <Accordion.Item eventKey={data.id}>
        <Accordion.Header> {data.firstName} &nbsp;
        <Badge bg="success">
         {data.specialisation.join(", ")}
      </Badge>
          </Accordion.Header>
        <Accordion.Body>
          
          <ul>
            <li>
              Gender: {data.gender}
            </li>
            <li>
              Email: {data.email}
            </li>
            <li>
              Description: {data.profileDesc}
            </li>

          </ul>

        </Accordion.Body>
      </Accordion.Item>
      })}
      
    </Accordion> 

    
  
  

  </>
  )
}
export default App;