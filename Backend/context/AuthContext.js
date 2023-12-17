// // import { useContext, createContext, useState, useEffect } from "react";
// // import {
// //   signInWithPopup,
// //   signOut,
// //   onAuthStateChanged,
// //   GoogleAuthProvider,
// //   createUserWithEmailAndPassword,
// //   signInWithEmailAndPassword,
// // } from "firebase/auth";
// // import { collection, addDoc } from "firebase/firestore"; 
// // import { auth } from "../firebase";
// // import { db } from "../firebase";
// // import fernet from "fernet";
// // import crypto from "crypto";
// import { collection, getDocs } from "firebase/firestore"; 

// const AuthContext = createContext();

// export const AuthContextProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   const googleSignIn = () => {
//     const provider = new GoogleAuthProvider();
//     signInWithPopup(auth, provider);
//   };

//   const register = (email,password) =>{
    
//       const userCredential = createUserWithEmailAndPassword(auth, email, password);

//       return userCredential;

//   };

//   function secretkey(){
//     const  key = crypto.randomBytes(32);
//     var secret = new fernet.Secret(key.toString('base64'));
//     console.log(secret.key);
//     return secret.signingKeyHex;    
//   }

//   const upload = async(key) =>{
//     key = secretkey();
//     try {
//       const docRef = await addDoc(collection(db, "Details"), {
//         broker_address: "0x00000",
//         key: key,
//         user_address: "0x000001"
//       });
//       console.log("Document written with ID: ", docRef.id);
//     } catch (e) {
//       console.error("Error adding document: ", e);
//     }
//   }

//   const read = async() =>{
//     try{
     
//     });
//     }catch(e){
//       console.log(e);
//     }
//   }

 
//   const login = (email,password)=>{
//      const res = signInWithEmailAndPassword(auth,email,password);

//      return res;
//   }

//   const logOut = () => {
//     signOut(auth);
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//     return () => unsubscribe();
//   }, [user]);

//   return (
//     <AuthContext.Provider value={{ user, googleSignIn, logOut,register,login,upload ,read}}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const UserAuth = () => {
//   return useContext(AuthContext);
// };