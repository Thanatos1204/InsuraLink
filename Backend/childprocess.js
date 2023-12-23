const { spawn } = require('child_process');

async function generateCertificate(name) {
    return new Promise((resolve, reject) => {
        const python_process = spawn('python', ['Generator.py', name]);

        python_process.stdout.on('data', (data) => {
            console.log("Data received from python script: " + data.toString());
        });

        python_process.stderr.on('data', (data) => {
            console.error("Error received from python script: " + data.toString());
            reject(data.toString());
        });

        python_process.on('close', (code) => {
            if (code === 0) {
                console.log(`Python script execution for ${name} completed successfully.`);
                resolve();
            } else {
                reject(`Python script execution for ${name} failed with code ${code}`);
            }
        });
    });
}

module.exports = { generateCertificate };
