'use client'

import Button from '@/components/Button'
import '@/styles/p-login.scss'

const handleLogin = () => {
  alert('Login')
}

const handleCreateAccount = () => {
  alert('Criar conta')
}

export default function Login() {
  return (
    <>
      <h1>Conectar-se</h1>
      <form>
        <label>
          <input
            type='text'
            name='login'
            placeholder='Login'
          />
        </label>
        <label>
          <input
            type='password'
            name='password'
            placeholder='Senha'
          />
        </label>
        <div className='actions'>
          <Button
            text='Entrar'
            onClick={handleLogin}
          />
          <Button
            text='Criar conta'
            onClick={handleCreateAccount}
          />
        </div>
        <a href='#'>Esqueci minha senha</a>
      </form>
    </>
  )
}
