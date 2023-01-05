import React from 'react'

export default function Innovative() {
  return (

    <div className='container ' style={{marginTop:"100px"}}>

    <div className='row'>

        <div className='col-md-6'>

            <h1 style={{marginTop:"110px"}}>Clinic with Innovative</h1>
            <p> We provide  the most full medical services , so every  person could have the oppertunity to reveive qualitative medical help.</p>
            <button className='btn btn-primary'>Learn More</button>
        </div>
        <div className='col-md-6'>
            <img  className='in1 col-md-3' src="/innovative1.png" style={{height:"172px"}}/>
          
                <div className='col-md-2'>
                <img  className='in2 ' src="/innovative1.png" style={{height:"172px" , marginLeft:"160px", marginTop:"-40px"}}/>
            </div>
            <div className='col-md-2'>
                <img  className='in1 ' src="/innovative1.png" style={{height:"172px" ,marginTop:"-40px"}}/>
            </div>  
        </div>



    </div>
    </div>
  )
}
