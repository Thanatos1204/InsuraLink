const { spawn } = require('child_process');

async function generateCertificate(name){
    


const python_process = await  spawn('python', ['Generator.py', name]);

await python_process.stdout.on('data', async (data) => {
   await console.log("Data received from python script:" + data.toString());
});

await python_process.on('error', (error) => {
   console.log("Error: " + error);
});

}

generateCertificate('Bhargav Pandit')
module.exports = { generateCertificate };