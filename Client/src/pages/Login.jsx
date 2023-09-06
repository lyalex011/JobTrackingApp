import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import baseURL from "../Api";

let emptyForm = {
  email: "",
  password: "",
};

function Login({ setUser }) {
  const navigate = useNavigate();

  let [form, setForm] = useState(emptyForm);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const authResponse = await axios.post(baseURL+"/auth/login", form);
      const token = authResponse.data.token;

      if (!token) {
        setForm(emptyForm);
        return;
      }

      localStorage.setItem("token", token);

      const userResponse = await axios.get(baseURL+"/api/user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setUser(userResponse.data);

      navigate("/");
    } catch (err) {
      console.log(err);
      alert(err.response.data.error);
    }
  };

  return (
    <div >
        <div className="flex flex-row justify-center items-center mt-24">
      <form onSubmit={handleSubmit} className="w-3/4 sm:w-1/2 max-w-lg mt-32">
        <div className="space-y-12">
          <div className="border-b border-gray-150 pb-12">
            <h2 className="text-3xl font-bold leading-7 text-gray-900 mb-6">
              Welcome back!
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Already have an account?{" "}
              <Link className="text-sky-400 underline" to="/register">
                Register
              </Link>
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                    onChange={handleChange}
                    value={form.email}
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
                    onChange={handleChange}
                    value={form.password}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Link to="/">
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
            Log In
          </button>
        </div>
      </form>
     
        <img className="hidden lg:block w-1/2 mb-3" src="/public/images/all.avif" alt="" />
      
    </div>
    </div>
    
  );
}

export default Login;
