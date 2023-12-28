import React from 'react'
import Inavbar from '../components/Inavbar'
import Itable from '../components/Itable'
import toast, { Toaster } from 'react-hot-toast';

const page = () => {
  return (
    <>
      <Toaster/>
      <div>
        <Inavbar></Inavbar>
        <Itable></Itable>

      </div>
    </>
  )
}

export default page
