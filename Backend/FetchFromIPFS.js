const fetch = require('node-fetch');
const fs = require('fs');

async function downloadFile(ipfsHash, useRef) {
  try {
    const response = await fetch(`https://gateway.pinata.cloud/ipfs/${ipfsHash}`);

    if (!response.ok) {
      throw new Error(`Failed to download file. Status: ${response.status} ${response.statusText}`);
    }

    const fileStream = await fs.createWriteStream(`${useRef}.txt`);
    await response.body.pipe(fileStream);

    return new Promise((resolve, reject) => {
      fileStream.on('finish', () => {
        console.log('File downloaded successfully');
        resolve();
      });

      fileStream.on('error', (err) => {
        console.error('Error writing file:', err);
        reject(err);
      });
    });
  } catch (error) {
    console.error('Error while downloading file:', error);
    throw error;
  }
}

// downloadFile('QmbFMke1KXqnYyBBWxB74N4c5SBnJMVAiMNRcGu6x1AwQH', '1FMqFXTlu13bN7ySbXKi')

module.exports = downloadFile;
