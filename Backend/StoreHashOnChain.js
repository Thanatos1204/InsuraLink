const { ethers } = require('ethers');
const fs = require('fs');
require('dotenv').config();
const { JsonRpcProvider } = require('ethers/providers');

// Your private 



    const privateKey = `${process.env.PRIVATE_KEY}`;

    // Create an account from the private key
    const wallet = new ethers.Wallet(privateKey);

    // Connect to the Polygon Testnet Mumbai
    const provider = new JsonRpcProvider('https://rpc-mumbai.maticvigil.com');

    // Set the wallet as the default signer
    const connectedWallet = wallet.connect(provider);

    // Read the ABI from a JSON file
    const contractABI = JSON.parse(fs.readFileSync('./constants/ABI.json'));

    // Replace with your contract address
    //0x6fb951f33e4e52ef0e9c1f78325a9223d7dd1f4d
    const contractAddress = '0xBC33A5e0645afd2Ba0417EE80A82997d5faf6483';

    // Create a contract instance
    const contract = new ethers.Contract(contractAddress, contractABI, connectedWallet);

    // Function to store a string
   const storeUserHash= async (userRef, IPFShash)=> {
        try {
            await contract.setUserHash(userRef, IPFShash);
            console.log('String stored successfully');
        } catch (error) {
            console.error('Error while storing string:', error);
        }
    }
   const storeUserCertificateHash= async (userRef, IPFShash)=> {
        try {
            await contract.setUserCertificateHash(userRef, IPFShash);
            console.log('String stored successfully');
        } catch (error) {
            console.error('Error while storing string:', error);
        }
    }

    // Function to retrieve a string
   const getUserCertificateHash= async(userRef)=> {
        try {
            const result =  await contract.getUserCertificateHash(userRef);
            console.log(`Hash is : `, result)
            return result;
        } catch (error) {
            console.error('Error while retrieving string:', error);
        }
    }
   const getUserHash= async(userRef)=> {
        try {
            const result =  await contract.getUserHash(userRef);
            console.log(`Hash is : `, result)
            return result;
        } catch (error) {
            console.error('Error while retrieving string:', error);
        }
    }

// storeUserHash('M5s4UA8ISs0NVnM1p6Nz', 'QmVXJZ7kZzYy5QKg9q5p8i4xV9qB9Yq8R9cKX6b7p6jHtZ')
// getUserHash('JVuuma0mzMuiGh2bdH5g')


module.exports = { storeUserHash, getUserHash, getUserCertificateHash,storeUserCertificateHash,contract,contractAddress,contractABI,connectedWallet,provider,wallet,privateKey };