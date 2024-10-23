import React from "react";
import { Link } from "react-router-dom";

export default function BottomNav(): JSX.Element {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white py-6 dark:bg-bgDark shadow-md md:hidden">
      <div className="flex justify-around p-2">
        <Link to="/" className="text-gray-600 dark:text-white">
          Home
        </Link>
        <Link to="/events" className="text-gray-600 dark:text-white">
          Events
        </Link>
        <Link to="/speakers" className="text-gray-600 dark:text-white">
          Speakers
        </Link>
        <Link to="/reports" className="text-gray-600 dark:text-white">
          Reports
        </Link>
      </div>
    </div>
  );
}
