import { Link, Outlet } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/24/outline';
import { useSetRecoilState } from 'recoil';

import { modalState } from '../App';

export default function Layout() {
  const setModal = useSetRecoilState(modalState);

  return (
    <>
      <nav className='flex justify-between content-center bg-blue-600 text-white shadow-md px-8 py-2'>
        <div className='flex items-center gap-2'>
          <Link className='text-4xl' to="/">Composite Care</Link>
          <HeartIcon className="h-8 w-8 text-rose-100"/>
        </div>

        <button className='place-self-center' onClick={() => setModal('login')}>Login</button>
      </nav>
      <Outlet />
    </>
  )
}
