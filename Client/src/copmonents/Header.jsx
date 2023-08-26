import { Link } from "react-router-dom";
import { useState } from "react";


function Header() {

    const [navbar, setNavbar] = useState(false);


    return ( 
        <nav className="w-full opacity-100 bg-blue-950  shadow-lg top-0 fixed z-40">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 z-40">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        
                        <Link className="mb-0 text-lime-100" to="/">LOGO</Link>
                        
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
                            <li >
                            <Link className="mr-10 text-lime-100 font-medium hover:text-blue-300" to="/" onClick={() => {setNavbar(false)}}>Home</Link> 
                            </li>
                            <li >
                            <Link className="mr-10 text-lime-100 font-medium hover:text-blue-300" to="/photolibrary" onClick={() => {setNavbar(false)}}>All photos</Link>
                            </li>
                            <li>
                            <Link className=" font-medium text-lime-100 hover:text-blue-300 mr-8" to="/about" onClick={() => {setNavbar(false)}}>About</Link>
                            </li>
                            <button className=" relative inline-flex items-center justify-center p-0.5 mb-2  overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 hover:text-black focus:ring-1 focus:outline-none focus:ring-lime-200 ">
                            <span className="relative px-3 py-1.5 transition-all ease-in duration-75 bg-sky-950  rounded-md group-hover:bg-opacity-0">
                            Log In
                            </span>
                            </button>
                            <button className="ml-4 text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-1 focus:outline-none focus:ring-lime-200  font-medium rounded-lg text-sm px-3 py-2 text-center ">Register</button>
                            
                            
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
     );
}

export default Header;