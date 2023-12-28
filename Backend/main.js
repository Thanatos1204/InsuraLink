
const ethersFunctions = require('./StoreHashOnChain.js');
const { storeUserHash, getUserHash, getUserCertificateHash, storeUserCertificateHash, contract, contractAddress, contractABI, connectedWallet, provider, wallet, privateKe } = ethersFunctions;
const { collection, getDocs, getDoc, doc } = require('firebase/firestore')
const db = require('./firebase.js')
const { encryptFile, decryptFile } = require('./EncryptDecrypt.js');
const fs = require('fs');
const pinFileToIPFS = require('./pinFileToIPFS.js')
const pinImageToIPFS = require('./pinImageToIPFS.js')
require('dotenv').config();
const downloadFile = require('./FetchFromIPFS.js');
const generateCertificate = require('./generateCertificate.js');
const { deleteFile } = require('./deleteFile.js');
const sendEmailToRecipient = require('./mailer.js');
const revokeCertificate = require('./revokeCertificate.js');
async function addUserDetails(useRef) {
    try {
        console.log('creating user');
        const UserKey = await readKey(useRef);
        console.log('key fetched from db');

        await encryptFile(`${useRef}.json`, UserKey, `${useRef}.txt`);
        console.log(`file Encrypted with ${useRef}.txt`);

        // Check if file exists after encryption
        // try {
        //     //await fs.access(`${useRef}.txt`);
        //     console.log('file exists');
        // } catch (error) {
        //     console.error('file does not exist');
        //     throw error; // Propagate the error up if file doesn't exist
        // }

        const IPFSObject = await pinFileToIPFS(useRef);
        await storeUserHash(useRef, IPFSObject);
        

        console.log('User created successfully');
    } catch (error) {
        console.error('Error in addUserDetails:', error);
        // Handle the error appropriately
    }
}

// addUserDetails(useRef, FormData)


async function fetchUserDetails(useRef) {
    try {
      const UserKey = await readKey(useRef);
      const IpfsHash = await getUserHash(useRef);
      await downloadFile(IpfsHash, `${useRef}`);
      const decryptedFileMsg = await decryptFile(`${useRef}.txt`, UserKey, `${useRef}_decrypt.json`);
      console.log(decryptedFileMsg);
  
      const data = await fs.readFileSync(`${useRef}_decrypt.json`);
      deleteFile(`${useRef}.txt`);
      deleteFile(`${useRef}_decrypt.json`);
      return data;
    } catch (error) {
      console.error('Error:', error);
      // Handle the error here
      return null;
    }
  }



// fetchUserDetails('JVuuma0mzMuiGh2bdH5g')
async function genCertificate(name, useRef,email) {
    const certificate = await generateCertificate(name)
    const email = sendEmailToRecipient(email, name)
    const imageHash = await pinImageToIPFS(`./Certificates/${name}.png`)
    const store = await storeUserCertificateHash(useRef, imageHash)
    return imageHash
}
// genCertificate('Bhargav Pandit', 'JVuuma0mzMuiGh2bdH5g')

async function revoCertificate(name, useRef, email){
    const certificate = await revokeCertificate(name)
    const imageHash = await pinImageToIPFS(`./Certificates/${name}.png`)
    const store = await storeUserCertificateHash(useRef, imageHash)
    return imageHash

}

// 

async function readKey(userRef) {
    const docSnapshot = await getDoc(doc(db, "Client", userRef));

    if (!docSnapshot.exists()) {
        console.log("No such document!");
        return null;
    } else {
        const data = docSnapshot.data();
        console.log(data)
        return data.key;
    }
}
// readKey('fpRZnoX95eVBECjNKiodUeOzAd83')

// readKey()

// async function readKey() {
//     const querySnapshot = await getDocs(collection(db, "Details"));
//     querySnapshot.forEach((doc) => {
//         const docRefID = doc;
//         const userkey = doc.data().key;
//         console.log(`${docRefID} = > ${userkey}`);

//     });
// }



// encryptFile ('./Data/johndoe.json', 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3', 'output.txt');
// decryptFile ('output.txt', 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3', 'output.json');
// pinFileToIPFS();




module.exports = { addUserDetails, fetchUserDetails, genCertificate, revoCertificate } 