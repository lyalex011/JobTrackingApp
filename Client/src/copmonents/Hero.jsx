import Features from "./Features";
import { Link, useNavigate } from "react-router-dom";

function Hero({user, setUser}) {

  const logout = () => {
    localStorage.removeItem("token");
    setUser({});
  };


  const backgroundImageUrl = "/public/images/unsplash.jpg";


  return (
    <div className="flex flex-col justify-around" >
      <div
        className="flex justify-center flex-col items-center h-screen  px-2"
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="flex justify-center items-center flex-row ">
        <div className="flex flex-col justify-center items-center md:items-start h-3/4 px-4">
        {!user ? <>
          <h1 className="my-4 text-3xl md:text-5xl text-white  font-bold leading-tight text-center md:text-left">
            Track your&nbsp;
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-lime-200">
              job application&nbsp;
            </span>
            process
          </h1>
            </> : <>
            <h1 className="my-4 text-3xl md:text-5xl text-white  font-bold leading-tight text-center md:text-left">
            Welcome to&nbsp;
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-lime-200">
              job application&nbsp;
            </span>
            tracker
          </h1>
            </>}
          
          <p className="leading-normal text-white md:text-2xl mb-8 text-center md:text-left">
            Keep your job search organized, all in one place.
          </p>
          <div className="flex justify-center sm:block">
            {!user ? <>
              <Link to="/register">
              <button className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-2 focus:outline-none focus:ring-lime-200  font-medium rounded-lg text-sm px-12 py-3 text-center mr-1 mb-2">
              Register
            </button>
            </Link>
            </> : <>
            <Link to="/dash">
              <button  className="text-gray-900  bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-2 focus:outline-none focus:ring-lime-200  font-medium rounded-lg text-sm px-12 py-3 text-center mr-1 mb-2">
              Dashboard
            </button>
            </Link>
            </>}
            {!user ? <>
              <Link to="/login">
              <button className="ml-4 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 hover:text-black focus:ring-2 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
              <span className="relative px-12 py-2.5 transition-all ease-in duration-75 bg-sky-950  rounded-md group-hover:bg-opacity-0">
                Log&nbsp;In
              </span>
            </button>
            </Link>
            </> : <>
            <Link onClick={logout}>
            <button className="ml-4 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 hover:text-black focus:ring-2 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
              <span className="relative px-12 py-2.5 transition-all ease-in duration-75 bg-sky-950  rounded-md group-hover:bg-opacity-0">
                Log&nbsp;Out
              </span>
            </button>
            </Link>
            </>}
            {/* <div className="flex flex-col items-center gap-2 justify-center pt-4 ">
              <p className="text-lime-100 opacity-60">Scroll down</p>
        <svg className="w-6 h-6  text-lime-100 opacity-60" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 12">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 7 4 4 4-4M1 1l4 4 4-4"/>
  </svg>
        </div> */}
          </div>
        </div>
        
          <img
            className="block w-auto h-2/6 xl:h-2/5 hidden  lg:block  shrink-0"
            src="../public/images/herobg.png"
            alt="bg-img"
          />
        
        </div>
        
      </div>

      <Features />
      
    </div>
  );
}

export default Hero;
