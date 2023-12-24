import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import { getDocs } from "firebase/firestore";  
import { auth } from "../firebase";
// import { db } from 'firebase/firestore';
import { db } from "../firebase";
import fernet from "fernet";
import crypto from "crypto";
  
const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [count , setCount] = useState(0);
  const [user, setUser] = useState(null);
  
  
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


  const upload = async(email) =>{
    const key = secretkey();
    console.log("KEY = " + key);
    return key;
  }

  
   async function register(email,password,role,brId){
    let uid = '';      
    try {
      console.log("BEFORE REGISTER!!!!!!")
         const res = await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          uid = user.uid;          
        });

         const resp = await upload(email);  
         console.log("After REGISTER!!!!!!")
         {/*Add to specific DB*/}
         if(role == 'client'){
          console.log("In Client");
           await setDoc(doc(db,"Client",uid),{
            brokerId: brId,
            clientId: uid,
            key: resp
           })
           setCount(prevCount => prevCount + 1);
         }else if(role == 'broker'){
          console.log("In Broker");
            await setDoc(doc(db,"Broker",uid),{
              brokerId: brId
            })
            setCount(prevCount => prevCount + 1);
         }else if(role == 'insuranceAgent'){
          console.log("In insuranceAgent");
            await setDoc(doc(db,"InsuranceAgent",uid),{
              agentId: uid,
              brokerId: brId
            })
            setCount(prevCount => prevCount + 1);
         }
                
    } catch (error) {
        console.log(error);
    }    
}

const login = async(email,password)=>{
  let uid = '';
  let role = '';
  try{ 
      await signInWithEmailAndPassword(auth,email,password).then((userCredential) => {
      const user = userCredential.user;
      uid = user.uid;
    });
    
    const clientData = await getDocs(collection(db,"Client"));
    clientData.forEach((doc)=>{
      if(uid == doc.id){
        console.log('You are a Client');        
        role = "client";
      }
    });

    const brokerData = await getDocs(collection(db,"Broker"));
    brokerData.forEach((doc)=>{
      if(uid == doc.id){
        console.log('You are a Broker');        
        role = "broker";
      }
    });

    const agentData = await getDocs(collection(db,"InsuranceAgent"));
    agentData.forEach((doc)=>{
      if(uid == doc.id){
        console.log('You are a Insurance Agent');
        role = "insuranceAgent";
      }
    });

    return role;
   
  }catch(error){
    console.log(error);
  }    
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
    <AuthContext.Provider value={{ user, googleSignIn, logOut,register,login,upload}}>
      {children}
    </AuthContext.Provider>
  );

  
};
  export const UserAuth = () => {
  return useContext(AuthContext);
}
