'use client'

import React, { useState } from 'react'
import './applyinsurance.css'
import Link from 'next/link'
import { UserAuth } from "../context/AuthContext";
import { Toaster } from 'react-hot-toast';
import axios from 'axios'
import {  collection, doc, getDoc, getDocs, query, setDoc, where } from 'firebase/firestore';
import { db } from "../firebase";

function Applyinsurance() {


  const { user } = UserAuth();

   const[firstname,setFirstname]=useState("")
   const[Lastname,setLastname]=useState("")
   const[gender,setGender]=useState("")
   const[nationality,setNationality]=useState("")
   const[martial,setMartial]=useState("")
   const[occupation,setOccupation]=useState("")
   const[email,setEmail]=useState("")
   const[contact,setContact]=useState("")
   const[address1,setAddress1]=useState("")
   const[address2,setAddress2]=useState("")
   const[indstate,setIndstate]=useState("")
   const[pincode,setPincode]=useState("")
   const [pdfurl,setPdfurl]=useState('')
   const [pdf,setPdf]=useState()
   
   const handlesubmit = async () => {
    try {      
       let imgBase64 = await new Promise((resolve, reject) => {
        let reader = new FileReader();
        reader.onload = function () {
          resolve(reader.result);
        };
        reader.onerror = function (error) {
          reject(error);
        };
        reader.readAsDataURL(pdfurl);
        
      });

      // await putBroker();
   
      const body = {
        useRef: 'nQw0lgfu1WXWxv0Men8DKaO3C3A3',
        jsonData: {
          "firstname": firstname,
          "email": email,
          "lastname": Lastname,
          "gender": gender,
          "contact": contact,
          "address": address1 + " " + address2,
          "pincode": pincode,
          "nationality": nationality,
          "Martial": martial,
          "State": indstate,
          "Occupation": occupation,
          "pdf": imgBase64,
          "visibility": true
        }
      };
   
      const res = await axios.post('http://localhost:8080/adduserdetails', { body });
      Toaster.success('User Successfully Applied for Insurance');
   
    } catch (err) {
      console.log(err, "Error in vendor page");
    }
   };

  async function getBrokerId(){
    let currentBrokerId;
    const uid = user.uid;
    console.log(uid);
    try{
    const clientRef = doc(db,"Client",uid);
    
    const clientSnap = await getDoc(clientRef);  

    if(clientSnap.exists()){
      console.log("Inside IF Block!")
      currentBrokerId = clientSnap.data().brokerId;
      console.log(currentBrokerId);
    }

  }catch(e){
    console.log(e);
  }
    return currentBrokerId;
  }

  async function putBroker(){
    
    let imgBase64 = await new Promise((resolve, reject) => {
      let reader = new FileReader();
      reader.onload = function () {
        resolve(reader.result);
      };
      reader.onerror = function (error) {
        reject(error);
      };
      reader.readAsDataURL(pdfurl);
      
    });

    let docRef; 
    try{
    const BrokerID = await getBrokerId();

    const q = query(collection(db,'Broker'),where("brokerId","==",BrokerID));

    const querySnapshot = await getDocs(q);
     
    querySnapshot.forEach((docs)=>{
      console.log(docs.id);

      docRef = doc(db,'Broker',docs.id,'clients',user.uid);
    });

    console.log(imgBase64);

    const data = {
      clientfName: firstname,
      clientDocType: 'Aadhar Card',
      clientphone: contact,
      clientDoc: 'Aadhar Card.pdf'
    }
    console.log('About to Push');
    await setDoc(docRef,data);
    console.log('Pushed');

    }catch(e){
      console.log(e);
    }
  }




  return (
    <div className='applyinsurance'>
     
      <Toaster/>
      <head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"/>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
      </head>
      <header>
            <Link class="logo" href="/">InsuraLink</Link>
            <nav>
                <ul class="nav__links">
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </nav>
           
        </header>
  
        <section>
        <h3>
                Fill Your Details
            </h3>
            <form>
    <div class="row">
      <h6>Personal Information</h6>
      <div className='row'>
      <div className='col'>
      <div class="input-group input-group-icon">
        <input type="text" placeholder="First Name" value={firstname} onChange={(event) => setFirstname(event.currentTarget.value)}/>
        <div class="input-icon"><i class="fa fa-user"></i></div>
      </div>
      </div>
      <div className='col'>
      <div class="input-group input-group-icon">
        <input type="text" placeholder="Last Name" value={Lastname} onChange={(event) => setLastname(event.currentTarget.value)}/>
        <div class="input-icon"><i class="fa fa-key"></i></div>
      </div>
      </div>
      </div>
      <div className='row'>
      <div className='col'>
      <div class="input-group input-group-icon">
        <input type="text" placeholder="Gender" value={gender} onChange={async (event) => await putBroker()}/>
        <div class="input-icon"><i class="fa fa-user"></i></div>
      </div>
      </div>
      <div className='col'>
      <div class="input-group input-group-icon">
        <input type="text" placeholder="Nationality" value={nationality} onChange={(event) => setNationality(event.currentTarget.value)}/>
        <div class="input-icon"><i class="fa fa-key"></i></div>
      </div>
      </div>
      </div>
      <div className='row'>
      <div className='col'>
      <div class="input-group input-group-icon">
        <input type="text" placeholder="Martial Status" value={martial} onChange={(event) => (setMartial(event.currentTarget.value))}/>
        <div class="input-icon"><i class="fa fa-user"></i></div>
      </div>
      </div>
      <div className='col'>
      <div class="input-group input-group-icon" >
        <input type="text" placeholder="Occupation" value={occupation} onChange={(event) => setOccupation(event.currentTarget.value)}/>
        <div class="input-icon"><i class="fa fa-key"></i></div>
      </div>
      </div>
      </div>

      
      <h6>Contact Information</h6>
      <div class="input-group input-group-icon">
        <input type="email" placeholder="Email Adress" value={email} onChange={(event) => setEmail(event.currentTarget.value)}/>
        <div class="input-icon"><i class="fa fa-envelope"></i></div>
      </div>
      <div class="input-group input-group-icon">
        <input type="text"  placeholder="Contact No." value={contact} onChange={(event) => setContact(event.currentTarget.value)}/>
        <div class="input-icon"><i class="fa fa-envelope"></i></div>
      </div>
      <div class="input-group input-group-icon">
        <input type="text"  placeholder="Address Line 1" value={address1} onChange={(event) => setAddress1(event.currentTarget.value)}/>
        <div class="input-icon"><i class="fa fa-envelope"></i></div>
      </div>
      <div class="input-group input-group-icon">
        <input type="text"  placeholder="Address Line 2" value={address2} onChange={(event) => setAddress2(event.currentTarget.value)}/>
        <div class="input-icon"><i class="fa fa-envelope"></i></div>
      </div>
      <div className='row'>
      <div className='col'>
      <div class="input-group input-group-icon" >
        <input type="text" placeholder="State" value={indstate} onChange={(event) => setIndstate(event.currentTarget.value)}/>
        <div class="input-icon"><i class="fa fa-user"></i></div>
      </div>
      </div>
      <div className='col'>
      <div class="input-group input-group-icon">
        <input type="text"  placeholder="Postal Code" value={pincode} onChange={(event) => setPincode(event.currentTarget.value)}/>
        <div class="input-icon"><i class="fa fa-key"></i></div>
      </div>
      </div>
      </div>
      <h6>Upload Documents</h6>
      <div className='fileupload'>
        <input  accept='pdf' type="file" onChange={(e)=>(setPdfurl(e.target.files[0]),console.log(pdfurl))}/>
        <span>*upload Documents in pdf</span>
      </div>
      </div>
      <button className='btn1' onClick={handlesubmit} >Submit</button>
    
    
  </form>

        </section>
    

     

    </div>
  )
}

export default Applyinsurance
