const crypto = require('crypto');
const fs = require('fs');

const algorithm = 'aes-256-ctr';

const encryptFile = (inputFile, secretKey, outputFile) => {
 // Generate a random initialization vector
 const iv = crypto.randomBytes(16);

 // Create a cipher using the algorithm, secret key, and initialization vector
 const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

 // Read the input file
 fs.readFile(inputFile, (err, data) => {
   if (err) throw err;

   // Encrypt the data
   const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);

   // Write the encrypted data to the output file
   fs.writeFile(outputFile, encrypted, err => {
     if (err) throw err;
   });
 });
};


encryptFile('CertificatesNitin Billa.jpg', 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3', 'output.txt');

module.exports = encryptFile;
