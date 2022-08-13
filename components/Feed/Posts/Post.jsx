import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { db } from "../../../firebase";
import Comment from "./Comment";

import {
	BookmarkIcon,
	ChatIcon,
	DotsHorizontalIcon,
	EmojiHappyIcon,
	HeartIcon,
	PaperAirplaneIcon,
} from "@heroicons/react/outline";

import { HeartIcon as HeartIconSolid } from "@heroicons/react/solid";

import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	onSnapshot,
	orderBy,
	query,
	serverTimestamp,
	setDoc,
} from "firebase/firestore";
import Like from "./Like";

const Post = ({ id, username, img, userImg, caption }) => {
	const { data: session } = useSession();
	const [comment, setComment] = useState("");
	const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);

	useEffect(
		() =>
			onSnapshot(
				query(
					collection(db, "posts", id, "comments"),
					orderBy("timestamp", "asc")
				),
				(snapshot) => setComments(snapshot.docs)
			),
		[id]
	);

	const sendComment = async (e) => {
		e.preventDefault();

		const commentToSend = comment;
		setComment("");

		await addDoc(collection(db, "posts", id, "comments"), {
			comment: commentToSend,
			username: session.user.name,
			userImage: session.user.image,
			timestamp: serverTimestamp(),
		});
	};

	return (
		<div className="bg-white my-7 border rounded-sm max-w-2xl mx-auto">
			{/* Person logo */}
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
				<p className="flex-1 ml-3 font-semibold capitalize">{username}</p>
				<DotsHorizontalIcon className="h-6 cursor-pointer" />
			</header>

      {/* Post Image */}
			<img
				src={img}
				className="object-cover w-full"
				alt={`${username} post image`}
			/>

      {/* Likes, Icons */}
			{session && (
				<div className="flex justify-between items-center px-4 pt-4">
					<div className="flex space-x-4">
						<Like id={id} likes={likes} setLikes={setLikes}/>

						<ChatIcon className="btn" />
						<PaperAirplaneIcon className="btn " />
					</div>
					<BookmarkIcon className="btn" />
				</div>
			)}

      {/* Post caption */}
			<div className="border-b ">
				<p className="p-5 truncate ...">
          {likes.length > 0 && (
            <p className="font-bold mb-1">{likes.length} likes</p>
          )}
					<span className="font-bold mr-1 capitalize">{username}</span>
					{caption}
				</p>
			</div>

			{/*  Comments */}
			{session ? (
				<div
					className="ml-10 h-20 overflow-y-scroll 
          scrollbar-thumb-black scrollbar-thin"
				>
					{comments.map((comment) => (
						<Comment
							key={comment.id}
							username={comment.data().username}
							image={comment.data().userImage}
							comment={comment.data().comment}
							timestamp={comment.data().timestamp}
						/>
					))}
				</div>
			) : (
				<div className="flex-1 text-center p-4">
					<p className="text-gray-500 ">
						You need to login, to see the comments
					</p>
				</div>
			)}
      
      {/* Comment input field */}
			{session && (
				<form className="flex items-center p-4 ">
					<EmojiHappyIcon className="h-7" />
					<input
						type="text"
						placeholder="Add a comment... "
						className="border-none flex-1 focus:ring-0"
						value={comment}
						onChange={(e) => setComment(e.target.value)}
					/>
					<button
						type="submit"
						disabled={!comment.trim()}
						onClick={sendComment}
						className="font-semibold text-blue-400"
					>
						Post
					</button>
				</form>
			)}
		</div>
	);
};

export default Post;
