import React, { FunctionComponent } from 'react';

export type aboutProps = {
	//no props
};

const About: FunctionComponent<aboutProps> = ({}) => {
	return (
		<section>
			<span className="text-white">About</span>
		</section>
	);
};

export default About;
