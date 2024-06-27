'use client'
import {useEffect, useState} from 'react'
import {useRouter, useSearchParams} from 'next/navigation';

import Form from '@components/Form'

const EditPrompt = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const promptId = searchParams.get("id");

    const [submitting, setSubmitting] = useState(false);
    
    const [post, setPost] = useState({
        title: '',
        prompt: '',
        tag: '',
    });

    useEffect(() => {
        // we call this method to get all the details of the post we want to edit, so that the user can see the post's original content to better edit it.
        const getPromptDetails = async () => {
            // this calls /api/prompt/promptId. /api/prompt/promptId has a "GET" function that returns a single data object with the id of promptId
            const response = await fetch(`/api/prompt/${promptId}`);
            const data = await response.json();
            if(!data)
                console.log("Error getting a post");
            
            setPost({
                title: data.title,
                prompt: data.prompt,
                tag: data.tag,
            });
        };
        
        // we only want to call getPromptDetails if promptId exists
        if (promptId) getPromptDetails();
      }, [promptId]);

    const updatePrompt = async (e) => {
        e.preventDefault();
        if(!promptId) return alert("Prompt ID not found")

        try{
            // fetch the post with the specific promptId
            const response = await fetch(`/api/prompt/${promptId}`, {
                // the "method" refers to which method to call in /api/prompt/[id]
                method: 'PATCH',
                body: JSON.stringify({
                    title: post.title,
                    prompt: post.prompt,
                    tag: post.tag,
                })
            })

            if(response.ok){
                router.push('/');
            }
        }catch (error){
            console.log(error);
        }finally{
            setSubmitting(false);
        }
    }

  return (
    <Form 
        type = "Edit"
        post = {post}
        setPost = {setPost}
        submitting = {submitting}
        handleSubmit = {updatePrompt}
    />
  )
}

export default EditPrompt