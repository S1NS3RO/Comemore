import { cookies } from 'next/headers'
import * as jose from 'jose'

async function openSessionToken(token: string) {
  const { payload } = await jose.jwtVerify(token, secret)

  return payload
}

async function createSessionToken(payload = {}) {
  const secret = new TextEncoder().encode(process.env.AUTH_SECRET)
  const session = await new jose.SignJWT(payload)
    .setProtectedHeader({
      alg: 'HS256'
    })
    .setExpirationTime('20s')
    .sign(secret)
  const { exp } = await openSessionToken(session)

  cookies().set('session', session, {
    expires: (exp as number) * 1000,
    path: '/',
    httpOnly: true
  })
}
