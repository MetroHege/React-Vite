import {Link, Outlet} from 'react-router-dom';
import {useUserContext} from '../hooks/ContextHooks';

const Layout = () => {
  const {user, handleAutoLogin} = useUserContext();

  if (!user) {
    handleAutoLogin();
  }

  return (
    <>
      <header>
        <h1>My app</h1>
        <nav>
          <ul className="flex justify-end bg-slate-950">
            <li>
              <Link className='block text-slate-200 text-center p-4 hover:bg-slate-900' to="/">Home</Link>
            </li>
            {user ? (
            <>
            <li>
              <Link className='block text-slate-200 text-center p-4 hover:bg-slate-900' to="/profile">Profile</Link>
            </li>
            <li>
              <Link className='block text-slate-200 text-center p-4 hover:bg-slate-900' to="/upload">Upload</Link>
            </li>
            <li>
              <Link className='block text-slate-200 text-center p-4 hover:bg-slate-900' to="/logout">Logout</Link>
            </li>
            </>
           ) : (
            <li>
              <Link className='block text-slate-200 text-center p-4 hover:bg-slate-900' to="/login">Login</Link>
            </li>
          )}
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Copyright 2024 - NN</p>
      </footer>
    </>
  );
};

export default Layout;
