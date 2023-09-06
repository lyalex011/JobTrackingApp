import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
import baseURL from "../Api";

import moment from "moment";


function ShowInterview() {
  let { authorId, id } = useParams();

  const [job, setJob] = useState({});

  const navigate = useNavigate();



  async function getOneJob() {
    try {
      const response = await axios.get(baseURL+`/api/jobs/${authorId}/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setJob(response.data);
      
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getOneJob();
  }, []);


  async function archiveJob(jobId) {

    try {
      console.log(jobId)
      let resp = await axios.put(baseURL+`/api/jobs/archive/${authorId}/${jobId}`, job, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      
      navigate(`/interview/${authorId}`);
    } catch (err) {
      console.log("!", err.message);
      navigate(`/interview/${authorId}`);
    }
  }

  const goBack = () => {
    navigate(-1);
}



  let gradient = "";

            if (job.priority === 1) {
              gradient =
                "bg-gradient-to-r from-red-100 via-white via-38% hover:from-red-100 hover:via-slate-200";
            } else if (job.priority === 2) {
              gradient =
                "bg-gradient-to-r from-blue-100 via-white via-38% hover:from-blue-100  hover:via-slate-200";
            } else {
              gradient =
                "bg-gradient-to-r from-green-100 via-white via-38% hover:from-green-100  hover:via-slate-200";
            }

  return (
    <div className="mt-28 flex flex-col sm:items-center">
      <div className="flex justify-center  w-full sm:mx-12 pb-6">
        <div className="flex justify-center   lg:w-3/4 xl:w-1/2 px-4 lg:px-1 xl:px-0 pb-1 rounded-full border-b-2">
          <h1 className="text-4xl font-bold text-blue-900 pb-4 text-center mb-2x">
            Details about application
          </h1>
        </div>
      </div>
      <div className="flex justify-center  w-full sm:mx-12 pb-6">
        <div className="flex justify-center  wrap w-full lg:w-9/12 xl:w-4/6 2xl:w-1/2  px-6 lg:px-1 xl:px-0">
          <div className="flex justify-between">
          <Link
        onClick={goBack}
        className="bg-gray-300 text-gray-700 shadow-md rounded-l-lg border-r-2 border-blue-950  hover:bg-blue-950 hover:text-white px-6 font-bold"
      >
        <button className="mx-2 my-3 text-sm flex flex-row align-middle cursor:pointer">
          <svg
            className="w-5 mr-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          Back
        </button>
      </Link>
            <Link
                  to={`/editinterview/${authorId}/${id}`}
                  className="text-sm flex flex-row align-middle cursor:pointer "
                >
            <button
              type="button"
              className="bg-gray-300 text-gray-700 shadow-md border-r-2 py-2 border-l-1 border-blue-950 hover:bg-blue-950 hover:text-white px-8"
            >
              <div className="flex flex-row align-middle hover:text-white font-bold">
                
                  <span className="mr-2">Edit</span>
                  <svg className="w-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"/>
    <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z"/>
    <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z"/>
  </svg>
               
              </div>
            </button>
            </Link>
            <Link
                  onClick={() => archiveJob(job._id)}
                  className="text-sm flex flex-row align-middle cursor:pointer "
                >
            <button
              type="button"
              className="bg-gray-300 text-gray-700 shadow-md rounded-r-md py-2 border-l-1 border-blue-950 hover:bg-red-950 hover:text-white px-5"
            >
              <div className="flex flex-row align-middle hover:text-white font-bold">
                
                  <span className="mr-2">Archive</span>
                  <svg className="w-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
    <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z"/>
  </svg>
               
              </div>
            </button>
            </Link>
          </div>
          
        </div>
      </div>

      
      <table className="table-fixed w-full md:w-7/12 xl:w-1/3 text-sm text-left text-gray-500 rounded-lg overflow-hidden shadow-lg  sm:mx-12">
        <thead className="text-xs text-gray-50 uppercase bg-blue-950">
          <tr>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Data
            </th>
            
          </tr>
        </thead>
        <tbody>
          
                <tr className={gradient} >
                  <td className="px-6 py-3  align-middle bg-transparent border-b whitespace-nowrap shadow-transparent ">
                    <div className="flex px-2 py-1">
                      <div className="flex flex-col justify-center">
                        <h6 className="mb-0 text-sm leading-normal font-bold ">
                          Company name
                        </h6>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-3 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <p className="mb-0 text-xs leading-tight font-bold text-slate-500">
                      {job.company}
                    </p>
                  </td>
                  
                </tr >
                <tr className={gradient}>
                  <td className="px-6 py-3  align-middle bg-transparent border-b whitespace-nowrap shadow-transparent ">
                    <div className="flex px-2 py-1">
                      <div className="flex flex-col justify-center">
                        <h6 className="mb-0 text-sm leading-normal font-bold ">
                          Role in the company
                        </h6>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-3 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <p className="mb-0 text-xs leading-tight font-bold text-slate-500">
                      {job.role}
                    </p>
                  </td>
                  
                </tr>
                <tr className={gradient}>
                  <td className="px-6 py-3  align-middle bg-transparent border-b whitespace-nowrap shadow-transparent ">
                    <div className="flex px-2 py-1">
                      <div className="flex flex-col justify-center">
                        <h6 className="mb-0 text-sm leading-normal font-bold ">
                          Salary
                        </h6>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-3 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <p className="mb-0 text-xs leading-tight font-bold text-slate-500">
                      {job.salary}
                    </p>
                  </td>
                  
                </tr> 
                <tr className={gradient}>
                  <td className="px-6 py-3  align-middle bg-transparent border-b whitespace-nowrap shadow-transparent ">
                    <div className="flex px-2 py-1">
                      <div className="flex flex-col justify-center">
                        <h6 className="mb-0 text-sm leading-normal font-bold ">
                          Listing URL
                        </h6>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-3 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <p className="mb-0 text-xs leading-tight font-bold text-slate-500">
                    {job.url ? (
                        <a
                          className="inline-flex items-center justify-center py-2 px-3  font-small text-gray-500 rounded-lg bg-sky-200 hover:text-gray-900 hover:bg-slate-500 hover:text-white"
                          href={job.url}
                        >
                          Job listing
                          <svg className="w-3 h-3 ml-2 mt-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
  </svg>
                        </a>
                      ) : (
                        <>No link provided</>
                      )}
                    </p>
                  </td>
                  
                </tr>
                <tr className={gradient}>
                  <td className="px-6 py-3  align-middle bg-transparent border-b whitespace-nowrap shadow-transparent ">
                    <div className="flex px-2 py-1">
                      <div className="flex flex-col justify-center">
                        <h6 className="mb-0 text-sm leading-normal font-bold ">
                          Priority
                        </h6>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-3 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <p className="mb-0 text-xs leading-tight font-bold text-slate-500">
                      {job.priority === 3 ? <>low</> : job.priority === 2 ? <>medium</> : <>high</>}
                    </p>
                  </td>
                  
                </tr>
                <tr className={gradient}>
                  <td className="px-6 py-3  align-middle bg-transparent border-b whitespace-nowrap shadow-transparent ">
                    <div className="flex px-2 py-1">
                      <div className="flex flex-col justify-center">
                        <h6 className="mb-0 text-sm leading-normal font-bold ">
                          Date applied
                        </h6>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-3 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <p className="mb-0 text-xs leading-tight font-bold text-slate-500">
                      {moment(job.dateApplied).format("ll")}
                    </p>
                  </td>
                  
                </tr>
                <tr className={gradient}>
                  <td className="px-6 py-3  align-middle bg-transparent border-b whitespace-nowrap shadow-transparent ">
                    <div className="flex px-2 py-1">
                      <div className="flex flex-col justify-center">
                        <h6 className="mb-0 text-sm leading-normal font-bold ">
                          Contact
                        </h6>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-3 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <p className="mb-0 text-xs leading-tight font-bold text-slate-500">
                      {job.contact}
                    </p>
                  </td>
                  
                </tr>

                <tr className={gradient}>
                  <td className="px-6 py-3  align-middle bg-transparent border-b whitespace-nowrap shadow-transparent ">
                    <div className="flex px-2 py-1">
                      <div className="flex flex-col justify-center">
                        <h6 className="mb-0 text-sm leading-normal font-bold ">
                          Comments
                        </h6>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-3 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <p className="mb-0 text-xs leading-tight font-bold text-slate-500">
                      {job.comments}
                    </p>
                  </td>
                  
                </tr>

                
                        {job.yesInterview && <>
                            <tr className={gradient}>
                  <td className="px-6 py-3 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent ">
                    <div className="flex px-2 py-1">
                      <div className="flex flex-col justify-center">
                        <h6 className="mb-0 text-sm leading-normal font-bold ">
                          Type of the next interview
                        </h6>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-3 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <p className="mb-0 text-xs leading-tight font-bold text-slate-500">
                      {job.typeInterview}
                    </p>
                  </td>
                  
                </tr>
                <tr className={gradient}>
                  <td className="px-6 py-3 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent ">
                    <div className="flex px-2 py-1">
                      <div className="flex flex-col justify-center">
                        <h6 className="mb-0 text-sm leading-normal font-bold ">
                          Date and time
                        </h6>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-3 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <p className="mb-0 text-xs leading-tight font-bold text-slate-500">
                    {moment(job.dateInterview).format("ll")} {" @ "} {job.timeInterview}
                    </p>
                  </td>
                  
                </tr>
                <tr className={gradient}>
                  <td className="px-6 py-3  align-middle bg-transparent border-b whitespace-nowrap shadow-transparent ">
                    <div className="flex px-2 py-1">
                      <div className="flex flex-col justify-center">
                        <h6 className="mb-0 text-sm leading-normal font-bold ">
                          Address or Meeting link
                        </h6>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-3 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                    <p className="mb-0 text-xs leading-tight font-bold text-slate-500">
                      <a href={job.intAddress}>{job.intAddress}</a>
                    </p>
                  </td>
                  
                </tr>
                        
                        </>}
                

        </tbody>
      </table>
    </div>
  );
}

export default ShowInterview;
