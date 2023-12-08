import Main from "@/_components/Main";
import { useTry } from "@/_store/ProducStore";
import React, { FunctionComponent } from "react";

export type shopProps = {
  //no props
};

const Shop: FunctionComponent<shopProps> = ({}) => {
  return (
    <Main>
      <ProductList />
    </Main>
  );
};

export default Shop;

interface Product {
  id: number;
  name: string;
  price: number;
}

function ProductList() {
  const { products, setProducts } = useTry();

  const addProduct = () => {
    const newProduct: Product = {
      id: products.length + 1,
      name: `Product ${products.length + 1}`,
      price: Math.floor(Math.random() * 100) + 1,
    };

    setProducts([...products, newProduct]);
  };

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </div>
  );
}
