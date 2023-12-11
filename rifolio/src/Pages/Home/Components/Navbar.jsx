import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navlink = (
    <>
      <li>
        <NavLink to="https://www.linkedin.com/in/nasimrifat10/" target="_blank" className='font-medium'>Linkedin</NavLink>
      </li>
      <li>
        <NavLink to="https://github.com/nasimrifat101" target="_blank" className='font-medium'>GitHub</NavLink>
      </li>
      <li>
        <NavLink to="https://wa.link/u6xfx5" target="_blank" className='font-medium'>WhatsApp</NavLink>
      </li>
    </>
  );

  return (
    <div className="max-w-6xl mx-auto hidden lg:block ">
      <div className="navbar">
        <div className="navbar-start">
          <a className="text-4xl font-bold">RIFAT.</a>
        </div>
        <div className="navbar-end hidden lg:flex list-none space-x-20">
          {navlink}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
