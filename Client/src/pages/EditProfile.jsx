import moment from "moment";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link, useParams } from "react-router-dom";
import baseURL from "../Api";

function EditProfile({ user }) {
  const navigate = useNavigate();
  const { authorId } = useParams();

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      let newUser =  {
          firstName: firstNameRef.current.value,
          lastName: lastNameRef.current.value,
          email: emailRef.current.value,
         
        };
      
      await axios.put(baseURL + `/api/user/${authorId}`, newUser, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      
      navigate(`/profile`);
    } catch (err) {
      console.log(err.message);
    }
  }



  return (
    <div className="bg-white pt-20">
      <div>
      
        <div className="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="border-b px-4 pb-6">
            <div className="text-center my-4">
              <img
                className="h-72 w-72 rounded-full border-4 border-white mx-auto my-4"
                src="/profile.avif"
                alt=""
              />
              <form onSubmit={handleSubmit} className="flex flex-col items-center  max-w-lg ">
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-3xl font-bold leading-7 text-gray-900 mb-6">
                Edit profile
              </h2>
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                
                <div className="sm:col-span-6">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    First name*
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      className="block w-full rounded-md border-0 py-1.5 leading-[1.6] outline-none transition-all duration-200 ease-linear text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                      defaultValue={user.firstName}
                      ref={firstNameRef}
                      required
                    />
                  </div>
                </div>
                <div className="sm:col-span-6">
                  <label
                    htmlFor="lastname"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Last name*
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="lastname"
                      id="lastname"
                      autoComplete="lastname"
                      className="block w-full rounded-md border-0 py-1.5 leading-[1.6] outline-none transition-all duration-200 ease-linear text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                      defaultValue={user.lastName}
                      ref={lastNameRef}
                      required
                    />
                  </div>
                </div>
                <div className="sm:col-span-6">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email*
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="Email"
                      id="Email"
                      autoComplete="Email"
                      className="block w-full rounded-md border-0 py-1.5 leading-[1.6] outline-none transition-all duration-200 ease-linear text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                      defaultValue={user.email}
                      ref={emailRef}
                      required
                    />
                  </div>
                </div>
                               
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 px-2">
              <button className="flex flex-row gap-3 font-bold text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-2 focus:outline-none focus:ring-lime-200  font-medium rounded-lg text-sm px-12 py-3 text-center mr-1 mb-2">
                Save
              </button>
              <Link to="/profile">
                <button className="ml-4 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 hover:text-black focus:ring-2 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                  <span className="relative px-6 py-2.5 transition-all ease-in duration-75 bg-slate-700  rounded-md group-hover:bg-opacity-0">
                    Back
                  </span>
                </button>
              </Link>
            </div>
        </form>
            </div>
            
            

            
          </div>
          <div className="px-4 py-4">
            <div className="flex gap-2 items-center text-gray-800r mb-4">
              {user.created && (
                <span>
                  Have account since {moment(user.created).format("ll")}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
