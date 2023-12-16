'use client'
import React from "react";
import styles from '../css/loginsignup.css'
import { UserAuth } from "../context/AuthContext";
import { useState,useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { redirect } from "next/navigation";
import Link from "next/link";
import toast, { Toaster } from 'react-hot-toast';

export default function login(){

    const Router = useRouter();

    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { user, googleSignIn, logOut, login } = UserAuth();
    const [loading, setLoading] = useState(true);
    const [role, setRole] = useState("");


    const handleSignIn = async () => {
        try {
        await googleSignIn();
        } catch (error) {
        console.log(error);
        }
    };

    const logIn = async(e) =>{
        e.preventDefault();
        try{
           const response = await login(email,password,role);
           console.log('Tried');
           if(response){            
            
           }            
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
            window.location.href='/';
        }
    }, [user]);

    return(<>
    <Toaster style= {
      {overflow: 'hidden',
      height: '30px',}
    }/>
        <div className={styles.logincontainer} id="login">
            <div className='flex justify-center py-3 text-sm'>
                <span>Don't have an account? <Link href="/signup">Sign Up</Link></span>                
            </div>
            <header className='text-center text-5xl pb-5'>Login</header>
            <div className={styles.inputbox}>
                <input type="text" class="input-field" required value={email} onChange={(event) => setEmail(event.currentTarget.value)}  placeholder="Your Email"/>
                <i class="bx bx-user"></i>
            </div>
            <div className="py-2"></div>
            <div className={styles.inputbox}>
                <input type="password" class="input-field" required value={password} onChange={(event) => setPassword(event.currentTarget.value)}  placeholder="Password"/>
                <i class="bx bx-lock-alt"></i>
            </div>
            <div className="py-2"></div>
            <div className={styles.inputbox}>
                   <input type="text" class="input-field" placeholder="Role" required value={role} onChange={(event) => setRole(event.currentTarget.value)} />
                   <i class="bx bx-envelope"></i>
               </div>  
            <div className={styles.inputbox}>
                <input type="submit" class="submit" onClick={handleSignIn} value="Log In With Google"/>
                <input type="submit" class="submit" onClick={logIn} value="Sign In"/>
            </div>
            <div className="flex justify-between text-xs">
                <div class="one">
                    <input type="checkbox" id="login-check"/>
                    <label for="login-check"> Remember Me</label>
                </div>
                <div class="two">
                    <label><a href="#">Forgot password?</a></label>
                </div>
            </div>
        </div>
    
    </>);
}