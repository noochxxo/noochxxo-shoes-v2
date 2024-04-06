import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="w-full md:absolute md:top-28">
      <div>
        <AspectRatio ratio={16 / 9}>
          <Image
            src="/images/hero.jpg"
            width={3499}
            height={5248}
            alt="Shoes"
            className="object-cover max-h-[800px]"
          />
          <div
            className="
              pl-3
              absolute
              bottom-0
            "
          >
            <h2
            className="
              text-secondary-foreground
              text-6xl
              sm:text-9xl
              font-extrabold
              xl:bottom-28
            "
          >
            Shoe Sale
          </h2>
          <Button
            className="
              hover:bg-primary
            "
          >
            Shop Now
          </Button>
          </div>
        </AspectRatio>
        
      </div>
    </section>
  );
};

export default Hero;
