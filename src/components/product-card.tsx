import React from "react";
import { FaPlus } from "react-icons/fa";
type ProductsProps = {
  productId: string;
  photo: string;
  name: string;
  price: string;
  stock: number;
  handler: () => void;
};
//const server = "dehdu";
const ProductCard = ({
  //productId,
  photo,
  name,
  price,
  //stock,
  handler,
}: ProductsProps) => {
  return (
    <div className="product-card">
      <img src={photo} alt={name}></img>
      <p>{name}</p>
      <span>Rs.{price}</span>
      <div>
        <button onClick={()=>handler()}>
          <FaPlus />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
