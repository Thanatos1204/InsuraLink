'use client'
import React from "react";
import styles from '../css/loginsignup.css'
import { UserAuth } from "../context/AuthContext";
import { useState,useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { redirect } from "next/navigation";
import Link from "next/link";
import toast, { Toaster } from 'react-hot-toast';
import { Player, Controls } from "@lottiefiles/react-lottie-player";

export default function login(){

    const Router = useRouter();

    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { user, googleSignIn, logOut, login} = UserAuth();
    const [loading, setLoading] = useState(true);
   
  

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
           const response = await login(email,password);
           console.log(response);
           if(response == "client"){
                console.log("I enter into IF");
                window.location.href = '/clientdashboard';
           }else if(response == "broker"){
            window.location.href = '/brokerdashboard';
           }else if(response == "insuranceAgent"){
            window.location.href = '/insurancedashboard';
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
        // if(loading == false){
        //     window.location.href='/';
        // }
    }, [user]);

    return(<>

        <div className="animatedgif">
                        <Player
                        autoplay
                        speed={1.5}
                        loop
                        src="https://lottie.host/6586a1f8-60e6-4768-b44e-11c940439ee2/aeqx72AMS2.json"
                        style={{ backgroundColor: '#fff',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        width: '100vw',
                        height: '100vh',
                        margin: '0px',
                        padding: '0px',
                        //float: 'right',
                        //zIndex: '0',
                            position: 'relative',  // Use 'fixed' to keep it fixed relative to the viewport
                        //    top: '0',
                        right: '-10vw',  
                    }}
                                        /> 
                    </div>

 
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