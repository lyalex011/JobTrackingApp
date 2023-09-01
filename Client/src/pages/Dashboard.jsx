
import Folders from "../copmonents/Folders";


function Dashboard({user}) {
  return (
    <div className="mt-12 sm:mt-24 flex flex-col items-center">
      <div>
        <div className="flex flex-row justify-center flex-wrap my-5 mx-2">
          <div className="sm:basis-1/4 w-full lg:w-1/3 px-2 py-0.5">
            <div className="flex items-center flex-row w-full bg-gradient-to-r sm:h-24 from-indigo-500 via-purple-500 to-pink-500 rounded-md p-3">
              <div className="flex text-indigo-500 dark:text-white items-center bg-white  p-2 rounded-md flex-none w-8 h-8 md:w-12 md:h-12 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="object-scale-down transition duration-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>
              </div>
              <div className="flex flex-col justify-around flex-grow ml-5 text-white">
                <div className="">Welcome, Alex</div>
                <div className="text-xs whitespace-nowrap">
                  Profile settings
                </div>
              </div>
              <div className=" flex items-center flex-none text-white"></div>
            </div>
          </div>
          <div className="sm:basis-1/6 w-full md:w-1/2 lg:w-1/3 px-2 py-0.5">
            <div className="flex items-center flex-row w-full bg-gradient-to-r sm:h-24 from-indigo-500 via-purple-500 to-pink-500 rounded-md p-3">
              <div className="flex text-indigo-500 dark:text-white items-center bg-white  p-2 rounded-md flex-none w-8 h-8 md:w-12 md:h-12 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="object-scale-down transition duration-500 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>
              </div>
              <div className="flex flex-col justify-around flex-grow ml-5 text-white">
                <div className="text-xs whitespace-nowrap">
                  Total active applications
                </div>
                <div className="">100</div>
                <div className="text-xs whitespace-nowrap">Archive</div>
              </div>
              <div className=" flex items-center flex-none text-white"></div>
            </div>
          </div>
          <div className="w-full sm:basis-3/6 md:w-1/2 lg:w-1/3 px-2 py-0.5">
            <div className="flex items-center flex-row w-full bg-gradient-to-r sm:h-24 from-indigo-500 via-purple-500 to-pink-500 rounded-md p-3">
              <div className="flex text-indigo-500 dark:text-white items-center bg-white  p-2 rounded-md flex-none w-8 h-8 md:w-12 md:h-12 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="object-scale-down transition duration-500 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                  />
                </svg>
              </div>
              <div className="flex flex-col justify-around flex-grow ml-5 text-white">
                <div className="text-xs whitespace-nowrap">Tip of a day:</div>
                <div className="">
                  Numbers and Data Are Key to Grabbing Employer Attention
                </div>
              </div>
              <div className=" flex items-center flex-none text-white"></div>
            </div>
          </div>
        </div>
      </div>

      <Folders user={user}/>

    </div>
  );
}

export default Dashboard;
