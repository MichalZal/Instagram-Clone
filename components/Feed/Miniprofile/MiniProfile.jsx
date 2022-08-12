import React from "react";
import { useSession } from 'next-auth/react'

const MiniProfile = () => {
	const { data: session } = useSession()
	console.log(session)

	return (
		<div className="flex items-center justify-between mt-14 ml-10">
			<img
				src={session?.user?.image}
				alt={`$Michal Zal miniprofile logo`}
        className="rounded-full border p-2 w-16 h-16"
			/>

      <div className="flex-1 mx-4">
        <h2 className="font-bold">{session?.user?.username}</h2>
        <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
      </div>

      <button className="text-blue-400 text-sm font-semibold">Sign out</button>
		</div>
	);
};

export default MiniProfile;
