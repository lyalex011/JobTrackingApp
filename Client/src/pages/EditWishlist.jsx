import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
import baseURL from "../Api";

function EditWishlist() {
  const [defaultDate, setDefaultDate] = useState("");
  const [option, setOption] = useState();
  const [showInput, setShowInput] = useState(false);
  const [noWishlist, setNoWishlist] = useState(false);
  const [job, setJob] = useState({});
  const { authorId, id } = useParams();
  const navigate = useNavigate();

  const companyRef = useRef();
  const positionRef = useRef();
  const urlRef = useRef();
  const salaryRef = useRef();
  const contactRef = useRef();
  const dateRef = useRef();
  const checkboxRef = useRef();
  const wishcheckboxRef = useRef();
  const intdateRef = useRef();
  const intHoursRef = useRef();
  const intMinsRef = useRef();
  const intAmsRef = useRef();
  const intTypeRef = useRef();
  const commentRef = useRef();

  async function getJob() {
    try {
      
      const response = await axios.get(
        baseURL + `/api/jobs/${authorId}/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      setJob(response.data);
    } catch (err) {
      console.log(err.message);
      navigate(`/index/${authorId}`);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      let updateJob = {};
      if (showInput) {
        updateJob = {
          company: companyRef.current.value,
          role: positionRef.current.value,
          url: urlRef.current.value,
          dateApplied: dateRef.current.value,
          priority: option,
          salary: salaryRef.current.value,
          contact: contactRef.current.value,
          comments: commentRef.current.value,
          wishlist: !noWishlist,
          yesInterview: showInput,
          timeInterview:
            intHoursRef.current.value +
            ":" +
            intMinsRef.current.value +
            intAmsRef.current.value,
          typeInterview: intTypeRef.current.value,
          dateInterview: intdateRef.current.value,
        };
      } else {
        updateJob = {
          company: companyRef.current.value,
          role: positionRef.current.value,
          url: urlRef.current.value,
          dateApplied: dateRef.current.value,
          priority: option,
          salary: salaryRef.current.value,
          contact: contactRef.current.value,
          comments: commentRef.current.value,
          wishlist: !noWishlist,
        };
      }
      await axios.put(baseURL + `/api/jobs/${authorId}/${id}`, updateJob, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      navigate(`/wishlist/${authorId}`);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getJob();
  }, []);

  let newDate = "";

  if (job.dateApplied) {
    newDate = job.dateApplied.substring(0, 10);
  }

  console.log(newDate);

  const handleChange = (e) => {
    setOption(e.target.value);
  };

  const handleCheckboxChange = () => {
    setShowInput(!showInput);
  };

  const handleWishCheckboxChange = () => {
    setNoWishlist(!noWishlist);
  };

  const goBack = () => {
    navigate(-1);
  };

  if (!job.company) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Edit Post</h1>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="w-3/4 sm:w-1/2 max-w-lg mt-32">
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-3xl font-bold leading-7 text-gray-900 mb-6">
                Edit wishlist job application
              </h2>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Company name*
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      autoComplete="company"
                      className="block w-full rounded-md border-0 py-1.5 leading-[1.6] outline-none transition-all duration-200 ease-linear text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                      ref={companyRef}
                      defaultValue={job.company}
                      required
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="Role"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Role*
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="Role"
                      id="lastNRoleame"
                      autoComplete="Role"
                      className="block w-full rounded-md border-0 py-1.5 leading-[1.6] outline-none transition-all duration-200 ease-linear text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                      ref={positionRef}
                      defaultValue={job.role}
                      required
                    />
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label
                    htmlFor="url"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Job listing URL
                  </label>
                  <div className="mt-2">
                    <input
                      id="url"
                      name="url"
                      type="text"
                      autoComplete="url"
                      className="block w-full rounded-md border-0 py-1.5 leading-[1.6] outline-none transition-all duration-200 ease-linear text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                      ref={urlRef}
                      defaultValue={job.url}
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Date of application
                  </label>
                  <div className="mt-2">
                    <input
                      type="date"
                      name="date"
                      id="date"
                      autoComplete="date"
                      className="block w-full rounded-md border-0 py-1.5 leading-[1.6] outline-none transition-all duration-200 ease-linear text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                      ref={dateRef}
                      defaultValue={newDate}
                      onChange={(e) => setDefaultDate(e.target.value)}
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="priority"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Choose a priority level
                  </label>
                  <select
                    defaultValue={job.priority}
                    onChange={handleChange}
                    id="priority"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 "
                  >
                    <option value={1}>High</option>
                    <option value={2}>Medium </option>
                    <option value={3}>Low</option>
                  </select>
                </div>
                <div className="col-span-full">
                  <label className="inline-flex items-center ">
                    <input
                      type="checkbox"
                      id="showInput"
                      className="form-checkbox rounded-md h-5 w-5 text-sky-700"
                      checked={noWishlist}
                      onChange={handleWishCheckboxChange}
                      ref={wishcheckboxRef}
                    />
                    <span className="ml-2 text-gray-700">
                      Move to Active applications
                    </span>
                  </label>
                </div>

                {noWishlist && (
                  <>
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="Salary"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Salary
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="Salary"
                          id="Salary"
                          autoComplete="Salary"
                          className="block w-full rounded-md border-0 py-1.5 leading-[1.6] outline-none transition-all duration-200 ease-linear text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                          ref={salaryRef}
                          defaultValue={job.salary}
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="Contact"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Contact info
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="Contact"
                          id="lastNRoleame"
                          autoComplete="Contact"
                          className="block w-full rounded-md border-0 py-1.5 leading-[1.6] outline-none transition-all duration-200 ease-linear text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                          ref={contactRef}
                        />
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label
                        htmlFor="lg-input"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Comments
                      </label>
                      <div className="mt-2">
                        <textarea
                          type="textarea"
                          name="lg-input"
                          id="lg-input"
                          autoComplete="lg-input"
                          className="peer block w-full min-h-[auto] rounded-md border-0 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                          ref={commentRef}
                          defaultValue={job.comments}
                        />
                      </div>
                    </div>

                    <div className="col-span-full">
                      <label className="inline-flex items-center ">
                        <input
                          type="checkbox"
                          id="showInput"
                          className="form-checkbox rounded-md h-5 w-5 text-sky-700"
                          checked={showInput}
                          onChange={handleCheckboxChange}
                          ref={checkboxRef}
                        />
                        <span className="ml-2 text-gray-700">
                          Interview is scheduled
                        </span>
                      </label>
                    </div>
                    {showInput && (
                      <>
                        <div className="sm:col-span-3">
                          <label
                            htmlFor="date"
                            className="block text-sm font-medium leading-6 text-gray-900"
                          >
                            Date of interview
                          </label>
                          <div className="mt-2">
                            <input
                              type="date"
                              name="date"
                              id="date"
                              autoComplete="date"
                              className="block w-full rounded-md border-0 py-1.5 leading-[1.6] outline-none transition-all duration-200 ease-linear text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                              ref={intdateRef}
                            />
                          </div>
                        </div>

                        <div className=" bg-white rounded-lg sm:col-span-3">
                          <label
                            htmlFor="date"
                            className="block text-sm font-medium leading-6 text-gray-900 mb-1.5"
                          >
                            Time of interview
                          </label>
                          <div className="flex flex-row items-center sm:col-span-3 ">
                            <select
                              ref={intHoursRef}
                              name="hours"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2"
                            >
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                              <option value="9">9</option>
                              <option value="10">10</option>
                              <option value="11">10</option>
                              <option value="12">12</option>
                            </select>
                            <span className="text-xl mx-1">:</span>
                            <select
                              ref={intMinsRef}
                              name="minutes"
                              className="mr-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2"
                            >
                              <option value="0">00</option>
                              <option value="05">05</option>
                              <option value="10">10</option>
                              <option value="15">15</option>
                              <option value="20">20</option>
                              <option value="25">25</option>
                              <option value="30">30</option>
                              <option value="35">35</option>
                              <option value="40">40</option>
                              <option value="45">45</option>
                              <option value="55">55</option>
                            </select>
                            <select
                              ref={intAmsRef}
                              name="ampm"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2"
                            >
                              <option value="pm">PM</option>
                              <option value="am">AM</option>
                            </select>
                          </div>
                        </div>

                        <div className="sm:col-span-3">
                          <label
                            htmlFor="priority"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Choose type of interview
                          </label>
                          <select
                            ref={intTypeRef}
                            id="priority"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5 "
                          >
                            <option value="Phone screen">Phone screen</option>
                            <option value="Hiring manager">
                              Hiring manager interview
                            </option>
                            <option value="Behavioral">
                              Behavioral interview{" "}
                            </option>
                            <option value="Second or panel">
                              Second or panel interview
                            </option>
                            <option value="Technical">
                              Technical interview{" "}
                            </option>
                            <option value="Group">Group interview</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <Link onClick={goBack}>
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-sky-400"
              >
                Cancel
              </button>
            </Link>
            <button
              type="submit"
              className="rounded-md bg-sky-800 px-3 py-2 text-sm font-semibold text-black shadow-sm bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditWishlist;
