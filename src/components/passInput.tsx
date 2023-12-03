'use client'

import { useState } from 'react'
import { FaEye } from 'react-icons/fa'

const PassInput: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword)
  }

  return (
    <>
      <input
        type={showPassword ? 'text' : 'password'}
        name='password'
        placeholder='Senha'
        required
      />
      <label className='labelfaeye'>
        <input
          className='passcheck'
          type='checkbox'
          id='showPassword'
          onChange={togglePasswordVisibility}
        />
        <FaEye
          className='faeye'
          fill={showPassword ? 'var(--text-pink)' : 'gray'}
        />
      </label>
    </>
  )
}

export default PassInput
