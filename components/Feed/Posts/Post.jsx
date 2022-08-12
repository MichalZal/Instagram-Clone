import React from "react";
import Image from 'next/image'

import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon
} from '@heroicons/react/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/solid'

const Post = ({ id, username, img, userImg, caption }) => {
	const submissionHandler = (e) => {
    e.preventDefault()
    console.log('sent post')
  } 

  return (
		<div className="bg-white my-7 border rounded-sm">
			<header className="flex items-center p-5">
        <Image
          src={userImg}
          alt={`${username} image`}
          className="rounded-full object-contain 
          cursor-pointer border p-"
          objectFit="contain"
          width={40}
          height={40}
        />
          <p className="flex-1 ml-3 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-6 cursor-pointer"/>
			</header>

      <img
        src={img}
        className="object-cover w-full"
        alt={`${username} post image`}
      />

      <div className="flex justify-between items-center px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn"/>
          <ChatIcon className="btn"/>
          <PaperAirplaneIcon className="btn "/>
        </div>
        <BookmarkIcon className="btn" />
      </div>

			<div>
        <p className="p-5 truncate ...">
          <span className="font-bold mr-1">{username}</span>
          {caption}
        </p>
      </div>

			<div></div>

			<form className="flex items-center p-4 " onSubmit={submissionHandler}>
        <EmojiHappyIcon className="h-7"/>
        <input type="text" placeholder="Add a comment... "className="border-none flex-1 focus:ring-0"/>
        <button className="font-semibold text-blue-400">Post</button>
      </form>
		</div>
	);
};

export default Post;
