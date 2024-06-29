import React from 'react'

const LandingPage = () => {
  return (
    <div className = "w-full flex-center flex-col">
        <h1 className = "head_text text-center" >
            Search & Share 
            <br />
            <span className = " text-center blue_gradient"> AI Prompts for ChatGPT </span>
        </h1>
       
        
        <p className = "desc text-center mt-3 lg:font-lg">Got something in mind but don't know how to tell ChatGPT? Find it on Prompt-A-Chat!</p>
        <p className = "desc text-centermt-2">Search what you want to find, or click on a user's profile picture to see their profile, click "copy prompt" to copy the prompt that the user has posted, and click on the #tags to show all posts with similar tags! </p>
    </div>
  )
}

export default LandingPage