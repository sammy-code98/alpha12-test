import { useRouteError, NavLink } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="text-center h-screen flex items-center justify-center flex-col">
      <h1 className="mb-4 text-6xl font-semibold text-danger">404</h1>
      <p className="mb-4 text-lg text-gray">Oops! Looks like you're lost.</p>
      <div className="animate-bounce">
        <svg
          className="mx-auto h-16 w-16 text-danger"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
          ></path>
        </svg>
      </div>
      <p className="mt-4 text-gray">
        Let's get you back{" "}
        <NavLink to="/" className="text-blue font-semibold underline">
          Home
        </NavLink>
        .
      </p>
    </div>
  );
}
