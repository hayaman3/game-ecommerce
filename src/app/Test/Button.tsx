import React, { FunctionComponent } from 'react';

export type ButtonProps = {
	//no props
};

const ButtonTest: FunctionComponent<ButtonProps> = ({}) => {
	return (
		<div className="relative inline-flex">
			<button
				className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
				type="button"
				// style="position: relative; overflow: hidden;"
			>
				Notifications
			</button>
			<span className="absolute rounded-full py-1 px-1 text-xs font-medium content-[''] leading-none grid place-items-center top-[4%] right-[2%] translate-x-2/4 -translate-y-2/4 bg-red-500 text-white border-2 border-white min-w-[24px] min-h-[24px]">
				5
			</span>
		</div>
	);
};

export default ButtonTest;
