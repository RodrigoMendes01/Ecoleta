import { Toaster } from 'react-hot-toast';
import { Router } from './routes';

export function App() {
  return (
    <>
      <Router/>
      <Toaster
        position='bottom-right'
      />
    </>
  );
}

