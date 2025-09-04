import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import Bredcrums from "../Components/Bredcrums/Bredcrums";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import Description from "../Components/Description/Description";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Bredcrums product={product} />
      <ProductDisplay product={product} />
      <Description />
      <RelatedProducts />
    </div>
  );
};

export default Product;
