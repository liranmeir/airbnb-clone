import { useContext, useState } from 'react';
import { UserContext } from '../UserContext';
import { Link, Navigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function AccountPage() {
  const [redirect, setRedirect] = useState(null);
  const { subpage } = useParams();
  const { user, ready, setUser } = useContext(UserContext);

  async function logout() {
    await axios.post('/logout');
    setUser(null);
    setRedirect('/');
  }

  if (!ready) {
    return <div>Loading...</div>;
  }

  if (ready && !user && !redirect) {
    return <Navigate to='/login' />;
  }
  console.log(subpage);
  function linkClasses(type = null) {
    let classes = 'py-2 px-6';
    if (type === subpage || (subpage === undefined && type === 'profile')) {
      classes += ' bg-primary text-white rounded-full';
    }
    return classes;
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }
  return (
    <div>
      <nav className='w-full flex justify-center mt-8 gap-2'>
        <Link className={linkClasses('profile')} to={'/account'}>
          My Profile
        </Link>
        <Link className={linkClasses('bookings')} to={'/account/bookings'}>
          My Bookings
        </Link>
        <Link className={linkClasses('places')} to={'/account/places'}>
          My accommodations
        </Link>
      </nav>
      {subpage === 'profile' && (
        <div className='w-full flex justify-center mt-8 gap-2 mb-8'>
          Logged in as {user.name} ({user.email})<br />
          <button className='primary max-w-sm mt-2' onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
