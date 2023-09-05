import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
import BackToDash from "../copmonents/BackToDash";
import moment from "moment";
import { Tooltip } from "flowbite-react";

function Archive({user}) {
  let { authorId } = useParams();

  const [jobs, setJobs] = useState([]);

  const navigate = useNavigate();

  async function getJobs() {
    try {
      const response = await axios.get(`/api/jobs/${authorId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setJobs(response.data);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getJobs();
  }, []);


  async function restoreJob(jobId) {

    try {
      console.log(jobId)
      let resp = await axios.put(`/api/jobs/archive/${authorId}/${jobId}`, jobs, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      getJobs();
    
    } catch (err) {
      console.log( err.message);
      navigate(`/archive/${authorId}`);
    }
  }

  return (
    <div className="mt-28 flex flex-col sm:items-center">
      <div className="flex justify-center  w-full sm:mx-12 pb-6">
        <div className="flex justify-center   lg:w-3/4 xl:w-1/2 px-4 lg:px-1 xl:px-0 pb-1 rounded-full border-b-2">
          <h1 className="text-4xl font-bold text-blue-900 pb-4 text-center mb-2x">
            Archived applications
          </h1>
        </div>
      </div>
      <div className="flex justify-center  w-full sm:mx-12 pb-6">
        <div className="flex justify-center sm:justify-between wrap w-full lg:w-9/12 xl:w-4/6 2xl:w-1/2  px-6 lg:px-1 xl:px-0">
          <div className="flex justify-between">
            <BackToDash />
            <Link
                  
                  className="text-sm flex flex-row align-middle cursor:pointer "
                >
            <button
              type="button"
              className="bg-gray-300 text-gray-700 shadow-md rounded-r-md py-2 border-l-1 border-blue-950 hover:bg-red-950 hover:text-white px-3"
            >
              <div className="flex flex-row align-middle hover:text-white font-bold">
                
                  <span className="mr-2">Empty archive</span>
                  <svg className="w-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
    <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z"/>
  </svg>
               
              </div>
            </button>
            </Link>
          </div>
          <div className="hidden sm:block">
            <div className="flex flex-row gap-0.5 mt-2  ">
              <p className="flex flex-row  p-2 text-xs rounded-md text-slate-600 bg-red-100">
                High priority
              </p>
              <p className="flex flex-row  p-2 text-xs rounded-md text-slate-600 bg-blue-100">
                Medium priority
              </p>
              <p className="flex flex-row  p-2 text-xs rounded-md text-slate-600 bg-green-100">
                Low priority
              </p>
            </div>
          </div>
        </div>
      </div>

      <table className="table-fixed text-sm text-left text-gray-500 rounded-lg overflow-hidden shadow-lg  ">
        <thead className="text-xs text-gray-50 uppercase bg-blue-950 md:hidden">
          <tr>
            <th scope="col" className="px-6 py-3">
              Company name
            </th>
            <th scope="col" className="px-6 py-3">
              Role
            </th>
            <th scope="col" className="px-6 py-3 ">
              Restore/Delete
            </th>
          </tr>
        </thead>
        <tbody className="md:hidden">
          {jobs.map((item, index) => {
            let gradient = "";
            
            if (item.priority === 1) {
              gradient =
                "bg-gradient-to-r from-red-100 via-white via-38% hover:from-red-100 hover:via-slate-200";
            } else if (item.priority === 2) {
              gradient =
                "bg-gradient-to-r from-blue-100 via-white via-38% hover:from-blue-100  hover:via-slate-200";
            } else {
              gradient =
                "bg-gradient-to-r from-green-100 via-white via-38% hover:from-green-100  hover:via-slate-200";
            }

            if (item.archived) {
              return (
                <tr key={index} className={gradient}>
                  <td className="px-6 py-3 px-6 py-3 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent ">
                    <Link>
                      <div className="flex px-2 py-1">
                        <div className="flex flex-col justify-center">
                          <h6 className="mb-0 text-sm leading-normal font-bold ">
                            {item.company}
                          </h6>
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td className="px-6 py-3 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <Link>
                      <div className="flex px-2 py-1">
                        <div className="flex flex-col justify-center">
                          <p className="mb-0 text-xs leading-tight font-bold text-slate-500 ">
                            {item.role}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </td>

                  <td className="pl-9  py-3 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <div className="flex flex-row gap-8">
                    <Tooltip
                        animation="duration-500"
                        style="light"
                        content="Restore"
                      >
                        <Link
                          data-tooltip-target="tooltip-top"
                          className=" p-1 cursor:pointer"
                          onClick={() => restoreJob(item._id)}
                        >
                          <svg className="w-5 h-5 mb-0 text-xs leading-tight text-slate-400 hover:text-sky-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 14">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7 1 4l3-3m0 12h6.5a4.5 4.5 0 1 0 0-9H2"/>
  </svg>
                        </Link>
                      </Tooltip>
                      <Tooltip
                        content="Delete forever"
                        animation="duration-500"
                        style="light"
                      >
                        <Link
                          data-tooltip-target="tooltip-top"
                          className=" p-1 cursor:pointer" 
                          onClick={() => archiveJob(item._id)}
                        >
                          <svg
                            className="w-5 h-5 mb-0 text-xs leading-tight text-slate-400 hover:text-red-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 18 20"
                          >
                            <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" />
                          </svg>
                        </Link>
                      </Tooltip>
                    </div>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
      <table className="table-fixed text-sm text-left text-gray-500 rounded-lg overflow-hidden shadow-lg  mx-12 hidden md:block">
        <thead className="text-xs text-gray-50 uppercase bg-blue-950">
          <tr>
            <th scope="col" className="px-6 py-3">
              Company name
            </th>
            <th scope="col" className="px-6 py-3">
              Role
            </th>
            <th scope="col" className="px-6 py-3">
              Directory
            </th>


            <th scope="col" className="px-6 py-3 ">
              Date applied
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((item, index) => {
            let gradient = "";
            let date = moment(item.dateApplied).format("ll");
            if (item.priority === 1) {
              gradient =
                "bg-gradient-to-r from-red-100 via-white via-38% hover:from-red-100 hover:via-slate-200";
            } else if (item.priority === 2) {
              gradient =
                "bg-gradient-to-r from-blue-100 via-white via-38% hover:from-blue-100  hover:via-slate-200";
            } else {
              gradient =
                "bg-gradient-to-r from-green-100 via-white via-38% hover:from-green-100  hover:via-slate-200";
            }

            if (item.archived) {
              return (
                <tr key={index} className={gradient}>
                  <td className="px-6 py-3 px-6 py-3 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent ">
                    <div className="flex px-2 py-1">
                      <div className="flex flex-col justify-center">
                        <h6 className="mb-0 text-sm leading-normal font-bold ">
                          {item.company}
                        </h6>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-3 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <p className="mb-0 text-xs leading-tight font-bold text-slate-500">
                      {item.role}
                    </p>
                  </td>
                  <td className="px-6 py-3 px-4 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                    <p className="mb-0 text-xs leading-tight text-slate-400">
                      {item.wishlist ? (
                        
                            <>Wishlist</>

                        
                      ) : item.yesInterview ? (
                        <>Interview aplications</>
                      ) : <>All aplications</>}
                    </p>
                  </td>


                  <td className="px-6 py-3 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <p className="mb-0 text-xs leading-tight  text-slate-400">
                      {date}
                    </p>
                  </td>
                  <td className="px-6 py-5 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <div className="flex flex-row gap-3 mb-0 text-xs leading-tight  text-slate-400">
                      
                      <Tooltip
                        animation="duration-500"
                        style="light"
                        content="Restore"
                      >
                        <Link
                          data-tooltip-target="tooltip-top"
                          className=" p-1 cursor:pointer"
                          onClick={() => restoreJob(item._id)}
                        >
                          <svg className="w-5 h-5 mb-0 text-xs leading-tight text-slate-400 hover:text-sky-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 14">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7 1 4l3-3m0 12h6.5a4.5 4.5 0 1 0 0-9H2"/>
  </svg>
                        </Link>
                      </Tooltip>
                      <Tooltip
                        content="Delete forever"
                        animation="duration-500"
                        style="light"
                      >
                        <Link
                          data-tooltip-target="tooltip-top"
                          className=" p-1 cursor:pointer" 
                          onClick={() => archiveJob(item._id)}
                        >
                          <svg
                            className="w-5 h-5 mb-0 text-xs leading-tight text-slate-400 hover:text-red-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 18 20"
                          >
                            <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z" />
                          </svg>
                        </Link>
                      </Tooltip>
                    </div>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Archive;
