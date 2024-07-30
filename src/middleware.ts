import { NextResponse, NextRequest } from 'next/server'

export default function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  const token = request.cookies.get('@access-token')?.value ?? ''
  const apiKey = request.cookies.get('@api-key')?.value ?? ''

  const isPublicPath = path === '/' || path === '/signin'

  if (isPublicPath && token && apiKey) {
    return NextResponse.redirect(new URL('/projects', request.nextUrl))
  }

  if (!isPublicPath && (!token || !apiKey)) {
    return NextResponse.redirect(new URL('/signin', request.nextUrl))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/',
    '/signin/:path*',
    '/projects/:path*',
    '/stacks/:path*',
    '/refresh-key/:path*',
  ],
}
