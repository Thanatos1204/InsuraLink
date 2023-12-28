'use client'

import React from 'react'
import Navbar from '../../components/Navbar'
import './detailspage.css'
import { useState, useEffect } from 'react'
import { UserAuth } from "../../context/AuthContext";
import axios from 'axios'
import { useParams } from 'next/navigation'

function Detailspage() {
 const [data, setData] = useState(null);
 const { user } = UserAuth();
 const [isLoading, setIsLoading] = useState(false); // State to handle loading

  const params = useParams();





  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Set loading to true before starting the fetch
      try {
        const response = await axios.post('https://backend-alisdej34q-uc.a.run.app/getuserdetails', { useRef: params.id});
        setData(response.data);
        console.log(data)
      } catch (error) {
        console.error('Error:', error);
      }finally {
        setIsLoading(false); // Set loading to false once the fetch is complete
      }
    };
 
    fetchData();
  }, []);

  
 
  return (
    <div className='detailspage'>
        <Navbar typeofuser={'broker'}/>
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
        </div>
      
    </div>  
 )
}

export default Detailspage
