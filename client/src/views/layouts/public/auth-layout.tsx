import { Outlet } from 'react-router-dom';
import { HomeBackground } from '../../../assets/home-background';
import { Logo } from '../../../assets/logo';

export function AuthLayout() {
  return (
    <div className="w-full min-h-screen bg-main-100 flex">
      <div className="w-1/2 flex flex-col items-center justify-center">
        <div>
          <Logo className='w-24 h-24'/>
        </div>

        <div>
          <Outlet/>
        </div>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <div className='bg-green-100 py-24 rounded-xl relative'>
          <HomeBackground className='w-[578px] h-[660px]'/>

          <div className='absolute w-full flex flex-col items-center top-0'>
            <Logo className='w-28 h-28'/>
            <span className='text-base font-medium text-white'>Encontre aqui ou cadastre pontos de coleta para materiais recicláveis</span>
          </div>
        </div>
      </div>
    </div>
  );
}
