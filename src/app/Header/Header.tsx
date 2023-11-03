import React, { FunctionComponent } from 'react';
import Logo from './_components/Logo';
import PageNav from './_components/PageNav';

export type HeaderProps = {
	//no props
};

const Header: FunctionComponent<HeaderProps> = ({}) => {
	return (
		<header className="px-4 py-14 bg-transparent">
			<div className="max-w-[992px] m-auto flex items-center gap-2 justify-between">
				<Logo />
				<PageNav />
			</div>
		</header>
	);
};

export default Header;
