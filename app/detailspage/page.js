'use client'

import React from 'react'
import Navbar from '../components/Navbar'
import './detailspage.css'
import { useState, useEffect } from 'react'
import { UserAuth } from "../context/AuthContext";
import axios from 'axios'

function Detailspage() {



const [data, setData] = useState(null);
const { user } = UserAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:8080/getuserdetails', { useRef: 'pgy3Ov4aSHfrJgYfaKCUnVIgUMX2'});
        setData(response.data);
        console.log(data)
      } catch (error) {
        console.error('Error:', error);
      }
    };
 
    fetchData();
  }, []);

 
  return (
    <div className='detailspage'>
        <Navbar/>
        <div className='details'>
            <p>Name : <span> Bhargav Pandit </span></p>
            <p>Email : <span> bhargavpandit01@gmail.com </span></p>
            <p>Gender : <span> Male </span></p>
            <p>Contact : <span> 84250378054 </span></p>
            <p>Address : <span> H Wing 702 Eternity Kanakia Spaces Thane (W) </span></p>
            <p>Pincode : <span> 400604 </span></p>
            <p>Nationality : <span> Indian </span></p>
            <p>Martial Status : <span> Unmarried </span></p>
            <p>Occupation : <span> Student </span></p>
          <a>View Documents</a>            
           
        </div>
      
    </div>
  )
}

export default Detailspage
