
'use client'

import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import BrokerTable from '../components/Table';
import axios from 'axios';

const broker = () => {
  const fetchapi= async()=>{
    try{
      const body = {
        "useRef":"73RwuoHzXWrAbujs7uwa"
       }
       const res = await axios.post('https://mumbaihacks-alisdej34q-uc.a.run.app/getuserdetails',body);
       console.log(res);
    }
    catch(err){
     console.log(err);
    }
  }
  useEffect(()=>{
    fetchapi();
  },[])


  return (
    <div>
     <Navbar/>
     <BrokerTable/>   
    </div>
  )
}

export default broker
