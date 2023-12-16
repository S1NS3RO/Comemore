import AuthService from '@/modules/auth/services/auth-services'

export default async function Painel() {
  const isValid = await AuthService.isSessionValid()
  const dataSession = await AuthService.dataSession()

  return (
    <div className='p-painel'>
      {isValid ? (
        <div>Bem-vindo {dataSession?.name}!</div>
      ) : (
        <div>Não logado</div>
      )}
    </div>
  )
}
