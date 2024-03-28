import { GitHubLogoIcon, LinkedInLogoIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { HomeBackground } from '@assets/home-background';
import { Header } from '@components/header';
import { Link } from 'react-router-dom';

export function Home () {
  return (
    <div className="w-full min-h-screen">
      <Header/>

      <main className='h-full w-full flex max-md:flex-col'>
        <aside className='h-full w-1/2 m-auto flex flex-col items-center justify-center p-12 gap-4 max-md:w-full'>
          <h1 className='bg-gradient-to-r from-blue-600 text-transparent bg-clip-text via-green-500 to-indigo-400 font-bold text-5xl'>Seu marketplace de coleta de resíduos</h1>
          <span className='text-gray-400 font-semibold text-xl'>Ajudamos pessoas a encontrar pontos de coleta de forma eficiente</span>


          <form action="" className='mt-8 w-full'>
            <div className='flex'>
              <button
                type="submit"
                className="flex items-center rounded-s-xl justify-center p-4 cursor-pointer bg-green-600 hover:bg-green-800 transition-all shadow-lg"
              >
                <MagnifyingGlassIcon className="w-8 h-8 text-white" />
              </button>
              <input
                type="search"
                id="default-search"
                className="w-full px-6 text-white rounded-e-xl text-lg bg-green-200 outline-none placeholder-white placeholder-xl shadow-lg"
                placeholder="Pesquise pontos de coleta"
                required
              />
            </div>
          </form>
        </aside>

        <article className='h-full w-1/2 flex items-center justify-center max-md:w-full'>
          <HomeBackground className='w-[878px] h-[660px]'/>
        </article>
      </main>

      <footer className='border-t-[2px] border-gray-100 flex flex-col items-center justify-center p-12'>
        <div className='flex gap-8'>
          <Link to="https://github.com/RodrigoMendes01" target='_blank'>
            <GitHubLogoIcon className='w-8 h-8 text-green-600'/>
          </Link>
          <Link to="#" target='_blank'>
            <LinkedInLogoIcon className='w-8 h-8 text-green-600'/>
          </Link>
        </div>

        <div className='mt-8'>
          <p className='uppercase font-semibold text-gray-500'>Ecoleta - <span className='text-green-600'>&copy;</span> 2024</p>
        </div>
      </footer>
    </div>
  );
}
