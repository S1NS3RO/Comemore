import '@/styles/c-button.scss'

interface IButtonProps {
  onClick?: () => void
  href?: string
  text: string
}

const Button: React.FC<IButtonProps> = ({ onClick, href, text }) => {
  return (
    <>
      <a
        className='site-button'
        onClick={onClick}
        href={href}>
        {text}
      </a>
    </>
  )
}

export default Button
