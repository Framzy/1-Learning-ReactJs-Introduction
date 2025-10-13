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
    console.log("Call use effect");
    if (load) {
      fetch("/products.json")
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }
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
