'use client'
import React from "react";
import { UserAuth } from "./context/AuthContext.js";



export default function Home() {

  const {  logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
    await logOut();
    } catch (error) {
    console.log(error);
    }
};

  return (
    <main className="p-4">
      <h1>Home Page</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </main>
  )
}
