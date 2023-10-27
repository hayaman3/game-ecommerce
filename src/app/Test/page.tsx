import React, { FunctionComponent } from 'react';

export type pageProps = {
	//no props
};

const RawgAPI = async () => {
	const response = await fetch(
		// `https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&dates=2019-01-01,2019-12-31&ordering=-added`
		// `https://api.rawg.io/api/platforms?key=${process.env.RAWG_API_KEY}`
		`https://api.rawg.io/api/stores?key=${process.env.RAWG_API_KEY}`
	);
	if (response.ok) {
		return response.json();
	}
	throw new Error('');
};

// console.log(process.env.RAWG_API_KEY);
// console.log('TEST');
RawgAPI().then(console.log).catch(console.log);

const page: FunctionComponent<pageProps> = ({}) => {
	return (
		<div>
			<h1>TEST</h1>
			<span>{}</span>
		</div>
	);
};

export default page;
// https://api.rawg.io/api/stores?key${process.env.RAWG_API_KEY}
