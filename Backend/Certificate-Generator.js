
const pythonRunner = require('./E-Certificates/RunGenerator'); // Provide the correct path to python-runner.js
const main = require('./pinata/UploadNFTimage'); // Provide the correct path to python-runner.js

async function  CertificateGenerator(){
    // run python file to only generate certificates jpg format 
    //await pythonRunner.runPythonScript();
  await main('Dr Narendra Shekokar');
    // upload certificates to ipfs  
}
