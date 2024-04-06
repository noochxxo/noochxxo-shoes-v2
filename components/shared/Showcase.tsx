import React from "react";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import { products } from "@/constants";
import { Badge } from "../ui/badge";
import Link from "next/link";

const Showcase = () => {
  return (
    <section
      className="mx-8 overflow-hidden max-w-full grid grid-rows-3 md:grid-cols-6 md:grid-rows-2 gap-4 "
    >
      {products.slice(0, 3).map((product, idx) => {
        return (
          <Link
            key={idx}
            href={`${product.urlBase}${product.id}`}
            className={`overflow-hidden rounded-lg ${idx === 0 ? 'md:col-span-4 md:row-span-2' : 'md:col-span-2 md:row-span-1'}`}
          >
            <div  className={``}>
            <AspectRatio ratio={16 / 9} >
            <Image
              src="/images/hero.jpg"
              width={3499}
              height={5248}
              alt="Shoes"
              className='object-cover rounded-lg'
            />
            
          </AspectRatio>
          <Badge
              className="relative bottom-6 left-6"
            >{product.title} {product.salePrice}</Badge>
          </div>
          </Link>
        );
      })}
    </section>
  );
};

export default Showcase;
