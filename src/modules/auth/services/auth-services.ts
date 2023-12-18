import { cookies } from 'next/headers'
import * as jose from 'jose'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Tempo de duração da sessão
const logout: string = '30d'

async function openSessionToken(token: string) {
  const secret = new TextEncoder().encode(process.env.AUTH_SECRET)
  const { payload } = await jose.jwtVerify(token, secret)

  return payload
}

async function createSessionToken(payload = {}) {
  const secret = new TextEncoder().encode(process.env.AUTH_SECRET)
  const session = await new jose.SignJWT(payload)
    .setProtectedHeader({
      alg: 'HS256'
    })
    .setExpirationTime(logout)
    .sign(secret)
  const { exp } = await openSessionToken(session)

  cookies().set('session', session, {
    expires: (exp as number) * 1000,
    path: '/',
    httpOnly: false
  })
}

async function isSessionValid() {
  const sessionCookie = cookies().get('session')
  if (sessionCookie) {
    const { value } = sessionCookie
    const { exp } = await openSessionToken(value)
    const currentDate = new Date().getTime()

    return (exp as number) * 1000 > currentDate // retorna TRUE se (exp for maior que currentDate)
  }

  return false
}

// Estou tentando obter os dados do usuário logado
async function dataSession() {
  if (await isSessionValid()) {
    const userData = {
      name: 'Douglas',
      email: 'douglas@teste.com'
    } // Obter os dados do usuário logado nesta variável

    return userData
  }

  return null
}

function destroySession() {
  cookies().delete('session')
}

const AuthService = {
  openSessionToken,
  createSessionToken,
  isSessionValid,
  dataSession,
  destroySession
}

export default AuthService
