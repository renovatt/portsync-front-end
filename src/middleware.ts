import { NextResponse, NextRequest } from 'next/server'

export default function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  const token = request.cookies.get('@access-token')?.value ?? ''
  const user = request.cookies.get('@user')?.value ?? ''

  const isPublicPath = path === '/' || path === '/signin'

  if (isPublicPath && token && user) {
    return NextResponse.redirect(new URL('/projects', request.nextUrl))
  }

  if (!isPublicPath && (!token || !user)) {
    return NextResponse.redirect(new URL('/signin', request.nextUrl))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/',
    '/signin/:path*',
    '/projects/:path*',
    '/create/:path*',
    '/edit/:path*',
  ],
}
