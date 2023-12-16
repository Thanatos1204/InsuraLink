'use client'
import React from "react";
import { UserAuth } from "./context/AuthContext.js";



export default function Home() {

  const {  logOut, upload } = UserAuth();

  const handleSignOut = async () => {
    try {
    await logOut();
    } catch (error) {
    console.log(error);
    }
};

const testUpload = () =>{
  const res = upload();
  if(res){
    console.log("Data Sent");
  }
}

  return (
    <main className="p-4">
      <h1>Home Page</h1>
      <button onClick={handleSignOut}>Sign Out</button>
      <button onClick={testUpload}>Upload Test Data</button>
    </main>
  )
}
