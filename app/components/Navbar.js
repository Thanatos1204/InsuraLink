import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell
} from "@fortawesome/free-solid-svg-icons";




const Navbar = (props) => {
  return (
    <nav className="bg-[#1EA887] w-screen h-min">
      <div className="container flex items-center justify-between">
        <div className='flex items-center justify-between py-2 w-1/5'>             
            <Link href="/">
            <h1 className="text-white text-lg font-semibold px-4">InsuraLink</h1>
            </Link>           
            <p className="text-white px-4">Welcome {props.typeofuser}</p>
            <Link href={`/${props.typeofuser}dashboard`}>
            <p className="text-white px-4">Dashboard</p>
            </Link>
            
            {(props.typeofuser=='client') ?(<Link href='/applyinsurance'><p className="text-white px-4">Apply Insurance</p> </Link>):(<Link href='/brokerclients'><p className="text-white px-4">Clients</p> </Link>)}
           
        </div>
        <div className='flex items-center justify-end px-10 gap-10'>        
            <FontAwesomeIcon icon={faBell}/>        
            <Image
            src="" //{/*user.profilePic*/}
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
            />
        </div>   
      </div>
    </nav>
  );
  
}

export default Navbar
