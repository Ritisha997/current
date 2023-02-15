import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import StyleNavbar from '../components/StyleNavbar';
const SharedLayout = () => {
  return (
    <>
     
      {/* <Navbar/> */}
      <Outlet />
    </>
  );
};
export default SharedLayout;
