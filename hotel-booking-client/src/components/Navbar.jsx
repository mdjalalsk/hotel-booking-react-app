import { NavLink } from 'react-router-dom';
import logo from '../../src/assets/sk-hotel-high-resolution-logo-transparent.png'
import useAuth from '../hooks/useAuth';
const Navbar = () => {
  const { user, logout } = useAuth();
  console.log(user);
    const links=<>
        <NavLink to='/' className={({ isActive }) =>
              isActive ? 'text-red-500  p-2 rounded-lg font-medium text-lg' : 'text-yellow-400 p-2 rounded-lg font-medium text-lg '
            }>Home</NavLink>
          <NavLink className={({ isActive }) =>
              isActive ? 'text-red-500 p-2 rounded-lg font-medium text-lg' : 'text-yellow-400 p-2 rounded-lg font-medium text-lg '
            } to='/rooms'>Rooms</NavLink>
         <NavLink className={({ isActive }) =>
              isActive ? 'text-red-500 p-2 rounded-lg font-medium text-lg' : 'text-yellow-400 p-2 rounded-lg font-medium text-lg '
            } to='/about'>About</NavLink>
         <NavLink className={({ isActive }) =>
              isActive ? 'text-red-500 p-2 rounded-lg font-medium text-lg' : 'text-yellow-400 p-2 rounded-lg font-medium text-lg '
            } to='/contact'>Contact</NavLink>
            {
              user&&(<NavLink className={({ isActive }) =>
              isActive ? 'text-red-500 p-2 rounded-lg font-medium text-lg' : 'text-yellow-400 p-2 rounded-lg font-medium text-lg '
            } to='/myBooking'>My Booking</NavLink>)
            }
       
     </>

    return (
        <div className="navbar bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-40 gap-y-2 bg-gradient-to-r from-cyan-500 to-blue-500 z-40 ">
        {links}
      </ul>
    </div>
    <a className='ml-1 md:ml-6' href='/'><img className='w-12 md:w-16' src={logo} alt="" /></a>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-x-1">
    {links}
    </ul>
  </div>
  <div className="navbar-end mr-5">
        <div className='flex gap-1'>
        <NavLink className="btn btn-outline btn-primary" to='/register'> Register</NavLink>
       {
        user ?
        <button  onClick={logout} className="btn btn-outline btn-primary"> Logout</button>
        : 
        <NavLink className="btn btn-outline btn-primary" to='/login'> Login</NavLink>


       }
        </div>
  </div>
</div>
    );
};

export default Navbar;