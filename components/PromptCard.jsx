'use client';

import {useState} from 'react';
import Image from 'next/image';
import {useSession} from 'next-auth/react';
import {usePathname, useRouter} from 'next/navigation';

const PromptCard = ({post, handleTagClick, handleEdit, handleDelete}) => {
  const [copied, setCopied] = useState("");

  const {data: session} = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(false), 3000);
  };

  // When clicked on a user's profile pic, the site redirects to a new page that shows the specific user's profile
  const goToUserProfile = () => {
    console.log(post);
    // edge case: if the post's creator is the same as the user who is currently logged in, then go to the user's specific profile in /profile
    // else: go to a "profile page" that shows all of the posts made by the user who got clicked
    if(post.creator._id === session?.user.id)
      router.push("/profile");
    else
      router.push(`/profile/${post.creator._id}?username=${post.creator.username}`);
  };

  return (
    <div className = "prompt_card">
      <div className = "flex justify-between items-start gap-5">
        <div className = "flex-1 flex justify-start items-center gap-3 cursor-pointer" onClick = {goToUserProfile}> 
          <Image 
            src = {post.creator.image}
            alt = "user_image"
            width = {40}
            height = {40}
            className = "rounded-full object-contain hover-enlarge"
          />
          <div className = "flex flex-col">
            <h3 className = "font-satoshi text-lg font-semibold text-grey-900">{post.creator.username}</h3>
            <p className = "font-inter text-xs text-grey-500">{post.creator.email}</p>
          </div>
        </div>
        <p className = "text-xs font-normal font satoshi">{copied? "prompt copied!" : "copy prompt"}</p>
        <div className='copy_btn' onClick={handleCopy}>
              <Image
                src={
                  copied === post.prompt
                    ? "/assets/icons/tick.svg"
                    : "/assets/icons/copy.svg"
                }
                alt={copied === post.prompt ? "tick_icon" : "copy_icon"}
                width={18}
                height={18}
              />
        </div>
      </div>
      <p className = "my-4 font-satoshi text-md font-semibold text-grey-700 text-center">{post.title}</p>
      <p className = "my-4 font-satoshi text-sm text-grey-700 border border-gray-300 rounded-xl p-3">{post.prompt}</p>

      <p 
      className = "font-inter text-sm hover:text-blue-500 cursor-pointer"
      onClick={() => handleTagClick(post.tag)}
      >#{post.tag}</p>

      {session?.user.id === post.creator._id && pathName === "/profile" && (
        <div className='mt-5 flex-center gap-4 border-t border-gray-100 pt-3'>
          <p
            className='font-inter text-sm green_gradient cursor-pointer'
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className='font-inter text-sm orange_gradient cursor-pointer'
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  )
}

export default PromptCard