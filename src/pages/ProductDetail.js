import { useParams } from "react-router-dom";
import React from "react";

function ProductDetail() {
  const params = useParams();
  return (
    <section>
      <div>ProductDetail</div>
      <p>{params.productId}</p>
    </section>
  );
}

export default ProductDetail;
