import Features from "./Features";

function Hero() {

  const backgroundImageUrl = "../../public/images/unsplash.jpg";


  return (
    <div className=" block h-screen shrink-0 ">
      <div
        className="flex justify-center flex-row h-3/4 pt-12 pb-12 shrink-0 mt-16  "
        style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      >
        <div className="flex flex-col justify-center items-center md:items-start px-4">
          <h1 className="my-4 text-3xl md:text-5xl text-white  font-bold leading-tight text-center md:text-left">
            Track your&nbsp;
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-lime-200">
              job aplication&nbsp;
            </span>
            process
          </h1>
          <p className="leading-normal text-white md:text-2xl mb-8 text-center md:text-left">
            Keep your job search organized, all in one place.
          </p>
          <div className="flex justify-center sm:block">
            <button className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-2 focus:outline-none focus:ring-lime-200  font-medium rounded-lg text-sm px-12 py-3 text-center mr-1 mb-2">
              Register
            </button>
            <button className="ml-4 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 hover:text-black focus:ring-2 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
              <span className="relative px-12 py-2.5 transition-all ease-in duration-75 bg-sky-950  rounded-md group-hover:bg-opacity-0">
                Log In
              </span>
            </button>
          </div>
        </div>
        <div className="block  shrink-0 mt-12">
          <img
            className="block w-auto h-4/6 xl:h-4/5 hidden mt-12 lg:block  shrink-0"
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
