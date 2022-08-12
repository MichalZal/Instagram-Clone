import React from "react";
import Posts from "./Posts/Posts";
import Stories from "./Stories/Stories";
import MiniProfile from "./Miniprofile/MiniProfile";
import Suggestions from "./Miniprofile/Suggestions";
import { useSession } from "next-auth/react";

const Feed = () => {
	const { data: session } = useSession();

	return (
		<main
			className={`grid grid-cols-1 max-w-xl 
     lg:grid-cols-5 lg:max-w-4xl mx-auto ${
				!session && "!grid-cols-1 !max-w-3xl"
			}`}
		>
			<section className="col-span-3">
				<Stories />
				<Posts />
			</section>
			{session && (
				<section className="hidden lg:inline-grid col-span-2">
					<div className="fixed top-20">
						<MiniProfile />
						<Suggestions />
					</div>
				</section>
			)}
		</main>
	);
};

export default Feed;
