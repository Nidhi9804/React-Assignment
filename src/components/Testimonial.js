import React from 'react'
import Testimonialitem from './Testimonialitem'
import { useState } from 'react'
import axios from 'axios';
import {useEffect} from 'react';

export default function Testimonial() {
    
const [data , setData] =useState("");

useEffect(() => {
  axios
  .get("https://admin.tomedes.com/api/v1/get-reviews?page=1")
  .then((res)=>
  setData(res.data.data));

  
}, [])


    return (
        

            <div className='container'>

                <h1 class="testhead"style={{marginTop:"100px"}}> What our Customers Says</h1>

                <div className='row'>
                {data && data.map((element) => (
              
              
                    <div className='col-md-6'key={element.ID} >
                        <Testimonialitem review={element.Reviews}  name={element.Name} company={element.Company} url ="/dp.jpeg"/>

                    </div>
                    ))}
                    
                    </div>
            </div>
        
    )
}
