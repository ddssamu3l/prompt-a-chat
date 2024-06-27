'use client';

import {useState, useEffect} from 'react';
import {useSession} from 'next-auth/react';
import {useRouter} from "next/navigation"

import Profile from "@components/profile";

const MyProfile = () => {
    const router = useRouter();
    const {data: session} = useSession();

    const [posts, setPosts] = useState([]);
    const username = session?.user.name.toString();

    useEffect(() => {
        const fetchPosts = async () => {
          const response = await fetch(`/api/users/${session?.user.id}/posts`);
          const data = await response.json();
    
          setPosts(data);
        }
    
        if(session?.user.id)fetchPosts(); 
      }, []);

    const handleEdit = (post) => {
      router.push(`/update-prompt?id=${post._id}`)
    }

    const handleDelete = async(post) => {

    }
  return (
    
    <Profile 
        name = {username}
        desc = "Welcome to your profile page"
        data = {posts}
        handleEdit = {handleEdit} 
        handleDelete = {handleDelete}
    />// inside Profile.jsx, each post in 'posts' will be able to access the handleEdit and handleDelete function
  )
}

export default MyProfile