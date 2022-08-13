import React, { useState, useEffect } from "react";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/solid";
import { HeartIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import {
	deleteDoc,
	setDoc,
	onSnapshot,
	collection,
	doc,
} from "firebase/firestore";
import { db } from "../../../firebase";

const Like = ({ id, likes, setLikes }) => {
	const [likeActive, setLikeActive] = useState(false);

	const { data: session } = useSession();
	// Likes
	useEffect(
		() =>
			onSnapshot(collection(db, "posts", id, "likes"), (snapshot) =>
				setLikes(snapshot.docs)
			),
		[id, setLikes]
	);

	useEffect(
		() =>
			setLikeActive(
				likes.findIndex((like) => like.id === session.user.uid) !== -1
			),
		[session.user.uid, likes]
	);
	// Likes

	const likePost = async () => {
		if (likeActive) {
			await deleteDoc(doc(db, "posts", id, "likes", session.user.uid));
		} else {
			await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
				username: session.user.username,
			});
		}
	};

	return (
		<>
			{likeActive ? (
				<HeartIconSolid onClick={likePost} className="btn text-red-500" />
			) : (
				<HeartIcon onClick={likePost} className="btn" />
			)}
		</>
	);
};

export default Like;
