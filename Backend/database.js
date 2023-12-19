const { collection, getDocs } = require('firebase/firestore')
const db = require('./firebase.js')


async function readKey() {
    const querySnapshot = await getDocs(collection(db, "Details"));
    querySnapshot.forEach((doc) => {
        const docRefID = doc;
        const userkey = doc.data().key;
        console.log(`${docRefID.id} = > ${userkey}`);

    });
}
readKey()