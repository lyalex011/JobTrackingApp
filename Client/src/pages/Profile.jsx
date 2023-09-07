import { useEffect, useState } from "react";
import moment from "moment";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import baseURL from "../Api";

function Profile({setUser}) {
  const [showInput, setShowInput] = useState(false);
  const [user2, setUser2] = useState({});

  const navigate = useNavigate();
 

  async function getUser(token) {
    try {
      const response = await axios.get(baseURL + "/api/user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser2(response.data);
    } catch (err) {
      console.log(err);
      localStorage.removeItem("token");
    }
    
  }

  useEffect(() => {

    let token = localStorage.getItem("token");
      getUser(token);
    
  }, []);


  const handleCheckboxChange = () => {
    setShowInput(!showInput);
  };

  async function handleDelete() {
    try {
      
      let resp = await axios.delete(
        baseURL + `/api/user/${user2.id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      localStorage.removeItem("token");
      setUser({});
      navigate(`/`);
    } catch (err) {
      console.log(err.message);
      navigate(`/profile`);
    }
  }
  

  return (
    <div className="h-full bg-white pt-20">
      <div>
        <div className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="border-b px-4 pb-6">
            <div className="text-center my-4">
              <img
                className="h-72 w-72 rounded-full border-4 border-white mx-auto my-4"
                src="/profile.avif"
                alt=""
              />
              <div className="py-2">
                <h3 className="font-bold text-2xl mb-1">
                  {user2.firstName} {user2.lastName}
                </h3>
                <div className="inline-flex text-gray-700 items-center">
                  {user2.email}
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-2 px-2">
            <Link to={`/editprofile/${user2.id}`}>
              <button className="flex flex-row gap-3 font-bold text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-2 focus:outline-none focus:ring-lime-200  font-medium rounded-lg text-sm px-12 py-3 text-center mr-1 mb-2">
                Edit
                <svg
                  className="w-5 h-5 text-gray-600 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.109 17H1v-2a4 4 0 0 1 4-4h.87M10 4.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm7.95 2.55a2 2 0 0 1 0 2.829l-6.364 6.364-3.536.707.707-3.536 6.364-6.364a2 2 0 0 1 2.829 0Z"
                  />
                </svg>
              </button>
              </Link>
              <Link to="/dash">
                <button className="ml-4 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 hover:text-black focus:ring-2 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                  <span className="relative px-6 py-2.5 transition-all ease-in duration-75 bg-slate-700  rounded-md group-hover:bg-opacity-0">
                    Back
                  </span>
                </button>
              </Link>
            </div>
            <div className="flex justify-center mt-8">
              <div className="col-span-full">
                <label className="inline-flex items-center ">
                  <input
                    type="checkbox"
                    id="showInput"
                    className="form-checkbox rounded-md h-5 w-5 text-sky-700"
                    checked={showInput}
                    onChange={handleCheckboxChange}
                  />
                  <span className="ml-2 text-gray-700">
                    I want to delete account
                  </span>
                </label>
              </div>
            </div>

            {showInput ? (
              <>
                {" "}
                <div className="py-2 flex flex-col items-center  ">
                  <div className="flex justify-center inline-flex my-3">
                    <h3 className="text-center font-bold inline-flex text-xl mb-1">
                      Are you sure you want to delete account and all data?
                    </h3>
                  </div>

                  <div className="mb-3 inline-flex text-gray-700 items-center">
                    This cannot be undone (you will lose all data)
                  </div>
                </div>
                <div className="flex justify-center gap-2 px-2">
                  <button  onClick={handleDelete} className=" relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 hover:text-black focus:ring-2 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                    <span className="relative px-6 py-2.5 transition-all ease-in duration-75 bg-red-700  rounded-md group-hover:bg-opacity-0">
                      Delete account
                    </span>
                  </button>
                  <button
                    onClick={handleCheckboxChange}
                    className="flex flex-row gap-3 font-bold text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-2 focus:outline-none focus:ring-lime-200  font-medium rounded-lg text-sm px-12 py-3 text-center mr-1 mb-2"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="px-4 py-4">
            <div className="flex gap-2 items-center text-gray-800r mb-4">
              {user2.created && (
                <span>
                  Have account since {moment(user2.created).format("ll")}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
