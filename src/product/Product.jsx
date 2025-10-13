export default function Product({ product }) {
  return (
    <div>
      <h1>Product</h1>
      <h3>
        {product.id} : {product.name}
      </h3>
      <p>Price : {product.price}</p>
    </div>
  );
}
