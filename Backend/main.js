
const ethersFunctions = require('./StoreHashOnChain.js');
const { storeUserHash,getUserHash, contract, contractAddress, contractABI, connectedWallet, provider, wallet, privateKe} = ethersFunctions;
const { collection, getDocs } = require('firebase/firestore')
const db = require('./firebase.js')
const { encryptFile, decryptFile } = require('./EncryptDecrypt.js');
const fs = require('fs');
const pinFileToIPFS = require('./pinFileToIPFS.js')
const pinImageToIPFS = require('./pinImageToIPFS.js')   
// const { storeUserHash, getUserHash, contract,contractAddress,contractABI,connectedWallet,provider,wallet,privateKey } = require('./StoreHashOnChain.js')   
const { ethers } = require('ethers');
// const fs = require('fs');
require('dotenv').config();
const { JsonRpcProvider } = require('ethers/providers');
const { downloadFile } = require('./FetchFromIPFS.js')
const {generateCertificate} = require('./childprocess.js')
const useRef = '73RwuoHzXWrAbujs7uwa'
const FormData = './Data/johndoe.json'


async function addUserDetails(useRef, FormData){
    console.log('creating user..')
    const UserKey = await readKey(useRef);
    console.log('KEY fetched..')
    await encryptFile (FormData, UserKey, `${useRef}.txt`);
    console.log('file Encrypted')
    const IPFSObject = await pinFileToIPFS(useRef);
    await storeUserHash(useRef, IPFSObject);
    console.log('creating user..')
   
}


async function fetchUserDetails(useRef){
    
    const UserKey = await readKey(useRef);
    const IpfsHash = await getUserHash(useRef);
    await downloadFile(IpfsHash, `${useRef}`);
    await decryptFile (`${useRef}.txt`, UserKey, `${useRef}_decrypt.json`);
}

async function genCertificate(name){
    await generateCertificate(name)   
    // const imageHash = await pinImageToIPFS(`./Certificates/${name}.jpg`)
    // console.log(imageHash)
}

genCertificate('Mark Katson')

async function readKey(userRef) {
    const querySnapshot = await getDocs(collection(db, "Details"));
    
    for (const doc of querySnapshot.docs) {
        const docRefID = doc;
        const Userkey = doc.data().key;
        
        if (docRefID.id === userRef) {
            return Userkey; // Return the Userkey when the condition is met
        }
    }
    
    return null; // Return null if the userRef is not found
}




// async function readKey(userRef){
//     const querySnapshot = await getDocs(collection(db, "Details"));
//     querySnapshot.forEach((doc) => {
//     const docRefID  = doc;
//     Userkey  = doc.data().key;
//      if(docRefID.id == userRef){
//          console.log(Userkey);
//          return docRefID.id == userRef ? Userkey : null;
//      }
// });
// }



    // encryptFile ('./Data/johndoe.json', 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3', 'output.txt');
    decryptFile ('output.txt', 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3', 'output.json');
// pinFileToIPFS();

userRef = 'M5s4UA8ISs0NVnM1p6Nz'
async function main2(useRef){
    IPFShash = 'abcd'
   storeUserHash(useRef, IPFShash)
}


module.exports = { addUserDetails , fetchUserDetails, genCertificate} 