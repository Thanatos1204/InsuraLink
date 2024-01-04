const axios = require('axios')
const FormData = require('form-data')
const fs = require('fs')
require('dotenv').config()

const JWT = process.env.JWT

const pinImageToIPFS = async (path) => {
  let hash='';
    const formData = new FormData();
  
    const src = `${path}`;
    
    const file = await fs.createReadStream(src)
    formData.append('file', file)
    
    const filename = nameSplitter(path);

    const pinataMetadata = JSON.stringify({
      name: filename,
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

const nameSplitter = (path) => {
  const filename = path.split('/').reverse()[0].split('.')[0]
  console.log(filename)
  return filename
}


module.exports = pinImageToIPFS;