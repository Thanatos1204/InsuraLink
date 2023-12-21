
const crypto = require('crypto');
const fs = require('fs');

const algorithm = 'aes-256-ctr';
const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';

const encryptFile = async (inputFile, secretKey, outputFile) => {
  const iv = await crypto.randomBytes(16);
  const cipher = await crypto.createCipheriv(algorithm, secretKey, iv);

  const input = await fs.createReadStream(inputFile);
  const output = await fs.createWriteStream(outputFile);

  await output.write(iv);

  await input.pipe(cipher).pipe(output);
};

const decryptFile = async (inputFile, secretKey, outputFile) => {
  const input = await fs.createReadStream(inputFile);
  const output = await fs.createWriteStream(outputFile);

  let iv;
  input.once('readable', async () => {
    iv = await input.read(16);
    const decipher = await crypto.createDecipheriv(algorithm, secretKey, iv);
    await input.pipe(decipher).pipe(output);
  });
};



module.exports = { encryptFile, decryptFile };
