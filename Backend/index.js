const express = require('express');
const { addUserDetails, fetchUserDetails} = require('./main.js'); // replace with your contract file path
const cors = require('cors')
 
const fs = require('fs');
const { userInfo } = require('os');
const FormData = './Data/johndoe.json'
const {deleteFile} = require('./deleteFile.js')


const app = express();
app.use(express.json());

// Define a route to add user details
app.use(( req, res, next) =>{
  req.header("Access-Control-Allow-Origin","")
  req.header("Access-Control-Allow-Headers","")
  next()
})
app.use(cors())




app.post('/adduserdetails', async (req, res) => {
    const { useRef} = req.body;
//     const jsonString = JSON.stringify(jsonData, null, 2);
//   console.log()
//   fs.writeFile(`${useRef}.json`, jsonString, (err) => {
//     if (err) {
//       console.error('Error creating JSON file:', err);
//       // Handle the error here
//     } else {
//       console.log(`File '${useRef}.json' created successfully`);
//       // File created successfully
//     }
//   });


  try {
      console.log('iintry')
      await addUserDetails(useRef, FormData);
      res.status(200).send('User details added successfully');
  } catch (error) {
      console.error('Error while adding user details:', error);
      res.status(500).send('Error while adding user details');
  }
});

app.post('/getuserdetails', async (req, res) => {
  try {
    const { useRef } = req.body;
    await fetchUserDetails(useRef);
    // Read the file asynchronously
      
    fs.readFile(`${useRef}_decrypt.json`, (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        return;
      }
    
      try {
        // If not specifying encoding, data will be a Buffer
        const jsonData = JSON.parse(data.toString()); // Convert Buffer to string and parse JSON
        res.send(200).json(jsonData)
        // Perform operations with the parsed JSON data
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    });
  }catch(e){
    console.log(e)
  }
    
}); 



const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});
