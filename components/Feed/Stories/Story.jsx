import React from "react";

const Story = ({ img, username }) => {
	return (
		<div className="hover:scale-110 transition transform duration-200 ease-out hover:brightness-75 md:filter-none ">
			<img
				className="h-14 w-14 rounded-full p-[1.5px] border-2 border-red-500 object-contain cursor-pointer"
				src={img}
				alt={`${username} story logo`}
			/>
			<p className="text-xs w-14 truncate text-center">{username}</p>
			<p></p>
		</div>
	);
};

export default Story;
