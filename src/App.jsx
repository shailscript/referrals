import React, { useState } from "react"

const App = () => {
  const [error, setError] = useState('');
  
  const rError = <p>{error}</p>
  const rNoError = null;

  const handleClick = async() => {
    const data = {
      title: "Cover is awesome!",
      text: "I saved on my new insurance quote by Cover. Get your next quote from them and we both get $50.",
      url: "https://cover.com/insurance"
    }
    try {
      await navigator.share(data);
    } catch (error) {
      setError(error);
      console.error(error.message)
    }
  }
  
  return (
    <div className="h-screen w-screen flex flex-col justify-around align-items-center">
      <button
        className="w-xl h-40 p-4 bg-blue-800 text-3xl text-white uppercase font-bold tracking-wide"
        onClick={handleClick}>
          Share a word!
      </button>
      { error ? rError : rNoError }
    </div>
  )
}

export default App;
