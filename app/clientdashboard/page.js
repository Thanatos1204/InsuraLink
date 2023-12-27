import Link from 'next/link'
import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Image from 'next/image'
import Ctable from '../components/Ctable'


const client = () => {
  return (
   <div className='w-screen h-screen flex flex-col'>
    <Navbar typeofuser={'client'}/>
    {/* <div className='mx-auto my-auto flex flex-col'>
      <h1 className='mb-5'>You have No Insurance Certificates.</h1> 
      <button className='bg-blue-400 rounded-full text-white mx-auto p-4'><Link href='/applyinsurance'>Apply For One?</Link></button>  
    </div> */}
   
   <Ctable/>
      
    {/* <Card imageURL="/Marsh-McLennan-logo.png" cardTitle="Property Insurance" cardDescription="Provides coverage for physical property, including buildings, contents, equipment, and other assets, against perils such as fire, theft, and natural disasters."></Card>
    <a target='_blank' href='https://azure-attractive-ladybug-812.mypinata.cloud/ipfs/QmYo1U64i48fywxALh961zWs5snkNnHPKQwBZRyzVXag5f?_gl=1*1p6ugy*_ga*MTU5MzA4NzAxMy4xNjk1MTAwNTAw*_ga_5RMPXG14TE*MTcwMzQ0NjQ1OS41Mi4wLjE3MDM0NDY0NTkuNjAuMC4w'>  <Image src='https://azure-attractive-ladybug-812.mypinata.cloud/ipfs/QmYo1U64i48fywxALh961zWs5snkNnHPKQwBZRyzVXag5f?_gl=1*1p6ugy*_ga*MTU5MzA4NzAxMy4xNjk1MTAwNTAw*_ga_5RMPXG14TE*MTcwMzQ0NjQ1OS41Mi4wLjE3MDM0NDY0NTkuNjAuMC4w'
      width={300}
      height={300}
       
      /></a> */}

    
    </div> 
 
    
  )
}

export default client
