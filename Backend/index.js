const express = require('express');
const { addUserDetails, fetchUserDetails,genCertificate } = require('./main.js'); // replace with your contract file path
const cors = require('cors')

const fs = require('fs');
const { userInfo } = require('os');
const FormData = './Data/johndoe.json'
const { deleteFile } = require('./deleteFile.js');


const app = express();
app.use(express.json());

// Define a route to add user details
app.use((req, res, next) => {
  req.header("Access-Control-Allow-Origin", "")
  req.header("Access-Control-Allow-Headers", "")
  next()
})
app.use(cors())




app.post('/adduserdetails', async (req, res) => {
  const { useRef } = req.body;
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
    console.log('creating user inside index file ')
    await addUserDetails(useRef, FormData);
    await console.log('user created')
    res.status(200).send('User details added successfully');

  } catch (error) {
    console.error('Error while adding user details:', error);
    res.status(500).send('Error while adding user details');
  }
});

app.post('/getuserdetails', async (req, res) => {
  const { useRef } = req.body;
  try {
    await fetchUserDetails(useRef);
    // Read the file asynchronously

    try {
      const data = await fs.readFileSync(`${useRef}_decrypt.json`);
      const jsonData = await JSON.parse(data.toString()); // Convert Buffer to string and parse JSON
      console.log(jsonData); // Display the parsed JSON data
      // Perform operations with the parsed JSON data
      res.status(200).send(jsonData);
    } catch (err) {
      console.error('Error reading file:', err);
    }
  } catch (e) {
    console.log(e)
  }
  if (fs.existsSync(`${useRef}_decrypt.json`)) {
    deleteFile(`${useRef}_decrypt.json`)
  }
  if (fs.existsSync(`${useRef}.txt`)) {
    deleteFile(`${useRef}.txt`)
  }

});

app.post('/getusercertificate', async (req, res) => {
  const { name,useRef } = req.body;
  try {
    const imageHash = await genCertificate(name, useRef)
    res.status(200).send(imageHash);
  } catch (error) {
    console.error('Error while adding user details:', error);
    res.status(500).send('Error while adding user details');
  }
});

const port = parseInt(process.env.PORT) || 8369;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});
