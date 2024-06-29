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
        <p className = "desc text-centermt-2">Prompt-A-Chat is an online prompt library for ChatGPT that allows users to discover, search, create and share useful prompts to use on ChatGPT. </p>
    </div>
  )
}

export default LandingPage