
import ArchiveBtn from "../copmonents/ArchiveBtn";
import SettingsButton from "../copmonents/SettingsButton";
import Folders from "../copmonents/Folders";


function Dashboard({user}) {
  return (
    <div className="mt-12 sm:mt-24 flex flex-col items-center">
      <div className="lg:w-4/6">
        <div className=" my-5 mx-2">
          <div className="flex w-full  px-2 py-0.5">
            <div className="flex items-center flex-row w-full bg-gradient-to-br from-teal-300 to-lime-300  rounded-b-2xl shadow  pb-1">
            <span className=" flex items-center flex-col sm:flex-row w-full relative  bg-white shadow rounded-b-xl group-hover:bg-opacity-0 py-4 px-7 sm:p-6">
              <div className="flex text-indigo-500  items-center bg-white  p-2 rounded-md flex-none w-8 h-8 md:w-12 md:h-12 ">
              
              <svg className="w-6 h-6 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 18">
    <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
  </svg>
              </div>
              <div className="flex flex-col mb-5 sm:mb-1 sm:mr-8 items-center sm:items-start justify-center flex-grow sm:ml-1 text-gray-700 font-bold">
                <div className="">Welcome, Alex</div>
                <div className="text-xs whitespace-nowrap">
                  28 active applications, 2 with interview
                </div>
              </div>
              <div className=" flex items-center gap-4 flex-none text-white">
              <SettingsButton/>
              <ArchiveBtn user={user}/>
                
                </div>
              </span>
            </div>
          </div>
          
          
        </div>
      </div>

      <Folders user={user}/>

    </div>
  );
}

export default Dashboard;
