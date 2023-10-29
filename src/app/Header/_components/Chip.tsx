import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { Dispatch, FunctionComponent, SetStateAction } from 'react';

export type ChipProps = {
	text: string;
	selected: boolean;
	setSelected: Dispatch<SetStateAction<string>>;
};

const Chip: FunctionComponent<ChipProps> = ({
	text,
	selected,
	setSelected,
}) => {
	return (
		<Link
			href={`${text}`}
			onClick={() => setSelected(text)}
			className={`${
				selected
					? 'text-white'
					: 'text-slate-300 hover:text-slate-200 hover:bg-slate-700'
			} text-sm transition-colors px-2.5 py-0.5 rounded-md relative`}>
			<span className="relative z-10">{text}</span>
			{selected && (
				<motion.span
					layoutId="pill-tab"
					transition={{ type: 'spring', duration: 0.5 }}
					className="absolute inset-0 z-0 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md"></motion.span>
			)}
		</Link>
	);
};

export default Chip;
