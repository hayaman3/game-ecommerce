import React, { FunctionComponent } from 'react';
import Logo from './_components/Logo';
import PageNav from './_components/PageNav';

export type HeaderProps = {
	//no props
};

const Header: FunctionComponent<HeaderProps> = ({}) => {
	return (
		<header className="px-4 py-14 bg-slate-900 flex items-center flex-wrap gap-2">
			<Logo />
			<PageNav />
		</header>
	);
};

export default Header;
