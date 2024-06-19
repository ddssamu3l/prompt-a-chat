import React from 'react'
import Feed from '@components/Feed.jsx'

const Home = () => {
  return (
    <section className = "w-full flex-center flex-col">
        <h1 className = "head_text text-center" >
            Search & Share 
            <span className = "separate-line text-center blue_gradient"> AI Prompts for ChatGPT </span>
        </h1>
       
        
        <p className = "desc text-center mt-3 lg:font-lg">Got something in mind but don't know how to tell ChatGPT? Find it on Prompt-A-Chat!</p>
        <p className = "desc text-centermt-2">Prompt-A-Chat is an open-source prompt library for ChatGPT that allows users to discover, search, create and share useful prompts to use on ChatGPT. </p>
        <Feed />
    </section >
  )
}

export default Home