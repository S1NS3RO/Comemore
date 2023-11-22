import '@/styles/c-header.scss'

export default function Header() {
  return (
    <header>
      <div className='header-container'>
        <div className="logo">Comemore</div>
        <nav>
          <ul>
            <li>Home</li>
            <li>Login</li>
            <li>Comprar</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
