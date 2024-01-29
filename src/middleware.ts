import { NextRequest, NextResponse } from 'next/server'
import AuthService from './modules/auth/services/auth-services'

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)'
}

// Lista de rotas que não exigem login
const publicRoutes = ['/', '/login', '/cadastro']

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname
  const session = await AuthService.isSessionValid()

  if (publicRoutes.includes(pathname)) {
    return NextResponse.next()
  }

  if (session) {
    return NextResponse.next()
  } else {
    return NextResponse.next() // Permite passagem sem login
    const isAPIRoute = pathname.startsWith('/api/')
    if (isAPIRoute) {
      return NextResponse.json({ message: 'Não autorizado' }, { status: 401 })
    }
    return NextResponse.redirect(new URL('/login', req.url))
  }
}
