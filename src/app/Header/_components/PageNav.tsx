'use client';
import { motion } from 'framer-motion';
import { Dispatch, SetStateAction, useState } from 'react';
import Chip from './Chip';

const tabs = ['Home', 'Shop', 'About'];

const PageNav = () => {
	const [selected, setSelected] = useState(tabs[0]);

	return (
		<div className="px-4 py-14 bg-slate-900 flex items-center flex-wrap gap-2">
			{tabs.map(tab => (
				<Chip
					text={tab}
					selected={selected === tab}
					setSelected={setSelected}
					key={tab}
				/>
			))}
		</div>
	);
};

export default PageNav;
