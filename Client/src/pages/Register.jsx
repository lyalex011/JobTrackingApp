import { Link } from "react-router-dom";



function Register() {

    
    return ( 

        <div className="flex justify-center" >
             <form className="w-1/2 max-w-lg mt-32">
      <div className="space-y-12">
        

        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-3xl font-bold leading-7 text-gray-900 mb-6">Sign Up for Free</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">You are only one step from taking control of your job search</p>
          <p className="mt-1 text-sm leading-6 text-gray-600">Already have an account? <a className="text-sky-400 underline" href="">Log In</a></p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address*
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>


            <div className="col-span-full">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password (At least: 8 characters, 1 number, 1 upper, 1 lower)*
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="password"
                  id="password"
                  autoComplete="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Confirm Password*
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="password"
                  id="password"
                  autoComplete="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            
            

            
          </div>
        </div>

        
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Link to='/'>
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        </Link>
        <button
          type="submit"
          className="rounded-md bg-sky-800 px-3 py-2 text-sm font-semibold text-black shadow-sm bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign Up
        </button>
      </div>
    </form>
 
        </div>
     );
}

export default Register;