import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function NewWishlistItem({ user }) {
  const [defaultDate, setDefaultDate] = useState("");
  const [option, setOption] = useState(2);



  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().substr(0, 10);
    setDefaultDate(formattedDate);
  }, []);

  const companyRef = useRef();
  const positionRef = useRef();
  const urlRef = useRef();
  const commentRef = useRef();

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      
      let newJob = {
          company: companyRef.current.value,
          role: positionRef.current.value,
          url: urlRef.current.value,
          priority: option,
          wishlist: true,  
          comments: commentRef.current.value,
          user: user,
        
      }
      await axios.post(`/api/jobs`, newJob, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      navigate(`/wishlist/${user}`);
    } catch (err) {
      console.log(err.message);
    }
  }

  const handleChange = (e) => {
    setOption(e.target.value);
  };



  const goBack = () => {
		navigate(-1);
	}

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit} className="w-3/4 sm:w-1/2 max-w-lg mt-32">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-3xl font-bold leading-7 text-gray-900 mb-6">
              Add new wishlist job
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              You are only one step from taking control of your job search
            </p>

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
                  />
                </div>
              </div>

              

              <div className="sm:col-span-6">
                <label
                  htmlFor="priority"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Choose a priority level
                </label>
                <select
                  value={option}
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
                  />
                </div>
              </div>

              
              
             
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
  );
}

export default NewWishlistItem;
