import { PrismaClient } from '@prisma/client'
import { redirect } from 'next/navigation'
import * as bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function createAccount(formData: FormData) {
  'use server'

  const name = formData.get('username') as string
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const hashPassword = await bcrypt.hash(password, 10)

  await prisma.user.create({
    data: {
      name,
      email,
      password: ''
    }
  })

  redirect('/login')
}

const AuthActions = {
  createAccount
}

export default AuthActions
