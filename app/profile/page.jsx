'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Profile from '@components/Profile';

const MyProfile = () => {
    const router = useRouter();
    const { data: session } = useSession();

    const [posts, setPosts] = useState([]);
    const username = session?.user?.name?.toString();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`/api/users/${session?.user?.id}/posts`);
                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }
                const data = await response.json();
                console.log('Fetched posts:', data); // Log fetched posts
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        if (session?.user?.id) fetchPosts();
    }, [session?.user?.id]);

    const handleEdit = (post) => {
        router.push(`/update-prompt?id=${post._id}`);
    };

    const handleDelete = async (post) => {
        const hasConfirmed = confirm('Are you sure you want to delete this post?');

        if (hasConfirmed) {
            try {
                // Call the DELETE endpoint
                const response = await fetch(`/api/prompt/${post._id.toString()}`, {
                    method: 'DELETE',
                });
                if (!response.ok) {
                    throw new Error('Failed to delete post');
                }

                // Filter out the deleted post from the current posts
                const filteredPosts = posts.filter((item) => item._id !== post._id);
                setPosts(filteredPosts);
            } catch (error) {
                console.error('Error deleting post:', error);
            }
        }
    };

    return (
        <Profile
            name={username}
            desc="Welcome to your profile page"
            data={posts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    );
};

export default MyProfile;
