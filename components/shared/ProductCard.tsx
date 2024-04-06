'use client'

import { useState } from "react";
import Image from "next/image";
import { Heart } from 'lucide-react';

import { Card, CardContent } from "../ui/card";
import { Badge } from "@/components/ui/badge"
import StarRating from "./StarRating";

const ProductCard = ({ product }: { product: ProductType }) => {

  const [productRating, setProductRating] = useState(0);

  return (
    <>
    <Card>
      <CardContent className="justify-center p-0 m-0 ">
          <Badge variant="secondary" 
            className="bg-accent hover:bg-accent absolute m-3"
          >
            <p
              className="text-secondary-foreground"
            >$20 off</p>
          </Badge>

          <Badge 
            className="absolute bottom-20 ml-48 bg-card rounded-full size-10 hover:bg-card hover:size-12 "
          ><Heart className="text-secondary hover:size-12" /></Badge>
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
      <StarRating maxRating={5} userRatingCount={product.userRatingCount} onChange={setProductRating} />
      <h2
        className="
          text-secondary-foreground
        "
      >{product.title}</h2>
      <div
        className="flex gap-3"
      >
        <p className="
          text-primary
          line-through
        ">{product.price}
        </p><span 
          className="
            text-accent
          "
        >{product.salePrice}</span>
      </div>
    </div>
    </>
  );
};

export default ProductCard;
