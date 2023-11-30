'use client'
import '@/styles/p-login.scss'
import Button from '@/components/Button'

const handleLogin = () => {
  alert('login')
}

const handleCreateAccount = () => {
  alert('Criar conta')
}

export default function Login() {
  return (
    <div className='p-login'>
      <h1>Conectar-se</h1>
      <form>
        <label>
          <input
            type='email'
            name='email'
            placeholder='e-mail'
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
    </div>
  )
}
