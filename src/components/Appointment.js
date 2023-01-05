import React from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Appointments.css";

export default function Appointment() {
    return (
        
        
        <div className='appoint container'>
        
            <div className='row'>
                <div className="col-md-4 left">
                    <h2 className='fhead' style={{fontSize:"16px"}}>Welcome to Medicare+ Clinic</h2>
                    <h1>Best Specialists</h1>
                    <p>we are on the Leading Edge of cancer rare.providing the full continuum of cancer treatments and supportive care services in single convinent location </p>
                    <div className='btng  d-flex'>
                        <Button className="appointbtn mx-2  " variant="primary">Make an Appointment</Button>{' '}
                        <Button className="departbtn" variant="light">Departments</Button>{' '}
                    </div>
                </div>
<div className='col-md-2'></div>
                <div className='col-md-6 right'>
                    <p className='imagesp' style={{ backgroundColor: "#90c3cb1f" , height:"358px" , border:"1px solid #00dcff0a" , width:"327px" }} ></p>
  
                </div>
            </div>
        </div>
        
    )
}
