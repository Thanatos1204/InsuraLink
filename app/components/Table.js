// components/BrokerTable.js
import React, { useEffect, useState } from 'react';

const BrokerTable = () => {

  const [d,setd] = useState(
   [
    {
      id: 1,
      name: 'John Doe',
      docType: 'Aadhar Card',
      clientId: '1234-5678-9012',
      document: 'AadharCard.pdf',
      visible:true
    },
    {
        id: 2,
        name: 'Papa Doe',
        docType: 'Aadhar Card',
        clientId: '1234-5678-9012',
        document: 'AadharCard.pdf',
        visible:true
      },
      {
        id: 3,
        name: 'Abraham Linc',
        docType: 'Aadhar Card',
        clientId: '1234-5678-9012',
        document: 'AadharCard.pdf',
        visible:true
      },
      {
        id: 4,
        name: 'Mark Katson',
        docType: 'Aadhar Card',
        clientId: '1234-5678-9012',
        document: 'AadharCard.pdf',
        visible:true
      }
    
    ])
 
  
  const handleRemove=(pid)=>{
    let f=[...d];
      let index =  f.filter((c)=>(c.id===pid));
         f.splice(index,1)
        setd([...f])
        
        
  }

  return (
    <div className=" flex justify-around items-center py-10 overflow-x-auto">
      <table className=" w-10/12 bg-#1EA887  color-white self-center text-center border">
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
          {  d?.map((client,index) => ( client.visible &&
            <tr key={client.id}>
              <td className="py-2 px-4 border-b">{client.name}</td>
              <td className="py-2 px-4 border-b">{client.docType}</td>
              <td className="py-2 px-4 border-b">{client.clientId}</td>
              <td className="py-2 px-4 border-b">{client.document}</td>
              <td className="py-2 px-4 border-b">
                <button className="bg-green-500 text-white py-1 px-2 mr-2">
                  Accept
                </button>
                <button className="bg-red-500 text-white py-1 px-2" onClick={()=>(handleRemove(client.id))}>
                  Reject
                </button >
              </td>
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  );
};

export default BrokerTable;
