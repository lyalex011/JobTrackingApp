import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";

function Index({user}) {

    let { authorId } = useParams()
    console.log(authorId)

    const [jobs, setJobs] = useState([])

    const navigate = useNavigate()

    async function getJobs() {
        try {
            const response = await axios.get(`/api/jobs/${authorId}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
            })
            console.log("Resp: ",response)
            setJobs(response.data)
            
        } catch(err) {
            console.log(err.message)
        }
    }

    useEffect(() => {
        getJobs()
    }, [])

    console.log(jobs)


    return ( 
    <div className="mt-32 flex flex-col justify-center">






        <table className=" text-sm text-left text-gray-500 w-10/12 rounded-lg overflow-hidden shadow-lg">
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
                <th scope="col" className="px-6 py-3">
                    Salary
                </th>
                <th scope="col" className="px-6 py-3">
                    Contact
                </th>
                <th scope="col" className="px-6 py-3">
                    Comments
                </th>
                <th scope="col" className="px-6 py-3">
                    Date applied
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
        {jobs.map((item, index) => {
            let gradient = ""
            if(item.priority === 1 ) {
                gradient = "bg-gradient-to-r from-red-100 via-white via-38% hover:from-gray-200"
            } 
            else if (item.priority === 2 ) {
                gradient ="bg-gradient-to-r from-blue-100 via-white via-38% hover:from-gray-200"
            } else {
                gradient ="bg-gradient-to-r from-green-100 via-white via-38% hover:from-gray-200"
            }

            if(!item.yesInterview) {
                return (
                  <tr key={index} className={gradient} >
                    <td className="px-6 py-3 px-6 py-3 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent ">
                      <div className="flex px-2 py-1">
                        <div className="flex flex-col justify-center">
                          <h6 className="mb-0 text-sm leading-normal">
                            {item.company}
                          </h6>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-3 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                      <p className="mb-0 text-xs leading-tight  text-slate-400">
                        {item.role}
                      </p>
                    </td>
                    <td className="px-6 py-3 px-4 align-middle bg-transparent border-b whitespace-nowrap shadow-transparent">
                      <p className="mb-0 text-xs leading-tight text-slate-400">
                        {item.url ? (
                          <a
                            className="inline-flex items-center justify-center py-2 px-3  font-small text-gray-500 rounded-lg bg-sky-200 hover:text-gray-900 hover:bg-sky-300"
                            href={item.url}
                          >
                            Job listing
                            <svg
                              className="w-3 h-3 ml-2 mt-0.5"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 14 10"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                              />
                            </svg>
                          </a>
                        ) : (
                          <p>No link provided</p>
                        )}
                      </p>
                    </td>
                    <td className="px-6 py-3 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                      <p className="mb-0 text-xs leading-tight  text-slate-400">
                        {item.role}
                      </p>
                    </td>
                    <td className="px-6 py-3 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                      <p className="mb-0 text-xs leading-tight  text-slate-400">
                        {item.role}
                      </p>
                    </td>
                    <td className="px-6 py-3 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                      <p className="mb-0 text-xs leading-tight  text-slate-400">
                        {item.role}
                      </p>
                    </td>
                    <td className="px-6 py-3 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                      <p className="mb-0 text-xs leading-tight  text-slate-400">
                        {item.role}
                      </p>
                    </td>
                    <td className="px-6 py-5 align-middle bg-transparent border-b  whitespace-nowrap shadow-transparent">
                      <p className="flex flex-row mb-0 text-xs leading-tight  text-slate-400">
                      <Link className="p-1 cursor:pointer">
                    <svg className="w-5 h-5 mb-0 text-xs leading-tight text-slate-400 hover:text-sky-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
    <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
  </svg>
                    </Link>
                      
                      <Link className="p-1 cursor:pointer">
                      <svg className="w-5 h-5 mb-0 text-xs leading-tight text-slate-400 hover:text-sky-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
    <path d="M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z"/>
    <path d="M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z"/>
  </svg>
                    </Link>
                    <Link className=" p-1 cursor:pointer">
                    <svg className="w-5 h-5 mb-0 text-xs leading-tight text-slate-400 hover:text-sky-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M7.824 5.937a1 1 0 0 0 .726-.312 2.042 2.042 0 0 1 2.835-.065 1 1 0 0 0 1.388-1.441 3.994 3.994 0 0 0-5.674.13 1 1 0 0 0 .725 1.688Z"/>
    <path d="M17 7A7 7 0 1 0 3 7a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h1a1 1 0 0 0 1-1V7a5 5 0 1 1 10 0v7.083A2.92 2.92 0 0 1 12.083 17H12a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1a1.993 1.993 0 0 0 1.722-1h.361a4.92 4.92 0 0 0 4.824-4H17a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3Z"/>
  </svg>
                    </Link>
                    <Link className="p-1 cursor:pointer"><svg className="w-5 h-5 mb-0 text-xs leading-tight text-slate-400 hover:text-red-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
    <path d="M17 4h-4V2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2H1a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1a1 1 0 1 0 0-2ZM7 2h4v2H7V2Zm1 14a1 1 0 1 1-2 0V8a1 1 0 0 1 2 0v8Zm4 0a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v8Z"/>
  </svg>
                    </Link>
                      </p>
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

export default Index;