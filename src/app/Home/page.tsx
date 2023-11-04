import React, { FunctionComponent } from 'react';
import HeroImage from './_components/HeroImage';

export type homeProps = {
	//no props
};

const Home: FunctionComponent<homeProps> = ({}) => {
	return (
		<main>
			{/* <TextBlock/> */}
			<HeroImage />
		</main>
	);
};

export default Home;
