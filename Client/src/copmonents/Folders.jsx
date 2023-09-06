import {  Link } from "react-router-dom";

function Folders({user}) {
  return (
    <div className="flex flex-col items-center">
      <div>
        <p className=" mt-8 mb-4 text-3xl text-gray-700 font-bold">Choose your folder</p>
      </div>

      <div className="flex flex-row justify-center items-center flex-wrap">
        <div>
          <div className="relative inline-flex items-center justify-center p-2 m-5 overflow-hidden max-w-sm bg-gradient-to-br from-purple-300 to-rose-200 border rounded-2xl shadow hover:-translate-y-3 transition-transform duration-300">
          <Link to={`../wishlist/${user}`}><span className=" flex flex-col items-center justify-between relative  transition-all ease-in duration-75 bg-white shadow rounded-xl group-hover:bg-opacity-0">
              
                <img
                  className="my-3 rounded-t-lg"
                  src="/wishlist.jpg"
                  alt="wishlist"
                />
              
              <div className="p-5 mt-2">
                
                  <h5 className="mb-6 text-4xl font-bold  text-rose-400 ">
                    Wishlist
                  </h5>
                
              </div>
            </span>
            </Link>
          </div>
        </div>
        <div>
          <div className="relative inline-flex items-center justify-center p-2 m-5 overflow-hidden max-w-sm bg-gradient-to-br from-teal-300 to-lime-300 border rounded-2xl shadow hover:-translate-y-3 transition-transform duration-300">
          <Link to={`../index/${user}`}> <span className=" flex flex-col items-center justify-between relative  transition-all ease-in duration-75 bg-white shadow rounded-xl group-hover:bg-opacity-0">
              
                <img
                  className="rounded-t-lg"
                  src="/all.jpg"
                  alt="all"
                />
              
              <div className="p-5 mt-3">
                
                <h5 className="mb-6 text-4xl font-bold tracking-tight text-emerald-300 ">
                    All applications
                  </h5>
                
                  
                
              </div>
            </span>
            </Link>
          </div>
        </div>
        <div>
          <div className="relative inline-flex items-center justify-center p-2 m-5 overflow-hidden max-w-sm bg-gradient-to-br from-teal-300 to-sky-200 border rounded-2xl shadow hover:-translate-y-3 transition-transform duration-300">
          <Link to={`../interview/${user}`}> <span className=" flex flex-col items-center justify-between relative  transition-all ease-in duration-75 bg-white shadow rounded-xl group-hover:bg-opacity-0">
              
                <img
                  className="h-1/2 object-fill rounded-t-lg"
                  src="/int.jpg"
                  alt="interview"
                />
            
              <div className="p-5 mt-4">
                
                  <h5 className="mb-6 text-4xl font-bold tracking-tight text-sky-400 ">
                    With interview
                  </h5>
              
              </div>
            </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Folders;
