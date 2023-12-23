
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
  await input.once('readable', async () => {
    iv = await input.read(16);
    const decipher = await crypto.createDecipheriv(algorithm, secretKey, iv);
    console.log('decipher created')
    await input.pipe(decipher).pipe(output)
    console.log('decipher createdss')

 
   
  });
};



// decryptFile('JVuuma0mzMuiGh2bdH5g.txt','4d498ddb57f0139fe8f971b5c8cba965','JVuuma0mzMuiGh2bdH5g' )
module.exports = { encryptFile, decryptFile };
