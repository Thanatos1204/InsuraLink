
const crypto = require('crypto');
const fs = require('fs');

const algorithm = 'aes-256-ctr';


const encryptFile = async (inputFile, secretKey, outputFile) => {
  const iv = await crypto.randomBytes(16);
  const cipher = await crypto.createCipheriv(algorithm, secretKey, iv);

  const input = await fs.createReadStream(inputFile);
  const output = await fs.createWriteStream(outputFile);

  await output.write(iv);

  await input.pipe(cipher).pipe(output);
};


const decryptFile = async (inputFile, secretKey, outputFile) => {
  return new Promise((resolve, reject) => {
    const input = fs.createReadStream(inputFile);
    const output = fs.createWriteStream(outputFile);

    let iv;
    input.once('readable', async () => {
      try {
        iv = input.read(16);
        const decipher = crypto.createDecipheriv(algorithm, secretKey, iv);
        decipher.on('error', (error) => reject(error));
        output.on('finish', () => resolve(`${outputFile} created successfully`));
        input.pipe(decipher).pipe(output);
      } catch (error) {
        reject(error);
      }
    });
  });
};



// decryptFile('JVuuma0mzMuiGh2bdH5g.txt','4d498ddb57f0139fe8f971b5c8cba965','JVuuma0mzMuiGh2bdH5g' )
module.exports = { encryptFile, decryptFile };
