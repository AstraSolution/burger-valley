import { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);


  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 font-primary bg-black duration-300">
      <div className="w-full px-1 md:px-7 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex items-center justify-between lg:w-auto lg:static lg:block lg:justify-start">

          {/* Logo Section Start */}
          <div className='flex items-center gap-4 mr-5'>
            {/* <img className='w-16 dark:block hidden duration-300' src={logoWhite} alt="" />
                        <img className='w-16 dark:hidden block duration-300' src={logoBlack} alt="" /> */}
            <a
              className="text-xl xl:text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white duration-300"
              href="/"
            >
              Burger Valley
            </a>
          </div>
          {/* Logo Section End */}

          {/* Navbar Button Section Start */}
          <button
            className="text-white duration-300 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <details>
              <summary>

              </summary>
            </details>
          </button>
          {/* Navbar Button Section End */}
          
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? "flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <div className='w-full flex justify-between items-center mt-5 lg:mt-0 mb-2 lg:mb-0'>

            {/* Nav Links And Routes Section Start */}
            <div>
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto gap-3 xl:gap-5">
                <li className=" px-1 xl:px-3 py-2 flex items-center text-sm xl:text-base uppercase font-semibold  text-white duration-300 hover:opacity-75">
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-[#FF9D00]" : ""
                    }
                  >
                    HOME
                  </NavLink>
                </li>
                <li className=" px-1 xl:px-3 py-2 flex items-center text-sm xl:text-base uppercase font-semibold text-white duration-300 hover:opacity-75">
                  <NavLink
                    to="/contact-us"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-[#FF9D00]" : ""
                    }
                  >
                    CONTACT US
                  </NavLink>
                </li>
                <li className=" px-1 xl:px-3 py-2 flex items-center text-sm xl:text-base uppercase font-semibold  text-white duration-300 hover:opacity-75">
                  <NavLink
                    to="/about-us"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-[#FF9D00]" : ""
                    }
                  >
                    ABOUT US
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* Nav Links And Routes Section End */}

            {/* User Section Start */}
            <div >
              <ul className=" flex lg:items-center justify-center items-end flex-col lg:flex-row list-none lg:ml-auto gap-3 xl:gap-5">

                <li className=" px-1 xl:px-3 py-2 flex items-center text-sm xl:text-base uppercase font-semibold  text-white duration-300 hover:opacity-75">
                  <NavLink
                    to="login"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-[#FF9D00]" : ""
                    }
                  >
                    LOGIN
                  </NavLink>
                </li>
                <a className=" lg:my-1 xl:mx-3 flex items-center text-sm xl:text-base uppercase font-semibold  text-white duration-300 hover:opacity-75 border-2 border-[#FF9D00] rounded-md">
                  <NavLink
                    to="/register"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-[#FF9D00]" : ""
                    }
                  >
                    <p className='flex items-center mx-2 xl:mx-3 my-1 xl:my-2'>REGISTER</p>
                  </NavLink>
                </a>
              </ul>
            </div>
            {/* User Section End */}

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;