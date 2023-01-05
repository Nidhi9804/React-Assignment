import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Services.css";
export default function Services() {
    return (
        <div className='container Services ' style={{marginTop:"60px"}}>
            <h1 className='servicehead my-2 '> Our Services</h1>
            <div className='row'>

                <div className='col-md-4'>
                </div>
                <p className='para col-md-5 my-2' >We provide the most full medical services , so eery person could have the opperunity to receive qualitative medical help.   </p>
            </div>

            <div className='row '>
                <div className='col-md-3'>
                    <div className="serviceoverlay "style={{marginTop:"60px"}}>
                        <img src="/Frame 1.png" alt="Avatar" class="image" />
                    </div>

                </div>

                <div className='col-md-3'>
                    <div className="serviceoverlay"style={{marginTop:"60px"}}>
                        <img src="/Frame 1.png" alt="Avatar" class="image" />
                    </div>

                </div>
                <div className='col-md-3'>
                    <div className="serviceoverlay"style={{marginTop:"60px"}}>
                        <img src="/Frame 1.png" alt="Avatar" class="image" />
                    </div>

                </div>
                <div className='col-md-3'>
                    <div className="serviceoverlay"style={{marginTop:"60px"}}>
                        <img src="/Frame 1.png" alt="Avatar" class="image" />
                    </div>

                </div>
            </div>

        </div>
    )
}
