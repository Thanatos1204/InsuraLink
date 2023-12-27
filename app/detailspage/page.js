'use client'

import React from 'react'
import Navbar from '../components/Navbar'
import './detailspage.css'
// import { triggerBase64Download } from 'react-base64-downloader';




function Detailspage() {

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:8080/getuserdetails', { useRef: ""}); // Replace 'your_user_uid' with actual user UID
        setData(response.data);
        console.log(data)
      } catch (error) {
        console.error('Error:', error);
      }
    };
 
    fetchData();
  }, []);

 
  return (
    <div className='detailspage'>
        <Navbar/>
        <div className='details'>
            <p>Name : <span> Firstname + LastName</span></p>
            <p>Email : <span> email</span></p>
            <p>Gender : <span> male</span></p>
            <p>Contact : <span> Firstname + LastName</span></p>
            <p>Address : <span> Address1  + Address2</span></p>
            <p>Pincode : <span> Pincode</span></p>
            <p>Nationality : <span>India</span></p>
            <p>Martial Status : <span>Unmarried</span></p>
            <p>Occupation : <span>Student</span></p>
          <a target='_blank' href={fetchData}>View Documents</a>
            
           
        </div>
      
    </div>
  )
}

export default Detailspage
