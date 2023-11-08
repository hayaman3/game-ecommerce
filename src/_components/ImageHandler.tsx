import React, { FunctionComponent } from 'react';
import Image from 'next/image';

export type ImageHandlerProps = {
	//no props
};

const ImageHandler: FunctionComponent<ImageHandlerProps> = ({}) => {
	return (
		<Image
			src="/test.jpg"
			layout="fill"
			objectFit="cover"
			alt="card"
		/>
	);
};

export default ImageHandler;
