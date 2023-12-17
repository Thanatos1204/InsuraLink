'use client'

import React, { useState } from 'react'
import './applyinsurance.css'
import Link from 'next/link'


function Applyinsurance() {

  const { userRef } = UserAuth();

   const[firstname,setFirstname]=useState()
   const[Lastname,setLastname]=useState()
   const[gender,setGender]=useState()
   const[nationality,setNationality]=useState()
   const[martial,setMartial]=useState()
   const[occupation,setOccupation]=useState()
   const[email,setEmail]=useState()
   const[contact,setContact]=useState()
   const[address1,setAddress1]=useState()
   const[address2,setAddress2]=useState()
   const[indstate,setIndstate]=useState()
   const[pincode,setPincode]=useState()
   const [pdfurl,setPdfurl]=useState()
   const [pdf,setPdf]=useState()
   
   const handlesubmit=async()=>{
    try{
      let imgbase64 = "";
      let reader = new FileReader();
      reader.readAsDataURL(pdfurl);
      reader.onload = function () {
      imgbase64 = reader.result;
      setPdf(imgbase64);
    
    
  };
      const body = {
        "firstname":firstname,
      "email":email,
      "lastname":Lastname,
      "gender":gender,
      "contact":contact,
      "address":address1+" "+address2,
      "pincode": pincode,
      "nationality":nationality,
      "Maratial":martial,
      "State":indstate,
      "Occupation":occupation,
      "pdf":pdf
    }
    console.log(body)
     
    }
    catch(err){
         console.log(err,"Error in vendor page")
         

    }
       
  }

  return (
    <div className='applyinsurance'>
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
        <input type="text" placeholder="Gender" value={gender} onChange={(event) => setGender(event.currentTarget.value)}/>
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
        <input type="text" placeholder="Martial Status" value={martial} onChange={(event) => setMartial(event.currentTarget.value)}/>
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
        <input  accept='pdf' type="file" onChange={(e)=>setPdfurl(e.target.files[0])}/>
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
