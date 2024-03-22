import { Link } from 'react-router-dom';
import { Logo } from '../../assets/logo';
import { EnterIcon } from '@radix-ui/react-icons';
import { UserModal } from './user-modal';

const userLogged = true;

export function Header() {
  return (
    <header className='flex justify-between items-center px-12 py-6 shadow-md text-transparent'>
      <div>
        <Logo className='w-48'/>
      </div>

      <div>
        <Link to="#" className='uppercase font-bold text-green-500 hover:text-green-600 transition-all'>
          Cadastre um ponto de coleta
        </Link>
      </div>

      <div>
        {userLogged ? (
          <UserModal/>
        ) : (
          <Link to="/login">
            <EnterIcon className='w-6 h-6 hover:text-green-600 transition-all'/>
          </Link>
        )}
      </div>
    </header>
  );
}
