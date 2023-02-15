import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='navbar'>

     <div>
       <h1>AAVE</h1>
     </div>

      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Dashboard
      </NavLink>
      <NavLink
        to='/Assets'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Assets
      </NavLink>
      <NavLink
        to='/Stake'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Stake
      </NavLink>
      <NavLink
        to='/Market'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Market
      </NavLink>

      {/* <div><a href='#'><i class="fa-solid fa-folder"></i></a></div> */}
      
    </nav>
  );
};
export default Navbar;
