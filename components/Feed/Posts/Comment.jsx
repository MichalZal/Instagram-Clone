import React from "react";
import Moment from 'react-moment'

const Comment = ({ image, username, comment, timestamp }) => {
	return (
		<div className="flex items-center space-x-2 mb-3">
			<img
				src={image}
				alt={`${username} logo in comments`}
				className="h-7 rounded-full"
			/>
			<p className="text-sm flex-1">
				<span className="font-semibold">{username}</span>{" "}
				{comment}
			</p>

      <Moment className="pr-5 text-sm text-gray-500" fromNow>
        {timestamp ? timestamp.toDate() : 'Few seconds ago'}
      </Moment>
		</div>
	);
};

export default Comment;
