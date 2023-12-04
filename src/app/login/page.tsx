<<<<<<< HEAD
"use client";

import Button from "@/components/Button";
import "@/styles/p-login.scss";

const handleLogin = () => {
  alert("Login");
};

const handleCreateAccount = () => {
  alert("Criar conta");
};
=======
'use client'
import '@/styles/p-login.scss'
import Button from '@/components/Button'
import Link from 'next/link'

const handleLogin = () => {
  alert('login')
}
>>>>>>> 6e70ba69bb24f632b4469e24b26da38d125f7973

export default function Login() {
  return (
    <div className="p-login">
      <h1>Conectar-se</h1>
      <form>
        <label>
<<<<<<< HEAD
          <input type="text" name="login" placeholder="Login" />
        </label>
        <label>
          <input type="password" name="password" placeholder="Senha" />
        </label>
        <div className="actions">
          <Button text="Entrar" onClick={handleLogin} />
          <Button text="Criar conta" onClick={handleCreateAccount} />
        </div>
        <a href="#">Esqueci minha senha</a>
=======
          <input
            type='email'
            name='email'
            placeholder='E-mail'
            required
          />
        </label>
        <label>
          <input
            type='password'
            name='password'
            placeholder='Senha'
            required
          />
        </label>
        <div className='actions'>
          <Button
            text='Entrar'
            onClick={handleLogin}
          />
          <Button
            text='Criar conta'
            href='/cadastro'
          />
        </div>
        <Link href='#'>Esqueci minha senha</Link>
>>>>>>> 6e70ba69bb24f632b4469e24b26da38d125f7973
      </form>
    </div>
  );
}
