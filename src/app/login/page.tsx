'use client'

import Button from '@/components/Button'
import '@/styles/p-login.scss'

const handleLogin = () => {
  alert('Login')
}

export default function Login() {
  return (
    <>
      <h1>Login</h1>
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
        <Button
          type='submit'
          text='Login'
          onClick={handleLogin}
        />
      </form>
    </>
  )
}
