'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

import { navbarLinks } from '@/constants'

const  Navbar = () => {
  const pathname = usePathname()
  return (
    <nav
      className='
        hidden
        md:flex
        justify-around
        items-center
        gap-3
        fixed
        w-full
        h-20
        bg-background
        drop-shadow-2xl
        text-2xl
        rounded-b-3xl
      '
    >
      <Link
        href={'/'}
      >
        <h3
          className='
            text-secondary-foreground
          '
        >Noochxxo Shoes</h3>
      </Link>
      <div
        className='w-2/5'
      >
        <ul
          className='
            text-primary
            flex
            justify-around
          '
        >
         {
          navbarLinks.map((link) => {
            const active = pathname === link.route
            return (
              <li key={link.route}
                className={`link ${active ? 'text-4xl' : ''}`}
              >
                <Link href={link.route}>
                  {link.label}
                </Link>
              </li>
            )
          } )
         } 
        </ul>
      </div>
      <div>
        <SignedIn>
          <UserButton afterSignOutUrl='/' />
        </SignedIn>

        <SignedOut>
          <Link
            href={'/'}
            className='
              text-secondary-foreground
            '
          >
            Login/SignUp
          </Link>
        </SignedOut>

        {/* <MobileNav /> */}
      </div>
    </nav>
  )
}

export default Navbar