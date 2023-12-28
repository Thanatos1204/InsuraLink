
'use client'

import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import BrokerTable from '../components/Table';

const broker = () => {
  return (
    <div>
     <Navbar typeofuser={'broker'}/>
     <BrokerTable/>   
    </div>
  )
}

export default broker
