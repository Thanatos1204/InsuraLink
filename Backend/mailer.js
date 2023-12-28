const nodemailer = require('nodemailer');
const fs = require('fs').promises; // Importing fs with promises support
const { deleteFile } = require('./deleteFile.js');

async function sendEmailToRecipient(emailAddress, receiverName) {
  try {
    const html = await fs.readFile('insuralink.html', 'utf8');

    const transporter = nodemailer.createTransport({
      service: 'hotmail',
      auth: {
        user: 'Insuralink-Certitech@outlook.com',
        pass: 'djsanghvi1234'
      }
    });

    const mailOptions = {
      from: 'Insuralink-Certitech@outlook.com',
      to: emailAddress,
      subject: 'Certitech - Your Documents',
      html: html,
      attachments: [
        // Your attachments
      ]
    };

    const info = await transporter.sendMail(mailOptions);

    console.log(`Email sent to ${receiverName} (${emailAddress}): ${info.response}`);

    await deleteFile(`./Certificates/${receiverName}.png`);
  } catch (error) {
    console.log(error);
  }
}

module.exports = sendEmailToRecipient;
