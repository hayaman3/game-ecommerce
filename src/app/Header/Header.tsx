import React, { FunctionComponent } from 'react';
import Logo from './_components/Logo';
import PageNav from './_components/PageNav';

export type HeaderProps = {
	//no props
};

const Header: FunctionComponent<HeaderProps> = ({}) => {
	return (
		<header>
			<Logo />
			<PageNav />
		</header>
	);
};

export default Header;
