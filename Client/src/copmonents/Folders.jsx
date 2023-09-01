import { useNavigate, Link, useParams } from "react-router-dom";

function Folders({user}) {
  return (
    <div className="flex flex-col items-center">
      <div>
        <p className=" mt-8 mb-4 text-3xl">Choose your folder</p>
      </div>

      <div className="flex flex-row justify-center items-center flex-wrap">
        <div>
          <div className="relative inline-flex items-center justify-center p-2 m-5 overflow-hidden max-w-sm bg-gradient-to-br from-teal-300 to-lime-300 border rounded-2xl shadow hover:-translate-y-3 transition-transform duration-300">
            <span className=" flex flex-col items-center justify-between relative  transition-all ease-in duration-75 bg-white shadow rounded-xl group-hover:bg-opacity-0">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src="https://picsum.photos/id/426/250/150"
                  alt=""
                />
              </a>
              <div className="p-5 mt-6">
                <a href="#">
                  <h5 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Wishlist
                  </h5>
                </a>
              </div>
            </span>
          </div>
        </div>
        <div>
          <div className="relative inline-flex items-center justify-center p-2 m-5 overflow-hidden max-w-sm bg-gradient-to-br from-teal-300 to-lime-300 border rounded-2xl shadow hover:-translate-y-3 transition-transform duration-300">
          <Link to={`../index/${user}`}> <span className=" flex flex-col items-center justify-between relative  transition-all ease-in duration-75 bg-white shadow rounded-xl group-hover:bg-opacity-0">
              
                <img
                  className="rounded-t-lg"
                  src="https://picsum.photos/id/426/250/150"
                  alt=""
                />
              
              <div className="p-5 mt-6">
                
                <h5 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    All applications
                  </h5>
                
                  
                
              </div>
            </span>
            </Link>
          </div>
        </div>
        <div>
          <div className="relative inline-flex items-center justify-center p-2 m-5 overflow-hidden max-w-sm bg-gradient-to-br from-teal-300 to-lime-300 border rounded-2xl shadow hover:-translate-y-3 transition-transform duration-300">
            <span className=" flex flex-col items-center justify-between relative  transition-all ease-in duration-75 bg-white shadow rounded-xl group-hover:bg-opacity-0">
              <a href="#">
                <img
                  className="rounded-t-lg"
                  src="https://picsum.photos/id/426/250/150"
                  alt=""
                />
              </a>
              <div className="p-5 mt-6">
                <a href="#">
                  <h5 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    With interview
                  </h5>
                </a>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Folders;
