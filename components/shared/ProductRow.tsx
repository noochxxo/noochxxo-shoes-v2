import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import ProductCard from "./ProductCard";

import { products } from "@/constants";
import Link from "next/link";

const ProductRow = ({ row }: { row: ProductRowType }) => {
  return (
    <section
      className="
        flex
        flex-col
        px-8
        my-3
      "
    >
      <div
        className="
          flex
          justify-between
        "
      >
        <div>
          <h2
            className="
          text-5xl
          text-secondary-foreground
          font-extrabold
        "
          >
            {row.title}
          </h2>
          <p
            className="
          text-xl
          text-primary
          font-bold
        "
          >
            {row.description}
          </p>
        </div>
        <Link href='/'
          className="
            text-secondary-foreground
            font-extrabold
          "
        >
          View All
        </Link>
      </div>
      <div
        className="
          flex
          justify-center
        "
      >
        <Carousel
          opts={{
            align: "start",
          }}
          className="max-w-full "
        >
          <CarouselContent>
            {products.map((product, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 py-3"
              >
                <div className="p-1 ">
                  <ProductCard product={product} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default ProductRow;
