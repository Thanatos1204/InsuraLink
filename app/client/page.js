import Link from 'next/link'
import React from 'react'

const client = () => {
  return (
    <div>
      CLIENT DASHBOARD

      <Link className=' m- 10 p-5 bg-[#1ea887]' href='/applyinsurance'>Apply Insurance</Link>
    </div>
  )
}

export default client
