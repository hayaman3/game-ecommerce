import React, { FunctionComponent } from 'react';

export type LogoProps = {
	//no props
};

const Logo: FunctionComponent<LogoProps> = ({}) => {
	return (
		<>
			<span className="text-white">Logo</span>
		</>
	);
};

export default Logo;
