"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ShoppingCart,
  ShoppingBag,
  Heart,
  UserRound,
} from "lucide-react";
import { navbarLinks } from "@/constants";

const Navbar = () => {
  // const pathname = usePathname()
  return (
    <nav
      className="
        sticky
        flex
        justify-around
        items-center
        gap-1
        w-full
        h-32
        bg-background
        text-md
        font-extrabold
        bottom-bar
        max-md:fixed
        md:drop-shadow-lg
        md:rounded-none
        md:rounded-b-3xl
        md:text-2xl
        bg-gradient-to-r from-background via-purple-500 to-pink-500
      "
    >
      <Link href={"/"} className="hidden md:flex">
        <h3
          className="
            text-secondary-foreground
          "
        >
          Noochxxo Shoes
        </h3>
      </Link>
      <div
        className="
          grow
        "
      >
        <ul
          className="
            text-primary
            flex
            justify-around
          "
        >
          {navbarLinks.map((link) => {
            // const isActive = pathname === link.route
            return (
              <Link key={link.route} href={link.route} className={`text-md md:text-2xl`}>
                <li className={`flex flex-col items-center `}>
                  {link.label === "Shop" ? (
                    <ShoppingCart />
                  ) : link.label === "Bag" ? (
                    <ShoppingBag />
                  ) : (
                    <Heart />
                  )}

                  {link.label}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div>

        {/* <SignedOut>
          <Link
            href={"/"}
            className="
              flex
              flex-col
              items-center
              text-secondary-foreground
            "
          >
            <UserRound className="md:hidden" />
            <p>Login/Signup</p>
          </Link>
        </SignedOut> */}
      </div>
    </nav>
  );
};

export default Navbar;
