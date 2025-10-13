import { useState, useEffect } from "react";
import Product from "./Product";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);

  function handleClick() {
    console.log("handle click");

    setLoad(true);
  }

  useEffect(() => {
    console.log("Call use effect with empty array []");
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("/products.json");
      const data = await response.json();
      setProducts(data);
    }

    if (load) {
      fetchProducts();
    }
    console.log("Call use effect");
  }, [load]);

  return (
    <>
      <h1>Product List</h1>
      <button onClick={handleClick}>Load Products</button>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  );
}
