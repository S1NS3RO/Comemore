'use client'
import '@/styles/p-login.scss'
import Button from '@/components/Button'
import Link from 'next/link'

const handleCreateAccount = () => {
  alert('Criar conta')
}

export default function Cadastro() {
  return (
    <div className='p-login'>
      <h1>Cadastre-se</h1>
      <form>
        <label>
          <input
            type='text'
            name='username'
            placeholder='Usuário'
            required
          />
        </label>
        <label>
          <input
            type='email'
            name='email'
            placeholder='E-mail'
            required
          />
        </label>
        <label>
          <input
            type='password'
            name='password'
            placeholder='Senha'
            required
          />
        </label>
        <div className='actions'>
          <Button
            text='Criar conta'
            onClick={handleCreateAccount}
          />
        </div>
        <Link href='/login'>Já tenho conta!</Link>
      </form>
    </div>
  )
}
