import React, { FunctionComponent } from 'react';
import ImageHandler from './ImageHandler';

export type ProductCardProps = {
	//no props
};

const ProductCard: FunctionComponent<ProductCardProps> = ({}) => {
	return (
		<div>
			<ImageHandler />
		</div>
	);
};

export default ProductCard;
