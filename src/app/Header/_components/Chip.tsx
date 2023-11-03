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
		<li>
			<Link
				href={text === 'Home' ? '/' : `${text}`}
				onClick={() => setSelected(text)}
				className={`${
					selected
						? 'text-white'
						: 'text-gray-300 hover:text-gray-200 hover:bg-gray-700'
				} text-base transition-colors px-3 py-1 rounded-md relative`}>
				<span className="relative z-10">{text}</span>
				{selected && (
					<motion.span
						layoutId="pill-tab"
						transition={{ type: 'spring', duration: 0.5 }}
						className="absolute inset-0 z-0 bg-gradient-to-r from-gray-700 to-gray-600 rounded-md"></motion.span>
				)}
			</Link>
		</li>
	);
};

export default Chip;
