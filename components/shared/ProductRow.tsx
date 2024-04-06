import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import ProductCard from "./ProductCard";

import { products } from "@/constants";

const ProductRow = () => {
  return (
    <section
      className="
        flex
        justify-center
        
      "
    >
      <Carousel
        opts={{
          align: "start",
        }}
        className="max-w-full px-8 "
      >
        <CarouselContent>
          {products.map((product, index) => (
            <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 ">
              <div className="p-1 ">
                <ProductCard product={product} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default ProductRow;
