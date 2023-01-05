import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Specialist.css";


export default function Specialist() {
    return (
        <>
        <div className='specialist container'>
            <h1 className='specialisthead ' style={{textAlign:"center" , marginTop:"100px"}} >We have the best Specialists</h1>
            <div className='row'>

                <div className='col-md-4'>
                </div>
                <p className='spara col-md-4  my-2' >We have a wide experience design and strategy , with locally-rooted Knowledge.</p>
            </div>

            <div className="row my-4">
                <div className="col-md-3 special">
                    <div className="card">
                        <img className='cardimage' src="" alt=""  />
                        <div className="scon">
                            <p className='sim my-2'>Dr. Awatif ali </p>
                            <p className="title">Dental Care</p>
                            
                            
                        </div>
                    </div>
                </div>

                <div className="col-md-3 special">
                    <div className="card">
                        <img className='cardimage' src="" alt="Jane"  />
                        <div className="scon">
                            <p className='sim my-2'>Dr. Awatif ali </p>
                            <p className="title">Dental Care</p>
                            
                            
                        </div>
                    </div>
                </div>

                <div className="col-md-3 special">
                    <div className="card">
                        <img className='cardimage' src="" alt="Jane"  />
                        <div className="scon">
                            <p className='sim my-2'>Dr. Awatif ali </p>
                            <p className="title">Dental Care</p>
                            
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-3 special">
                    <div className="card">
                        <img className='cardimage' src="" alt="Jane"  />
                        <div className="scon">
                            <p className='sim my-2'>Dr. Awatif ali </p>
                            <p className="title">Dental Care</p>
                            
                            
                        </div>
                    </div>
                </div>
</div>
            </div>
            </>
            )
}
