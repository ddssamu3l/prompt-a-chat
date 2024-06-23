import React from 'react'
import Link from 'next/link';

const Form = ({ type, post, setPost, submitting, handleSubmit}) => {
  return (
    <section className = "w-full max-w-full flex-center flex-col">
        <h1 className = "head_text">
            <span className = "green_gradient text-center">{type} Post</span>
        </h1>

        <p className = "desc text-center max-w-md">
            {type} and share productive prompts with the internet, and help people use AI in new and exciting ways!
        </p>

        <form
            onSubmit = {handleSubmit}
            className = "mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
        >
            <lable>
                <span className = "font-satoshi font-semibold text-base text-grey-700">
                    Your New AI Prompt
                </span>
            
                <textarea 
                    value = {post.prompt}
                    onChange = {(e) => setPost({...post, 
                        prompt: e.target.value})}
                    placeholder = "Write your prompt here:"
                    required
                    className = "form_textarea"
                />
            </lable>

            <lable>
                <span className = "font-satoshi font-semibold text-base text-grey-700">
                    Tags
                    <span className = "font-normal"> (e.g: #productmanagement, #webdevelopment, #newtech)</span>
                </span>
            
                <input 
                    value = {post.tag}
                    onChange = {(e) => setPost({...post, 
                        tag: e.target.value})}
                    placeholder = "What kinds of subjects does your prompt cover?"
                    required
                    className = "form_input"
                />
            </lable>

            <div className = "flex-end mx-3 mb-5 gap-4">
                <Link href = "/" className = 'text-grey-500 text-sm'>
                    Cancel 
                </Link>

                <button
                    type = "submit"
                    disabled = {submitting}
                    className = "px-5 py-1.5 border text-sm bg-green-400 hover:bg-white rounded-full hover:text-black  hover:border-black/[0.5] text-white"
                >
                  {submitting ? `${type}...` : type}
                </button>
            </div>
        </form>
    </section>
  )
}

export default Form