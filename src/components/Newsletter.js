import React from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Newsletter.css";

export default function Newsletter() {
  return (
    <div className='Newsletter container '  >

        <h2 className='news my-4'> Subscribe to Newsletter</h2>
        <p className='newspara my-3'>we have a wide experience in experience design and strategy.</p>

        <input className='input my-4' type="text" name="email" placeholder='Enter your email address'/>
        
        <Button className="newsbtn mx-2  " variant="primary">Send Now</Button>{' '}
        
    </div>
  )
}
