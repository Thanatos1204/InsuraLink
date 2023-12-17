'use client'

import { useRouter } from 'next/router';
import React from 'react'

const Itable = () => {
  //  const router = useRouter()
    const data = [
      
      {
        id: 2,
        name: 'Papa Doe',
        docType: 'Aadhar Card',
        clientId: '1234-5678-9012',
        document: 'AadharCard.pdf',
        certificate: 'https://azure-attractive-ladybug-812.mypinata.cloud/ipfs/QmSfs6KUkbb91kfbakZTzL6LfinrZLT5Koiw5noCwGSBve?_gl=1*eylwnf*_ga*MTU5MzA4NzAxMy4xNjk1MTAwNTAw*_ga_5RMPXG14TE*MTcwMjc4NzQ2Ni4zNy4xLjE3MDI3ODc1OTkuNjAuMC4w'
      },
      {
        id: 3,
        name: 'Abraham Linc',
        docType: 'Aadhar Card',
        clientId: '1234-5678-9012',
        document: 'AadharCard.pdf',
        visible:true,
        certificate : 'https://azure-attractive-ladybug-812.mypinata.cloud/ipfs/QmdNNH6jn4ZiSHpe9ruEyastJ9B9UfcdvCcPYVvhPmpYyw?_gl=1*1xt3yfv*_ga*MTU5MzA4NzAxMy4xNjk1MTAwNTAw*_ga_5RMPXG14TE*MTcwMjc4NzQ2Ni4zNy4xLjE3MDI3ODc2MTkuNDAuMC4w'
      },
      {
        id: 4,
        name: 'Mark Katson',
        docType: 'Aadhar Card',
        clientId: '1234-5678-9012',
        document: 'AadharCard.pdf',
        visible:true,
        certificate : 'https://azure-attractive-ladybug-812.mypinata.cloud/ipfs/QmTcewmFVPjZD4WuK1DC9Tcx8HWgGrzkjY1m2ERjNmBaMD?_gl=1*2j4bl0*_ga*MTU5MzA4NzAxMy4xNjk1MTAwNTAw*_ga_5RMPXG14TE*MTcwMjc4NzQ2Ni4zNy4xLjE3MDI3ODc2MjAuMzkuMC4w'
      }
      ];

  return (
    <div>
       <div className=" flex justify-around items-center py-10 overflow-x-auto">
      <table className=" w-10/12 bg-white self-center text-center border border-gray-500">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Client Name</th>
            <th className="py-2 px-4 border-b">Client Doc Type</th>
            <th className="py-2 px-4 border-b">Client ID</th>
            <th className="py-2 px-4 border-b">Document</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((client,index) => (
            <tr key={client.id} >
              <td className="py-2 px-4 border-b">{client.name}</td>
              <td className="py-2 px-4 border-b">{client.docType}</td>
              <td className="py-2 px-4 border-b">{client.clientId}</td>
              <td className="py-2 px-4 border-b">{client.document}</td>
              <td className="py-2 px-4 border-b">
                <button className="bg-blue-500 text-white py-1 px-2 mr-2" onClick={()=>(window.location.href = client.certificate)}>
                  Generate Certificate
                </button>
                
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
