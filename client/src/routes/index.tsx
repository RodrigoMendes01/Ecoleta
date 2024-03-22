import { Routes, Route, BrowserRouter } from 'react-router-dom';
//import { AuthGuard } from './auth-guard';
import { AuthLayout } from '../views/layouts/public/auth-layout';

/* PUBLIC PAGES */
import { Login } from '../views/pages/public/login';
import { Register } from '../views/pages/public/register';
import { Home } from '../views/pages/public/home';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<AuthGuard isPrivate={false}/>}> */}
        <Route path='/' element={<Home/>}/>
        <Route element={<AuthLayout/>}>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Route>
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}
