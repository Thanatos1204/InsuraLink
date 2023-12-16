
'use client'

import React, { useState } from 'react'
import './chatgpt.css'
function Chatgpt() {

    const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    // Add user message to the chat
    const msg = [...messages, { content: input, role: "user" }];
    setMessages(msg);
    setInput("");

    // Call OpenAI API to get the bot's response
    const response = await getOpenAIResponse(msg);
    setMessages([
      ...msg,
      { content: response, role: "assistant" },
    ]);
  };

  const getOpenAIResponse = async (userInput) => {
    // Make API request to OpenAI
    const response = await fetch("/api/openai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ input: userInput }),
    });

    const data = await response.json();
    return data.output;
  };

    








  return (
    <div className='chatgpt'>
        <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>  
        </head>
      <div className='maincontainer'>
        <div className='card'>
      <div class="card-overlay"> </div>
     <div class="card-inner">
     <div
      id="chat-container"
      className="overflow-y-auto p-10 rounded-md max-w-3xl mx-auto"
    >
      <div>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 ${
              message.role === "assistant" ? "text-blue-600" : "text-green-600"
            }`}
          >
            <span className="font-bold">{`${message.role}: `}</span>
            {message.role === "assistant" && <span>{message.content}</span>}
            {message.role !== "assistant" && message.content}
          </div>
        ))}
      </div>

    </div>
      
     <div class="input-group mb-3">
     <input type="text" class="form-control" placeholder="Ask any Question??"           value={input}
          onChange={(e) => setInput(e.target.value)} aria-label="Recipient's username" aria-describedby="basic-addon2"/>
     <span class="input-group-text" id="basic-addon2" onClick={sendMessage} >Ask Question ?</span>
       </div>
     </div>

    
     </div>
      </div>
    </div>
  )
}

export default Chatgpt
