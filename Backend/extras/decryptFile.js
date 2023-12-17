const fs = require('fs');
const crypto = require('crypto');

// Decrypt
const decrypt = (inputFile, secretKey, outputFile) => {
   fs.readFile(inputFile, (err, data) => {
       if (err) throw err;

       const decipher = crypto.createDecipheriv('aes-256-ctr', secretKey, Buffer.alloc(16, 0));
       const decrypted = Buffer.concat([decipher.update(data), decipher.final()]);

       fs.writeFile(outputFile, decrypted, err => {
           if (err) throw err;
       });
   });
};

decrypt('output.txt', 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3', 'output.jpg')
module.exports = decrypt;
