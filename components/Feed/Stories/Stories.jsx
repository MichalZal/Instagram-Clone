import React, { useEffect, useState, useCallback } from "react";
import { faker } from "@faker-js/faker";
import Story from "./Story";

const Stories = () => {

	useEffect(() => {
    const suggestion = [...Array(20)].map((_, i) => ({
      firstName: faker.helpers.fake(`{{name.firstName}}`),
      lastName: faker.helpers.fake(`{{name.lastName}}`),
      profileImage: faker.image.avatar(),
      addresses: faker.address.buildingNumber(),
      company: faker.company.bs(),
      email: faker.phone.imei(),
      phone: faker.phone.number(),
      id: i,
    }))

    setSuggestions(suggestion)
	}, []);

  const [suggestions, setSuggestions] = useState();

	return (
		<div className="flex space-x-2 p-6 bg-white mt-8 border border-gray-200 
		rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
			{!suggestions ? <p>Loading</p> : suggestions.map(suggestion => (
				<Story
					key={suggestion.id}
					img={suggestion.profileImage}
					username={suggestion.firstName}
				/>
			))}
		</div>
	);
};

export default Stories;
