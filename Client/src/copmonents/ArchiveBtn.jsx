import { Link } from "react-router-dom";

function ArchiveBtn({ user, count }) {
  return (
    <div className="bg-gray-300 shadow rounded py-0.5 px-6 flex justify-center items-center hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
      <Link to={`/archive/${user}`}>
        <button>
          <div className="relative py-2">
            <div className="t-0 absolute bottom-8 left-24">
              <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                {count}
              </p>
            </div>
            <div className="flex flex-row gap-3 items-center text-gray-700 font-bold">
              <p>Archive</p>
              <svg
                className="w-6 h-6 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 8v1h4V8m4 7H4a1 1 0 0 1-1-1V5h14v9a1 1 0 0 1-1 1ZM2 1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"
                />
              </svg>
            </div>
          </div>
        </button>
      </Link>
    </div>
  );
}

export default ArchiveBtn;
