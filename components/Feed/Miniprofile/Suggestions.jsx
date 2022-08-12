import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

const Suggestions = () => {
	const [suggestions, setSuggestions] = useState([]);

	useEffect(() => {
		const suggestions = [...Array(5)].map((_, i) => ({
			firstName: faker.helpers.fake(`{{name.firstName}}`),
			lastName: faker.helpers.fake(`{{name.lastName}}`),
			profileImage: faker.image.avatar(),
			addresses: faker.address.buildingNumber(),
			company: faker.company.bs(),
			email: faker.phone.imei(),
			phone: faker.phone.number(),
			id: i,
		}));

		setSuggestions(suggestions);
	}, []);

	return (
		<div className="mt-4 ml-10">
			<div className="flex justify-between text-sm mb-5">
				<h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
				<button className="text-gray-600 font-semibold">See All</button>
			</div>

			{suggestions.map((profile) => (
				<div key={profile.id} className="flex items-center justify-between" >
					<img
						src={profile.profileImage}
						alt={`${profile.firstName} miniprofile logo`}
            className="w-10 h-10 rounded-full border p-[4px]"
					/>
          <div className="flex-1 ml-4 truncate ...">
            <h2 className="font-semibold text-sm">
              {profile.firstName}
            </h2>
            <h3 className="text-xs max-w-[250px] text-gray-400 truncate ...">Works at {profile.company}</h3>
          </div>
          <button className="font-semibold text-sm text-blue-400 pl-1">Follow</button>
				</div>
			))}
		</div>
	);
};

export default Suggestions;
