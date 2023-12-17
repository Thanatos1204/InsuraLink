'use client'
import React from "react";
import { useState, useEffect } from "react";
import { UserAuth } from "./context/AuthContext.js";
import './landing.css'
import Image from "next/image.js";
import lander from '../public/Frame 7.png'
import Footer from "./Footer.js";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useRouter } from "next/navigation.js";


export default function Home() {

  const Router = useRouter();

  const {  user,logOut, upload, fetchDocumentId } = UserAuth();

  const handleSignOut = async () => {
    try {
    await logOut();
    } catch (error) {
    console.log(error);
    }
};

const printUser = ()=>{
  fetchDocumentId();
}

  const [shouldReload, setShouldReload] = useState(false);

    // useEffect(() => {
    //   console.log("I AM INSIDE");
    //   // Check if the page has been visited before by checking local storage
    //   const hasVisited = localStorage.getItem('hasVisited');

    //   // If the page has not been visited, set the flag in local storage and reload
    //   if (!hasVisited) {
    //     localStorage.setItem('hasVisited', 'true');
    //     setShouldReload(true);
    //   }
    // }, []);

    // useEffect(()=>{
    //   location.reload();
    //   console.log("HELLO");
    // },[])

    useEffect(()=>{
      window.__be = window.__be || {};
        window.__be.id = "657e28994ae6bc0007819a8b";

        const be = document.createElement('script');
        be.type = 'text/javascript'; 
        be.async = true;
        be.src = ('https:' === document.location.protocol ? 'https://' : 'http://') + 'cdn.chatbot.com/widget/plugin.js';

        const s = document.getElementsByTagName('script')[0]; 
        s.parentNode.insertBefore(be, s);
      if(user){
      Router.refresh();
    }
    },[user])

  
    

const testUpload = () =>{
  const res = upload();
  if(res){
    console.log("Data Sent");
  }
}



  return (
    <main className="p-4">
      
        
      <div className='landingpage'>
       <header>
            <a class="logo" href="/">InsuraLink</a>
            <nav>
                <ul class="nav__links">
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </nav>
            {!(user)?
            (<a class="btn1" href="/login">Log in</a>):(<a class="btn1" onClick={handleSignOut}>Sign Out</a>)}
        </header>
        <div className='bannersection'>
            <div className='slogan'>
              <div className='mainslogan'>
               <p><span>Protect</span> Your Future .</p>
              </div>
              <div className='subslogan'>
              We understand that unexpected events can have a major impact on your life. That's why we're committed to providing comprehensive insurance coverage to protect you and your assets.
              </div>
              <button className='btn1'>
               Learn more
              </button>

            </div>
            <div className='sideimg'>
                <div className='backgroundimg'>
                <Image src={lander} className="landerimg"/>

            
                </div>

            </div>

        </div>
        <div className="clienttype">
          <div className="title flex justify-between"><p>What makes
Insured+ accessible</p><p className="subtitle">We believe that insurance should provide you with peace of mind, knowing that you're covered in case of an unexpected event.</p>
</div>
    <div className="landcards">
      <div className="landcard">
        <h5>Healthcare in your fingertips</h5>
        <p>That's why we offer personalised support and guidance throughout the insurance process, </p>
        
      </div>

      <div className="landcard">
      <h5>Healthcare in your fingertips</h5>
        <p>That's why we offer personalised support and guidance throughout the insurance process, </p> 
      </div>
      <div className="landcard">
      <h5>Healthcare in your fingertips</h5>
        <p>That's why we offer personalised support and guidance throughout the insurance process, </p>

      </div>
      </div>
        </div>
        <div className="testimonial">
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><div class="card">
          <h5>Nick Polsen</h5>
          <span>Rapid Exchange</span>
          <p>I switched to this insurance company after having some issues with my previous ..</p>
         </div></SwiperSlide>
         <SwiperSlide><div class="card">
         <div class="bg"></div>
         <div class="blob"></div>
         </div></SwiperSlide>
         <SwiperSlide><div class="card">
         <div class="bg"></div>
         <div class="blob"></div>
         </div></SwiperSlide>
         <SwiperSlide><div class="card">
         <div class="bg"></div>
         <div class="blob"></div>
         </div></SwiperSlide>
         <SwiperSlide><div class="card">
         <div class="bg"></div>
         <div class="blob"></div>
         </div></SwiperSlide>
         <SwiperSlide><div class="card">
         <div class="bg"></div>
         <div class="blob"></div>
         </div></SwiperSlide>

      
      </Swiper>
        <div className="testimonialtext">
          <p>
          That's why we offer personalised support and guidance throughout the insurance process,
          </p>
        </div>
        </div>
        <Footer/>
    </div>
    <noscript>You need to <a href="https://www.chatbot.com/help/chat-widget/enable-javascript-in-your-browser/" rel="noopener nofollow">enable JavaScript</a> in order to use the AI chatbot tool powered by <a href="https://www.chatbot.com/" rel="noopener nofollow" target="_blank">ChatBot</a></noscript>
    </main>
  )
}
