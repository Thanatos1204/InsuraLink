'use client'
import Link from 'next/link';
import './ctable.css';
import { UserAuth } from "../context/AuthContext";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Ctable = () => {
  const { user } = UserAuth();
  
  const [apiResponse, setApiResponse] = useState(null);
  

  async function getCert(){
    // Make the API call using Axios


    axios.post('http://localhost:8080/fetchUserCertificate',{ useRef: user.uid })
      .then(response => setApiResponse(response.data))
      .catch(error => console.error('Error fetching data:', error));
  } // Run this effect only once when the component mounts

  useEffect(()=>{
    if (user) {
      axios.post('http://localhost:8080/fetchUserCertificate',{ useRef: user.uid })
        .then(response => setApiResponse(response.data))
        .catch(error => console.error('Error fetching data:', error));

        console.log(apiResponse);
    }
   },[user])
   
  return (
    <div>
      {apiResponse === null ? (
        // Render this if the API response is null
        <div className="text-center mt-10">
          <p>You don't have any insurance certificates.</p>
          <Link href='/applyinsurance'><button className="bg-blue-500 text-white py-2 px-4 mt-2 rounded">
            Apply for one here
          </button></Link>
        </div>
      ) : (
        // Render this if the API response is not null
        <div className="w-screen flex justify-around items-center py-10 px-20">
          <table className="content-table">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Insurance Company</th>
                <th className="py-2 px-4 border-b">Insurance Type</th>
                <th className="py-2 px-4 border-b">Broker Id</th>
                <th className="py-2 px-4 border-b">Certificate</th>
              </tr>
            </thead>
            <tbody>
              {/* Map over the data and render rows */}
              { 
                <tr>
                  <td className="py-2 px-4 border-b">MarshMcLennan</td>
                  <td className="py-2 px-4 border-b">Health</td>
                  <td className="py-2 px-4 border-b">010</td>
                  <td className="py-2 px-4 border-b">
                    <Link href={apiResponse} target='_blank'>
                      <button className="bg-blue-500 text-white py-2 px-2 mr-2 rounded" onClick={async () =>{await getCert()}}>
                        View Certificate
                      </button>
                    </Link>
                  </td>
                </tr>
              }
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};


export default Ctable
