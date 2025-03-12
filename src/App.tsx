import React, { useState } from 'react'
import './App.css'

function App() {
  return <div>
      <WelcomeMessage />
      <KeyInputForm />
  </div>
}

function WelcomeMessage() {
    return <div>
        <h1> SummarizeThis </h1>
        <p> Input your Gemini API key to begin summarizing! </p>
    </div>
}

function KeyInputForm() {
    const [key, setKey] = useState('');

    const handleKeySubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("Submitted Key:" + key);
    };

    return <form onSubmit = {handleKeySubmit}>
        <label> API Key: </label>
        <input type = 'text' value = {key} onChange =
            {e => setKey(e.target.value)} />
        <button type = "submit"> Submit </button>
    </form>
}

export default App