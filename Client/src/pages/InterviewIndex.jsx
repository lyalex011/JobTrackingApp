import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
import BackToDash from "../copmonents/BackToDash";
import moment from "moment";
import { Tooltip } from "flowbite-react";
import baseURL from "../Api";

function InterviewIndex({ user }) {
  let { authorId } = useParams();

  const [jobs, setJobs] = useState([]);

  const navigate = useNavigate();

  async function getJobs() {
    try {
      const response = await axios.get(baseURL + `/api/jobs/${authorId}`, {
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

  async function archiveJob(jobId) {
    try {
      console.log(jobId);
      let resp = await axios.put(
        baseURL + `/api/jobs/archive/${authorId}/${jobId}`,
        jobs,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      getJobs();
    } catch (err) {
      console.log("!", err.message);
      navigate(`/interview/${authorId}`);
    }
  }

  return (
    <div className="mt-28 flex flex-col sm:items-center">
      <div className="flex justify-center  w-full sm:mx-12 pb-6">
        <div className="flex justify-center   lg:w-3/4 xl:w-1/2 px-4 lg:px-1 xl:px-0 pb-1 rounded-full border-b-2">
          <h1 className="text-4xl font-bold text-blue-900 pb-4 text-center mb-2x">
            Applications with interview date
          </h1>
        </div>
      </div>
      <div className="flex justify-center  w-full sm:mx-12 pb-6">
        <div className="flex justify-center sm:justify-between wrap w-full lg:w-9/12 xl:w-4/6 2xl:w-1/2  px-6 lg:px-1 xl:px-0">
          <div className="flex justify-between">
            <BackToDash />
            <Link
              to="/newwithinterview"
              className="text-sm flex flex-row align-middle cursor:pointer "
            >
              <button
                type="button"
                className="bg-gray-300 text-gray-700 shadow-md rounded-r-md py-2 border-l-1 border-blue-950 hover:bg-blue-950 hover:text-white px-3"
              >
                <div className="flex flex-row align-middle hover:text-white font-bold">
                  <span className="mr-2">Add</span>
                  <svg
                    className="w-5 ml-2 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M.188 5H5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707c-.358.362-.617.81-.753 1.3C.148 5.011.166 5 .188 5ZM14 8a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm2 7h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2Z" />
                    <path d="M6 14a7.969 7.969 0 0 1 10-7.737V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H.188A.909.909 0 0 1 0 6.962V18a1.969 1.969 0 0 0 1.933 2h6.793A7.976 7.976 0 0 1 6 14Z" />
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
              Company/Role
            </th>

            <th scope="col" className="flex justify-center px-6 py-3 ">
              Next interview
            </th>
          </tr>
        </thead>
        <tbody className="md:hidden">
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

            if (item.yesInterview && !item.archived && !item.wishlist) {
              return (
                <tr key={index} className={gradient}>
                  <td className="px-2 py-3 px-6 py-3 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent ">
                    <Link to={`/showinterview/${authorId}/${item._id}`}>
                      <div className="flex px-2 py-1">
                        <div className="flex flex-col justify-center">
                          <h6 className="mb-0 text-sm leading-normal font-bold underline">
                            {item.company}

                          </h6>
                          <p className="mb-0 text-xs leading-tight font-bold text-slate-500 underline">
                            {item.role}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </td>
                  

                  <td className="px-2 py-3 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <Link className="flex flex-col items-center" to={`/showinterview/${authorId}/${item._id}`}>
                      <h6 className="mb-0 text-xs leading-normal font-bold ">
                        {item.typeInterview}
                      </h6>
                      <p className="mb-0 text-xs leading-tight  text-slate-400">
                        {date}
                      </p>
                    </Link>
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
              Posting link
            </th>
            <th scope="col" className="px-6 py-3 ">
              Salary
            </th>

            <th scope="col" className="px-6 py-3 ">
              Next interview
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((item, index) => {
            let gradient = "";
            let date = moment(item.dateInterview).format("ll");
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

            if (item.yesInterview && !item.archived && !item.wishlist) {
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
                      {item.url ? (
                        <a
                          className="inline-flex items-center justify-center py-2 px-3  font-small text-gray-500 rounded-lg bg-sky-200 hover:text-gray-900 hover:bg-slate-500 hover:text-white"
                          href={item.url}
                        >
                          Job listing
                          <svg
                            className="w-3 h-3 ml-2 mt-0.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 18 18"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                            />
                          </svg>
                        </a>
                      ) : (
                        <>No link provided</>
                      )}
                    </p>
                  </td>
                  <td className="px-6 py-3 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <p className="mb-0 text-xs leading-tight  text-slate-400">
                      {item.salary}
                    </p>
                  </td>

                  <td className="px-6 py-3 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <h6 className="mb-0 text-sm leading-normal font-bold ">
                      {item.typeInterview}
                    </h6>
                    <p className="mb-0 text-xs leading-tight  text-slate-400">
                      {date}
                    </p>
                  </td>
                  <td className="px-6 py-5 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <div className="flex flex-row gap-3 mb-0 text-xs leading-tight  text-slate-400">
                      <Tooltip
                        content="See details"
                        animation="duration-500"
                        style="light"
                      >
                        <Link
                          className="p-1 cursor:pointer"
                          to={`/showinterview/${authorId}/${item._id}`}
                        >
                          <svg
                            className="w-5 h-5 mb-0 text-xs leading-tight text-slate-400 hover:text-sky-700"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 14"
                          >
                            <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                          </svg>
                        </Link>
                      </Tooltip>
                      <Tooltip
                        content="Edit item"
                        animation="duration-500"
                        style="light"
                      >
                        <Link
                          to={`/editinterview/${authorId}/${item._id}`}
                          className="p-1 cursor:pointer"
                        >
                          <svg
                            className="w-5 h-5 mb-0 text-xs leading-tight text-slate-400 hover:text-sky-700"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 18"
                          >
                            <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z" />
                            <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z" />
                          </svg>
                        </Link>
                      </Tooltip>

                      <Tooltip
                        content="Archive"
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

export default InterviewIndex;
