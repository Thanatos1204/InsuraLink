
const crypto = require('crypto');
const fs = require('fs');

const algorithm = 'aes-256-ctr';
const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';

const encryptFile = (inputFile, secretKey, outputFile) => {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

  const input = fs.createReadStream(inputFile);
  const output = fs.createWriteStream(outputFile);

  output.write(iv);

  input.pipe(cipher).pipe(output);
};

const decryptFile = (inputFile, secretKey, outputFile) => {
  const input = fs.createReadStream(inputFile);
  const output = fs.createWriteStream(outputFile);

  let iv;
  input.once('readable', () => {
    iv = input.read(16);
    const decipher = crypto.createDecipheriv(algorithm, secretKey, iv);
    input.pipe(decipher).pipe(output);
  });
};



module.exports = { encryptFile, decryptFile };
