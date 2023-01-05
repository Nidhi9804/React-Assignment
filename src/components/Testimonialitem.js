import React from 'react'
import Badge from 'react-bootstrap/Badge';
import { Button } from 'react-bootstrap';

export default function Testimonialitem(props) {
    return (
        
        <div className="card my-4" style={{ width: '100%' }} >
         
            <div className="card-body " style={{padding:"27px"}}>
            <Button variant="primary" className='testbtn' style={{position:"absolute"  , right:"-14px" , top:"-21px" ,borderRadius:"34px" , height: "39px"}}>
      <Badge  class="my" style={{backgroundColor:"none" ,color:"#fff"}} >""</Badge>
    </Button>
                <p className="card-text">{props.review} </p>
                <div className='row '>
                    <img className='col-md-2 dp' style={{borderRadius:"35px" ,height:"37px" ,width:"84px" }} src={props.url} />
                    <h5 className="card-title col-md-5">{props.name}</h5>
                </div>
                <div className='row'>
                    <div className='col-md-2'></div>
                    <h6 className="card-subtitle mb-2 text-muted col-md-4 ">{props.company}</h6>
                </div>


            </div>
        </div>
    )
}
