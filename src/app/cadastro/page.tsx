import '@/styles/p-login.scss'
import '@/styles/c-button.scss'
import Link from 'next/link'
import AuthActions from '@/modules/auth/actions/auth-actions'
import PassInput from '@/components/passInput'

export default function Cadastro() {
  return (
    <div className='p-login'>
      <h1>Cadastre-se</h1>
      <form action={AuthActions.createAccount}>
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
          <PassInput />
        </label>
        <div className='actions'>
          <button
            type='submit'
            className='site-button'>
            Criar conta
          </button>
        </div>
        <Link href='/login'>Já tenho conta!</Link>
      </form>
    </div>
  )
}
