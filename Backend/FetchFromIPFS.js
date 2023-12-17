const fetch = require('node-fetch');
const fs = require('fs');

async function downloadFile(ipfsHash, useRef) {
 const response = await fetch(`https://gateway.pinata.cloud/ipfs/${ipfsHash}`);
 const fileStream = fs.createWriteStream(`${useRef}.txt`);
 response.body.pipe(fileStream);
 return new Promise((resolve, reject) => {
   response.body.on('error', (err) => {
     fileStream.close();
     reject(err);
   });
   fileStream.on('finish', function () {
     fileStream.close();
     resolve();
   });
 });
}


// downloadFile('QmZ5gjRdPAs6WX8Xy3bF5Aey3g9q1Zx4vatFqCCwgB4fvt', '73RwuoHzXWrAbujs7uwa')
module.exports = { downloadFile };
