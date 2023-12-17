import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { getDocs } from "firebase/firestore";  
import { auth } from "../firebase";
// import { db } from 'firebase/firestore';
import { db } from "../firebase";
import fernet from "fernet";
import crypto from "crypto";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userRef, setUserRef] = useState("");
  const [roler, setRoler] = useState("");

  const googleSignIn = async (Role) => {
    const provider = new GoogleAuthProvider();
     signInWithPopup(auth, provider);
    // if(userCredential && userCredential.user){
    //   const docRef = await addDoc(collection(db,"users"),{
    //     Role: Role,        
    // });
    // console.log("ID: ",docRef.id)
    // }
  };

  // const register = async (email,password,Role) =>{
  //   try{
  //     createUserWithEmailAndPassword(auth, email, password);

      
  //       console.log("I AM IN!!!!!!!!!!!!");
  //       const docRef = await addDoc(collection(db,"users"),{
  //         Role: Role,        
  //     });
  //     console.log("ID: ",docRef.id)
      
  //   }catch(error){
  //     console.log(error);
  //   }
  //     return userCredential;

  // };

  function secretkey(){
    const  key = crypto.randomBytes(32);
    var secret = new fernet.Secret(key.toString('base64'));
    console.log(secret.key);
    return secret.signingKeyHex;    
  }


  const upload = async() =>{
    const key = secretkey();
    try {
      const docRef = await addDoc(collection(db, "Details"), {
        broker_address: "0x00000",
        key: key,
        user_address: "0x000001"
      });
      console.log("Document written with ID: ", docRef.id);
      setUserRef(docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

   async function register(email,password,role){    
    try {
      console.log("BEFOE REGISTER!!!!!!")
         const res = await createUserWithEmailAndPassword(auth, email, password);
         const resp = await upload();  
         console.log("After REGISTER!!!!!!")
           const docRef = await addDoc(collection(db,"users"),{
                Role: role,
                Email: email                
            });
            console.log("ID: ",docRef.id)

            console.log("AFTER DB!!!!!!")
            return res;
        
    } catch (error) {
        console.log(error);
    }
    
}

async function fetchRole(email){
  try{
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc)=>{
      if(doc.data().Email == email){
       setRoler(doc.data().Role);   
       return roler;   
      }
      
    })
  }catch(error){
    console.log(error);
  }
}

 
  

 
  const login = async(email,password)=>{
     const res = signInWithEmailAndPassword(auth,email,password); 
     return res;    
  } 

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [user]);
  

  return (
    <AuthContext.Provider value={{ user, googleSignIn, logOut,register,login,upload,fetchRole,roler,userRef}}>
      {children}
    </AuthContext.Provider>
  );

  
};
  export const UserAuth = () => {
  return useContext(AuthContext);
}
