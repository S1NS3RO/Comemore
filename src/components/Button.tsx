import '@/styles/c-button.scss'

interface IButtonProps {
  type?: string
  onClick?: () => void
  href?: string
  text: string
}

const Button: React.FC<IButtonProps> = ({ type, onClick, href, text }) => {
  return (
    <>
      <a
        type={type}
        className='site-button'
        onClick={onClick}
        href={href}>
        {text}
      </a>
    </>
  )
}

export default Button
