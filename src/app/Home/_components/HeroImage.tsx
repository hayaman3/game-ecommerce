'use client';
import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import ProductCard from '@/_components/ProductCard';

const HeroImage = () => {
	return (
		<div className=" px-4 py-12">
			<TiltCard />
		</div>
	);
};

const TiltCard = () => {
	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const mouseXSpring = useSpring(x);
	const mouseYSpring = useSpring(y);

	const rotateX = useTransform(
		mouseYSpring,
		[-0.5, 0.5],
		['17.5deg', '-17.5deg']
	);
	const rotateY = useTransform(
		mouseXSpring,
		[-0.5, 0.5],
		['-17.5deg', '17.5deg']
	);

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const rect = (e.target as HTMLElement).getBoundingClientRect();

		const width = rect.width;
		const height = rect.height;

		const mouseX = e.clientX - rect.left;
		const mouseY = e.clientY - rect.top;

		const xPct = mouseX / width - 0.5;
		const yPct = mouseY / height - 0.5;

		x.set(xPct);
		y.set(yPct);
	};

	const handleMouseLeave = () => {
		x.set(0);
		y.set(0);
	};

	return (
		<motion.div
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
			style={{
				rotateY,
				rotateX,
				transformStyle: 'preserve-3d',
			}}
			className="relative h-96 w-72 rounded-xl bg-gradient-to-br from-dark-25 to-dark-100">
			<div
				style={{
					transform: 'translateZ(75px)',
					transformStyle: 'preserve-3d',
				}}
				className="absolute inset-4 rounded-xl overflow-hidden shadow-lg">
				<ProductCard />
			</div>
		</motion.div>
	);
};

export default HeroImage;

// import React, { FunctionComponent } from 'react';

// export type HeroImageProps = {
// 	//no props
// };

// const HeroImage: FunctionComponent<HeroImageProps> = ({}) => {
// 	return <>HeroImage</>;
// };

// export default HeroImage;
