import { useState, useRef, useEffect } from "react";
import Product from "./Product";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const loaded = useRef(false);

  useEffect(() => {
    console.log("Call use effect");
    if (loaded.current === false) {
      fetch("/products.json")
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .then(() => (loaded.current = true));
    }
  });

  return (
    <>
      <h1>Product List</h1>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  );
}
