import { Link } from "react-router-dom";
import { useState } from "react";

function Header({ setUser, username }) {
  const [navbar, setNavbar] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    setUser({});
    setNavbar(false)
  };

  return (
    <nav className="w-full opacity-100 bg-blue-950  shadow-lg top-0 fixed z-40">
      <div className="justify-between px-4 mx-auto lg:w-10/12 md:items-center md:flex md:px-4 z-40">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link className="mb-0 text-lime-100" to="/">
              <img className="w-5/12" src="/public/images/logo.png" alt="" />
            </Link>

            <div className="md:hidden z-40 ">
              <button
                className="p-2 text-lime-100 rounded-md outline-none focus:border-gray-400 focus:border "
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 z-40"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mx-4 mt-8 mb-3 md:block md:pb-0 md:mt-0 z-40 top-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center mt-2 space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li>
                <Link
                  className="mr-10 text-lime-100 font-medium hover:text-blue-300"
                  to="/"
                  onClick={() => {
                    setNavbar(false);
                  }}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  className=" font-medium text-lime-100 hover:text-blue-300 mr-8"
                  to="/about"
                  onClick={() => {
                    setNavbar(false);
                  }}
                >
                  FAQ
                </Link>
              </li>

              {username ? (
                <>
                  <li className="mr-4 text-blue-200 font-medium">
                    Welcome,&nbsp;{username}!
                  </li>
                  <li>
                    <Link
                      className="flex mr-4 text-lime-100 font-medium hover:text-blue-300"
                      to="/profile"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="inline-flex items-baseline self-center w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      &nbsp;Profile
                    </Link>
                  </li>
                  <li>
                    <Link onClick={logout} to="/">
                      <button className=" relative inline-flex items-center justify-center p-0.5 shrink-0  overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 hover:text-black focus:ring-1 focus:outline-none focus:ring-lime-200 ">
                        <span className="relative px-3 py-1.5 transition-all ease-in duration-75 bg-sky-950  rounded-md group-hover:bg-opacity-0">
                          Log&nbsp;Out
                        </span>
                      </button>
                    </Link>
                  </li>
                </>
              ) : (
                <div>
                  <Link to="/login" onClick={() => {
                    setNavbar(false);
                  }}>
                    <button className=" relative inline-flex items-center justify-center p-0.5   overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 hover:text-black focus:ring-1 focus:outline-none focus:ring-lime-200 ">
                      <span className="relative px-3 py-1.5 transition-all ease-in duration-75 bg-sky-950  rounded-md group-hover:bg-opacity-0">
                        Log In
                      </span>
                    </button>
                  </Link>
                  <Link to="/register" onClick={() => {
                    setNavbar(false);
                  }}>
                    <button className="ml-4 text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-1 focus:outline-none focus:ring-lime-200  font-medium rounded-lg text-sm px-3 py-2 text-center ">
                      Register
                    </button>
                  </Link>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
