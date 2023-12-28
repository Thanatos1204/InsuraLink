const express = require('express');
const { addUserDetails, fetchUserDetails,genCertificate,revoCertificate } = require('./main.js'); // replace with your contract file path
const cors = require('cors')
const bodyParser = require('body-parser');
const fs = require('fs');
const { userInfo } = require('os');
const FormData = './Data/johndoe.json'
const { deleteFile } = require('./deleteFile.js');


const app = express();
app.use(express.json());




app.use(cors({
  origin: 'http://localhost:3000' // your client's origin
}))
// Define a route to add user details
// app.use((req, res, next) => {
//   req.header("Access-Control-Allow-Origin", "")
//   req.header("Access-Control-Allow-Headers", "")
//   next()
// })
app.use(bodyParser.json({ limit: '100mb' })); // Increase the limit
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));





app.post('/adduserdetails', async (req, res) => {
  const { useRef, jsonData } = req.body.body;
  console.log(jsonData)
      const jsonString = JSON.stringify(jsonData, null, 2);
    console.log()
    await fs.promises.writeFile(`${useRef}.json`, jsonString, (err) => {
      if (err) {
        console.error('Error creating JSON file:', err);
        // Handle the error here
      } else {
        console.log(`File '${useRef}.json' created successfully`);
        // File created successfully
      }
    });

  
  try {
    console.log('creating user inside index file ')
    await addUserDetails(useRef);
    console.log('user created')
    res.status(200).send('User details added successfully');

  } catch (error) {
    console.error('Error while adding user details:', error);
    res.status(500).send('Error while adding user details');
  }
});

app.post('/getuserdetails', async (req, res) => {
  const { useRef } = req.body;
  try {
    await fetchUserDetails(useRef); // Ensure file creation completes before reading it

    // Now read the file asynchronously
    try {
      const data = await fetchUserDetails(useRef);     
      const jsonData = JSON.parse(data.toString());
      console.log(jsonData);
      res.status(200).send(jsonData);
    } catch (err) {
      console.error('Error reading file:', err);
      res.status(500).send('Error reading file');
    }
  } catch (e) {
    console.log(e);
    res.status(500).send('Error fetching user details');
  }

});

app.post('/getusercertificate', async (req, res) => {
  const { name,useRef } = req.body.body;
  try {
    const imageHash = await genCertificate(name, useRef)
    res.status(200).send(imageHash);
  } catch (error) {
    console.error('Error while adding user details:', error);
    res.status(500).send('Error while adding user details');
  }
});

app.post('/revokecertificate', async (req, res) => {
  const { name , useRef } = req.body.body;
  try {
    const imageIPFShash = await revoCertificate(name, useRef);
    res.status(200).send('Certificate revoked successfully ' +  imageIPFShash);
  } catch (error) {
    console.error('Error while revoking certificate:', error);
    res.status(500).send('Error while revoking certificate');
  }
});

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});
