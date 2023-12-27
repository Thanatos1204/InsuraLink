'use client'
<<<<<<< HEAD:app/detailspage/page.js
import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import './detailspage.css'
import { UserAuth } from "../context/AuthContext";
=======

import React from 'react'
import Navbar from '../../components/Navbar'
import './detailspage.css'
import { useState, useEffect } from 'react'
import { UserAuth } from "../../context/AuthContext";
>>>>>>> bb06b3bdb5b364061c4b74028dfee0505cb9515d:app/brokerclients/[id]/page.js
import axios from 'axios'
import { useParams } from 'next/navigation'

function Detailspage() {
 const [data, setData] = useState(null);
 const { user } = UserAuth();
 const [isLoading, setIsLoading] = useState(false); // State to handle loading

<<<<<<< HEAD:app/detailspage/page.js
 useEffect(() => {
  const fetchData = async () => {
    setIsLoading(true); // Set loading to true before starting the fetch
    try {
      const response = await axios.post('http://localhost:8080/getuserdetails', { useRef: 'CXq2HyZKvPNIQHbnyBBUr8kKa9E2'});
      setData(response.data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false); // Set loading to false once the fetch is complete
    }
  };

  fetchData();
 }, []);

 return (
  <div className='detailspage'>
    <Navbar/>
    <div className='details'>
      {isLoading ? (
        <p>Loading...</p> // Show loading text while fetching data
      ) : (
        <>
          <p>Name : <span> {data?.firstname} {data?.lastname} </span></p>
          <p>Email : <span> {data?.email} </span></p>
          <p>Gender : <span> {data?.gender} </span></p>
          <p>Contact : <span> {data?.contact} </span></p>
          <p>Address : <span> {data?.address} </span></p>
          <p>Pincode : <span> {data?.pincode} </span></p>
          <p>Nationality : <span> {data?.nationality} </span></p>
          <p>Martial Status : <span> {data?.Martial} </span></p>
          <p>Occupation : <span> {data?.Occupation} </span></p>
          <a href={data?.pdf} target='_blank'>View Documents</a>          
        </>
      )}
=======
  const params = useParams();

const [data, setData] = useState(null);
const { user } = UserAuth();



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:8080/getuserdetails', { useRef: params.id});
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
          {params.id}
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
      
>>>>>>> bb06b3bdb5b364061c4b74028dfee0505cb9515d:app/brokerclients/[id]/page.js
    </div>
  </div>
 )
}

export default Detailspage
