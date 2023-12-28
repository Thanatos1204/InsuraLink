'use client'
import { collection, doc, getDocs, deleteDoc, getDoc, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { UserAuth } from "../context/AuthContext";
import { db } from '../firebase';
import Link from 'next/link';

const Itable = () => {
  //  const router = useRouter()


  const { user } = UserAuth();

  const [d, setD] = useState([]);

  async function getBrokerId(){
    let currentBrokerId;
    const uid = user.uid;//Insurance Agent
    console.log(uid);
    try{
    const agentRef = doc(db,"InsuranceAgent",uid);
    
    const agentSnap = await getDoc(agentRef);  

    if(agentSnap.exists()){
      console.log("Inside IF Block!")
      currentBrokerId = agentSnap.data().brokerId;
      console.log(currentBrokerId);
    }

  }catch(e){
    console.log(e);
  }
    return currentBrokerId;
  }

  async function getData(){
    const BrokerID = await getBrokerId();
    let brokerRef="";
    const q = query(collection(db,'Broker'),where("brokerId","==",BrokerID));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((docs)=>{
      console.log(docs.id);
      brokerRef = docs.id;
    });

    console.log("Inside getData function : "+brokerRef);
    try{
      const docRef = collection(doc(db,'Broker',brokerRef),'clients');
      const docSnapshots = await getDocs(docRef);

      setD(docSnapshots.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    }catch(e){
      console.log(e);
    }
  }

  

  useEffect(()=>{
    console.log("IN USE EFFECT",d);
    getData();
  },[])
    

  return (
    <div>
       <div className=" flex justify-around items-center py-10 overflow-x-auto">
      <table className=" w-10/12 bg-white self-center text-center border border-gray-500">
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
                <Link href='https://azure-attractive-ladybug-812.mypinata.cloud/ipfs/QmYo1U64i48fywxALh961zWs5snkNnHPKQwBZRyzVXag5f'><button className="bg-blue-500 text-white py-1 px-2 mr-2">
                  Generate Certificate
                </button></Link>
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Itable
