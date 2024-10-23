import { CgProfile } from "react-icons/cg";
import { FiCalendar, FiHome } from "react-icons/fi";
import { GoNote } from "react-icons/go";
import { MdOutlineRecordVoiceOver } from "react-icons/md";
import { Link } from "react-router-dom";

export default function BottomNav(): JSX.Element {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white  dark:bg-bgDark shadow-md md:hidden z-40">
      <div className="flex justify-around p-2">
        <Link
          to="/"
          className="text-gray-600 dark:text-white flex flex-col items-center space-y-2"
        >
          <FiHome className="text-xl text-gray dark:text-white" />
          <span>Home</span>
        </Link>
        <Link
          to="/events"
          className="text-gray-600 dark:text-white flex flex-col items-center space-y-2"
        >
          <FiCalendar className="text-xl text-gray dark:text-white" />
          <span>Events</span>
        </Link>
        <Link
          to="/speakers"
          className="text-gray-600 dark:text-white flex flex-col items-center space-y-2"
        >
          <MdOutlineRecordVoiceOver className="text-xl text-gray dark:text-white" />
          <span>Speakers</span>
        </Link>
        <Link
          to="/reports"
          className="text-gray-600 dark:text-white flex flex-col items-center space-y-2"
        >
          <GoNote className="text-xl text-gray dark:text-white" />
          <span>Reports</span>
        </Link>
        <Link
          to="/profile"
          className="text-gray-600 dark:text-white flex flex-col items-center space-y-2"
        >
          <CgProfile className="text-xl text-gray dark:text-white" />

          <span>Profile</span>
        </Link>
      </div>
    </div>
  );
}
