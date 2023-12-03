import '@/styles/p-login.scss'
import '@/styles/c-button.scss'
import Button from '@/components/Button'
import PassInput from '@/components/passInput'
import Link from 'next/link'
import AuthActions from '@/modules/auth/actions/auth-actions'

export default function Login() {
  return (
    <div className='p-login'>
      <h1>Conectar-se</h1>
      <form action={AuthActions.login}>
        <label>
          <input
            type='email'
            name='email'
            placeholder='E-mail'
            required
          />
        </label>
        <label>
          <PassInput />
        </label>
        <div className='alerts'>email ou senha inválidos</div>
        <div className='actions'>
          <button
            type='submit'
            className='site-button'>
            Entrar
          </button>
          <Button
            text='Criar conta'
            href='/cadastro'
          />
        </div>
        <Link href='#'>Esqueci minha senha</Link>
      </form>
    </div>
  )
}
