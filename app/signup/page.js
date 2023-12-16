'use client'

import styles from '../css/loginsignup.css'
import { UserAuth } from "../context/AuthContext";
import { useState,useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function signup(){

    const Router = useRouter();
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const { user, googleSignIn, logOut, register , fetchDocumentId } = UserAuth();
    const [loading, setLoading] = useState(true);

    const handleSignIn = async () => {
        try {
        await googleSignIn(role);
        window.location.href='/';
        } catch (error) {
        console.log(error);
        }
    };

   

    async function regi(e){
    e.preventDefault();
        try{
            await register(email,password,role);
            window.location.href='/';            
        }catch(error){
          
            console.log(error);
        }
    }

    

    useEffect(() => {
        const checkAuthentication = async () => {
        await new Promise((resolve) => setTimeout(resolve, 50));
        setLoading(false);
        };
        checkAuthentication();
        if(loading == false){
            Router.push('/');
        }
    }, [user]);

    return(<>
      
        <div className={styles.registercontainer} id="register">
           <div className='flex justify-center py-3 text-sm'>
               <span>Have an account? <a href="#" onclick="login()">Login</a></span>                
           </div>
           <header className='text-center text-5xl pb-5'>Sign Up</header>
           <div className='flex gap-5 justify-center py-5'>
               <div className={styles.inputbox}>
                   <input type="text" class="input-field" placeholder="Firstname"/>
                   <i class="bx bx-user"></i>
               </div>
               <div className={styles.inputbox}>
                   <input type="text" class="input-field" placeholder="Lastname"/>
                   <i class="bx bx-user"></i>
               </div>
           </div>
           <div className='pb-5'>
               <div className='pb-5'>
                   <input type="text" class="input-field" required value={email} onChange={(event) => setEmail(event.currentTarget.value)} placeholder="Email"/>
                   <i class="bx bx-envelope"></i>
               </div>
               <div className={styles.inputbox}>
                   <input type="password" class="input-field" required value={password} onChange={(event) => setPassword(event.currentTarget.value)} placeholder="Password"/>
                   <i class="bx bx-lock-alt"></i>
               </div>
              

           </div> 
           <div className={styles.inputbox}>
                   <input type="text" class="input-field" placeholder="Role" required value={role} onChange={(event) => setRole(event.currentTarget.value)} />
                   <i class="bx bx-envelope"></i>
               </div>   
           <div className={styles.inputbox}>
               <input type="submit" class="submit" onClick={handleSignIn} onSubmit={handleSignIn} value="Sign In with Google"/>
               <input type="submit" class="submit" onClick={regi} onSubmit={regi} value="Register"/>   
           </div>
           <div className='flex justify-between'>
               <div className={styles.one}>
                   <input type="checkbox" id="register-check"/>
                   <label for="register-check"> Remember Me</label>
               </div>
               <div className={styles.two}>
                   <label><a href="#">Terms & conditions</a></label>
               </div>
           </div>
       </div>    
   </>);
}