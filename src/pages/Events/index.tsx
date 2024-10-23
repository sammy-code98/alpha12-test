import { NavLink } from "react-router-dom";

export default function Events() {
  return (
    <div className="text-center h-screen flex items-center justify-center flex-col">
      <h1 className="mb-4 text-6xl font-semibold text-primary">Coming Soon</h1>
      <p className="mb-4 text-lg text-gray dark:text-white">
        Nothing is Wrong, This page is still under construction and we will
        inform you once it is ready
      </p>

      <p className="mt-4 text-gray dark:text-white">
        Let's get you back{" "}
        <NavLink to="/" className="text-primary font-semibold underline">
          Home
        </NavLink>
        .
      </p>
    </div>
  );
}
