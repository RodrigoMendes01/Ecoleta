import { Link } from 'react-router-dom';
import { Input } from '@components/input';
import { useState } from 'react';
import { EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import { Button } from '@components/button';

export function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState<'password' | 'text'>('password');

  const handleChangePasswordVisibility = () => {
    setIsPasswordVisible(prev =>
      prev === 'password' ? 'text' : 'password',
    );
  };

  return (
    <>
      <header className='w-full flex flex-col items-center'>
        <h1 className="text-2xl font-bold text-gray-900 tracking-[-1px]">Entre em sua conta</h1>

        <p className='space-x-2 mt-4'>
          <span  className='text-gray-700'>Novo por aqui?</span>
          <Link to="/register" className='text-green-500 hover:text-green-700 hover:underline transition-all'>Crie uma conta</Link>
        </p>
      </header>

      <form action=""
        className='mt-6 w-full flex flex-col gap-4'
        onSubmit={() => {}}
      >
        <Input
          type='email'
          placeholder='E-mail'
          //{...register('email')}
          error={'errors.email?.message'}
        />

        <div className='relative'>
          <Input
            type={isPasswordVisible}
            placeholder='Senha'
            //{...register('email')}
            error={'errors.email?.message'}
          />

          <button
            type='button'
            onClick={handleChangePasswordVisibility}
            className='absolute top-4 right-4'>
            {isPasswordVisible === 'password' ? (
              <EyeOpenIcon className='w-5 h-5 text-gray-700'/>
            ) : (
              <EyeClosedIcon className='w-5 h-5 text-gray-700'/>
            ) }
          </button>
        </div>

        <Button
          type='submit'
          className='mt-4'
          isLoading={false}
        >
          Entrar
        </Button>
      </form>
    </>
  );
}
