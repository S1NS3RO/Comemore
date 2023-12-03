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
      password: hashPassword
    }
  })

  redirect('/login')
}

async function login(formData: FormData) {
  'use server'

  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const user = await prisma.user.findFirst({
    where: {
      email
    }
  })

  if (user) {
    const isMatch = await bcrypt.compare(password, user.password)
    if (isMatch) {
      redirect('/')
    } else {
      console.log('Senha incorreta')
    }
  } else {
    console.log('Usuário não existe')
  }
}

const AuthActions = {
  createAccount,
  login
}

export default AuthActions
