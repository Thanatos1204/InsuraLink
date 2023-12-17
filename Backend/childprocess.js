const { spawn } = require('child_process');

async function generateCertificate(name){
    


const python_process = spawn('python', ['Generator.py', name]);

python_process.stdout.on('data', (data) => {
   console.log("Data received from python script:" + data.toString());
});

python_process.on('error', (error) => {
   console.log("Error: " + error);
});

}


module.exports = { generateCertificate };