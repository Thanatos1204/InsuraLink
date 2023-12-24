const axios = require('axios')
const FormData = require('form-data')
const fs = require('fs')
require('dotenv').config()

const JWT = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIzZDFmYjIxZi04YmJmLTQ1NTEtOTNhYi03ZTFiZDliY2I0NWEiLCJlbWFpbCI6ImJoYXZpa3B1bm1peWFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjE2NDdmZmMwNTMxMzdjMzhkYTEwIiwic2NvcGVkS2V5U2VjcmV0IjoiOTJkOWE5MGIyNDhjMjBlMzk0MTRlMTRiNTVkOWM5ZDEzZjY3YTkxNTZhZjI1NmY1MmY0MWFjYTc2YzYxYmQ4ZiIsImlhdCI6MTcwMjk3MDg5MH0.MrVQgBiQUEFdVzGOkExk7iC6UXJOnbc7XNT2ZTh4Ce0`

const pinFileToIPFS = async (path) => {
  let hash='';
    const formData = new FormData();
  
    const src = `${path}.txt`;
    
    const file = await fs.createReadStream(src)
    formData.append('file', file)
    
    const pinataMetadata = JSON.stringify({
      name: `${path}.txt`,
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