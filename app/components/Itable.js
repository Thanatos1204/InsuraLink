import React from 'react'

const Itable = () => {

    const data = [
        {
          id: 1,
          name: 'John Doe',
          docType: 'Aadhar Card',
          clientId: '1234-5678-9012',
          document: 'AadharCard.pdf',
        },
        {
            id: 2,
            name: 'Papa Doe',
            docType: 'Aadhar Card',
            clientId: '1234-5678-9012',
            document: 'AadharCard.pdf',
          },
        
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
            <tr key={client.id} className={index % 2 === 0 ? 'bg-[#1EA887]' : ''}>
              <td className="py-2 px-4 border-b">{client.name}</td>
              <td className="py-2 px-4 border-b">{client.docType}</td>
              <td className="py-2 px-4 border-b">{client.clientId}</td>
              <td className="py-2 px-4 border-b">{client.document}</td>
              <td className="py-2 px-4 border-b">
                <button className="bg-blue-500 text-white py-1 px-2 mr-2">
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
