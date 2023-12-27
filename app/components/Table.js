// components/BrokerTable.js
'use client'
import { collection, doc, getDocs, deleteDoc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { UserAuth } from "../context/AuthContext";
import { db } from '../firebase';
import { Link } from 'next/link';

const BrokerTable = () => {

  const { user } = UserAuth();

  const [d, setD] = useState([]);

  async function getData(){
    try{
      const docRef = collection(doc(db,'Broker',user.uid),'clients');
      const docSnapshots = await getDocs(docRef);

      setD(docSnapshots.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    }catch(e){
      console.log(e);
    }
  }  

  const handleRemove = async (id) => {
    const docRef = doc(db, 'Broker', user.uid, 'clients', id);
    await deleteDoc(docRef);
    // Remove the deleted item from the state
    setD(d.filter(item => item.id !== id));
   };


  useEffect(()=>{
    console.log("IN USE EFFECT",d);
    getData();
  },[])
 


  return (
    <div className=" flex justify-around items-center py-10 overflow-x-auto">
      <table className=" w-10/12 bg-#1EA887  color-white self-center text-center border">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Client Name</th>
            <th className="py-2 px-4 border-b">Client Doc Type</th>
            <th className="py-2 px-4 border-b">Client Phone No.</th>
            <th className="py-2 px-4 border-b">Document</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {  d.map((item) => (
            <tr key={item.id}>
              <td className="py-2 px-4 border-b">{item.clientfName}</td>
              <td className="py-2 px-4 border-b">{item.clientDocType }</td>
              <td className="py-2 px-4 border-b">{item.clientphone}</td>
              <td className="py-2 px-4 border-b">{item.clientDoc}</td>
              <td className="py-2 px-4 border-b"> 
              <button className="bg-blue-500 text-white mx-2 py-1 px-2" onClick={() => window.location.href='/brokerclients/'+item.id}>
                  View Docs
                </button >               
                <button className="bg-red-500 text-white py-1 px-2" onClick={() => handleRemove(item.id)}>
                  Reject
                </button >
              </td>
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  );
};

export default BrokerTable;
