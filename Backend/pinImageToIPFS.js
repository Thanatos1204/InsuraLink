const axios = require('axios')
const FormData = require('form-data')
const fs = require('fs')
require('dotenv').config()

const JWT = process.env.JWT

const pinFileToIPFS = async (path) => {
  let hash='';
    const formData = new FormData();
  
    const src = `${path}.txt`;
    
    const file = await fs.createReadStream(src)
    formData.append('file', file)
    
    const pinataMetadata = JSON.stringify({
      name: `${path}`,
    });
    formData.append('pinataMetadata', pinataMetadata);
    
    const pinataOptions = JSON.stringify({
      cidVersion: 0,
    })
    formData.append('pinataOptions', pinataOptions);

    try{
      const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
        maxBodyLength: "Infinity",
        headers: {
          'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
          'Authorization': `Bearer ${JWT}`
        }
      });
      return res.data.IpfsHash;
    } catch (error) {
      console.log(error);
    }

   
}

module.exports = pinFileToIPFS;