const fs = require('fs');
const crypto = require('crypto');

// Encrypt
const algorithm = 'aes-256-ctr';
const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';
const iv = crypto.randomBytes(16);

const encrypt = (buffer) => {
   const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
   const encrypted = Buffer.concat([cipher.update(buffer), cipher.final()]);
   return encrypted;
};

// Decrypt
const decrypt = (buffer) => {
   const decipher = crypto.createDecipheriv(algorithm, secretKey, iv);
   const decrypted = Buffer.concat([decipher.update(buffer), decipher.final()]);
   return decrypted;
};

// Read file
fs.readFile('CertificatesNitin Billa.jpg', (err, data) => {
   if (err) throw err;

   // Encrypt
   const encrypted = encrypt(data);
   fs.writeFile('filess.txt', encrypted, err => {
       if (err) throw err;
   });

   // Decrypt
   const decrypted = decrypt(encrypted);
   fs.writeFile('fileeess.jpg', decrypted, err => {
       if (err) throw err;
   });
});
