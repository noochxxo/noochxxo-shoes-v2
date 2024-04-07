import { NextResponse, NextRequest } from 'next/server'

 
export function middleware(request: NextRequest) {
  const isAuthenticated = true
  const isAdmin = true
 
  if (
      request.nextUrl.pathname.startsWith('/admin') ||
      // request.nextUrl.pathname.startsWith('/admin/user') ||
      request.nextUrl.pathname.startsWith('/dashboard')
    ) {
      if (isAuthenticated && isAdmin) {
        return NextResponse.next()
      }
      else {
        return NextResponse.redirect(new URL('/', request.url))
      }
      
    }

  if ( request.nextUrl.pathname.startsWith('/user') ) {
    if (isAuthenticated && isAdmin) {
        return NextResponse.redirect(new URL('/admin/user', request.url))
    }
    else if (isAuthenticated) {
      return NextResponse.next()
    } else {
      return NextResponse.redirect(new URL('/sign-up', request.url))
    }
    
  }

}
 
export const config = {
  matcher: ['/user', '/admin', '/admin/user', '/dashboard:path*'],
}