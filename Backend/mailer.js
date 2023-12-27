const nodemailer = require('nodemailer');
const fs = require('fs');

fs.readFile('insuralink.html', 'utf8', function(err, html){
  if(err) throw err;

  let transporter = nodemailer.createTransport({
      service: 'hotmail',
      auth: {
          user: 'Insuralink-Certitech@outlook.com',
          pass: 'djsanghvi1234'
      }
  });

  let mailOptions = {
      from: 'Insuralink-Certitech@outlook.com',
        to: 'bhargavpandit01@gmail.com',
      subject: 'Certitech - Your Documents',
      html: html,
      attachments: [{
          filename: 'Rohan Malohtra.jpg',
          path: './Certificates/Rohan Malohtra.jpg',
      },
      {
        filename: 'facebook2x.png',
        path: './images/facebook2x.png',
        cid: 'image@facebook2x.png'
      },
      {
        filename: 'twitter2x.png',
        path: './images/twitter2x.png',
        cid: 'image@twitter2x.png'
      },
      {
        filename: 'linkedin2x.png',
        path: './images/linkedin2x.png',
        cid: 'image@linkedin2x.png'
      },
      {
        filename: 'instagram2x.png',
        path: './images/instagram2x.png',
        cid: 'image@instagram2x.png'
      },
      {
        filename: 'Screenshot_2023-12-26_194703.png',
        path: './images/Screenshot_2023-12-26_194703.png',
        cid: 'image@Screenshot_2023-12-26_194703.png'
       }
    ]
  };

  transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
  });
});
