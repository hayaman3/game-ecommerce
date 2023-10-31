'use client';
import { motion } from 'framer-motion';
import { Dispatch, SetStateAction, useState } from 'react';
import Chip from './Chip';

const tabs = ['Home', 'Shop', 'About'];

const PageNav = () => {
	const [selected, setSelected] = useState(tabs[0]);

	return (
		<ul className="flex gap-2">
			{tabs.map(tab => (
				<Chip
					text={tab}
					selected={selected === tab}
					setSelected={setSelected}
					key={tab}
				/>
			))}
		</ul>
	);
};

export default PageNav;
