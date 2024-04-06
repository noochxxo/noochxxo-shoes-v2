import React from "react";
import Image from "next/image";

import { Card, CardContent } from "../ui/card";

const ProductCard = ({ product }: { product: ProductType }) => {
  return (
    <>
    <Card>
      <CardContent className="justify-center p-0 m-0 ">
        
          <Image
            src="/images/hero.jpg"
            width={3499}
            height={5248}
            alt="Shoes"
            className="object-cover rounded-lg"
          />
      </CardContent>
    </Card>
    <div
      className="
        flex
        flex-col
      "
    >
      <h2>{product.title}</h2>
      <div>
        <p>{product.price}<span>{product.salePrice}</span></p>
      </div>
    </div>
    </>
  );
};

export default ProductCard;
