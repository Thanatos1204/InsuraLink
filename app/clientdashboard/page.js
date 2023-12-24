import Link from 'next/link'
import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Image from 'next/image'

const client = () => {
  return (
    <div>
      <Navbar typeofuser={'client'}/>
      <div className='flex items-center justify-center flex-col'>  
      
<Card imageURL="/Marsh-McLennan-logo.png" cardTitle="Property Insurance" cardDescription="Provides coverage for physical property, including buildings, contents, equipment, and other assets, against perils such as fire, theft, and natural disasters."></Card>
    <a target='_blank' href='https://azure-attractive-ladybug-812.mypinata.cloud/ipfs/QmYo1U64i48fywxALh961zWs5snkNnHPKQwBZRyzVXag5f?_gl=1*1p6ugy*_ga*MTU5MzA4NzAxMy4xNjk1MTAwNTAw*_ga_5RMPXG14TE*MTcwMzQ0NjQ1OS41Mi4wLjE3MDM0NDY0NTkuNjAuMC4w'>  <Image src='https://azure-attractive-ladybug-812.mypinata.cloud/ipfs/QmYo1U64i48fywxALh961zWs5snkNnHPKQwBZRyzVXag5f?_gl=1*1p6ugy*_ga*MTU5MzA4NzAxMy4xNjk1MTAwNTAw*_ga_5RMPXG14TE*MTcwMzQ0NjQ1OS41Mi4wLjE3MDM0NDY0NTkuNjAuMC4w'
      width={300}
      height={300}
       
      /></a>
    </div>

 
    </div>
  )
}

export default client
