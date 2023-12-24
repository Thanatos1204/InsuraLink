
const ethersFunctions = require('./StoreHashOnChain.js');
const { storeUserHash, getUserHash, getUserCertificateHash,storeUserCertificateHash,contract, contractAddress, contractABI, connectedWallet, provider, wallet, privateKe } = ethersFunctions;
const { collection, getDocs,getDoc,doc} = require('firebase/firestore')
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
const downloadFile = require('./FetchFromIPFS.js');
const generateCertificate = require('./generateCertificate.js');
const useRef = 'rDrOXPjQ51hQeu5tBXGs'
const FormData = './Data/johndoe.json'
// delete a file 
const { deleteFile } = require('./deleteFile.js');
const { get } = require('http');


async function addUserDetails(useRef) {
    console.log('creating user')
    const UserKey = await readKey(useRef);
    console.log('key fetched from db')
    await encryptFile(`${useRef}.json`, UserKey, `${useRef}.txt`);
    console.log(`file Encrypted with ${useRef}.txt`)
    if(fs.existsSync(`${useRef}.txt`)){
        console.log('file exists')
        const IPFSObject = await pinFileToIPFS(useRef);
        await storeUserHash(useRef, IPFSObject);
        await deleteFile(`${useRef}.txt`);
    }

    console.log('creating user..')

}

// addUserDetails(useRef, FormData)


    async function fetchUserDetails(useRef) {
        const UserKey = await readKey(useRef);
        const IpfsHash = await getUserHash(useRef);
        await downloadFile(IpfsHash, `${useRef}`);
        await decryptFile(`${useRef}.txt`, UserKey, `${useRef}_decrypt.json`);
        return Promise.resolve(); // Resolve the Promise after all operations are completed
      }
      
  

// fetchUserDetails('JVuuma0mzMuiGh2bdH5g')
async function genCertificate(name, useRef) {
    const certificate = await generateCertificate(name)
    const imageHash = await pinImageToIPFS(`./Certificates/${name}.png`)
    const store =  await storeUserCertificateHash(useRef, imageHash)
    await deleteFile(`./Certificates/${name}.png`)
    return imageHash
}
// genCertificate('Bhargav Pandit', 'JVuuma0mzMuiGh2bdH5g')



async function readKey(userRef) {
    const docSnapshot = await getDoc(doc(db, "Client", userRef));

   if (!docSnapshot.exists()) {
       console.log("No such document!");
       return null;
   } else {
       const data = docSnapshot.data();
    //    console.log(data)
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




module.exports = {addUserDetails, fetchUserDetails, genCertificate } 