const crypto = require('crypto');
const fernet = require('fernet')
function secretkey(){
   const  key = crypto.randomBytes(32);
   const secret = new fernet.Secret(key.toString('base64'));
   console.log(secret);
   return secret.key;   
}

secretkey();
