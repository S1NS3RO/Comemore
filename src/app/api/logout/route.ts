import AuthService from '@/modules/auth/services/auth-services'
import { NextRequest, NextResponse } from 'next/server'

export function GET(req: NextRequest) {
  AuthService.destroySession()

  return NextResponse.redirect(new URL('/login/', req.url))
}
