
const crypto = require('crypto');
const fs = require('fs');

const algorithm = 'aes-256-ctr';
const secretKey = 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3';

const encryptFile = (inputFile, secretKey, outputFile) => {
  return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, iv) => {
          if (err) {
              reject(err);
              return;
          }

          const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
          const input = fs.createReadStream(inputFile);
          const output = fs.createWriteStream(outputFile);

          output.on('error', reject);
          input.on('error', reject);

          output.write(iv, (writeErr) => {
              if (writeErr) {
                  reject(writeErr);
                  return;
              }

              input.pipe(cipher).pipe(output).on('finish', () => {
                  resolve(); // resolve the promise once the file has been written
              });
          });
      });
  });
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
