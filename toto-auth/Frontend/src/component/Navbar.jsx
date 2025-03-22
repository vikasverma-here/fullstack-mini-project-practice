import { NavLink, Link } from "react-router-dom";
import Profile from "../pages/Profile";
import { useState } from "react";

const Navbar = () => {
    const [showProfile, setShowProfile] = useState(false);
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      {/* Logo */}
      <Link to="/">
        <div className="text-xl font-bold">Doist</div>
      </Link>

      {/* Navigation Links */}
      <ul className="flex space-x-6 items-center">
        <li>
          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              `hover:text-blue-400 ${isActive ? "text-blue-400 font-semibold" : ""}`
            }
          >
            Tasks
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/add"
            className={({ isActive }) =>
              `hover:text-blue-400 ${isActive ? "text-blue-400 font-semibold" : ""}`
            }
          >
            Add
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/completed"
            className={({ isActive }) =>
              `hover:text-blue-400 ${isActive ? "text-blue-400 font-semibold" : ""}`
            }
          >
            Completed
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-blue-400 ${isActive ? "text-blue-400 font-semibold" : ""}`
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `hover:text-blue-400 ${isActive ? "text-blue-400 font-semibold" : ""}`
            }
          >
            Login
          </NavLink>
        </li>
        <li>
          
            <img
              onClick={() => setShowProfile(!showProfile)}
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-white hover:border-blue-400"
            />
          
        </li>
      </ul>
      {showProfile && <Profile />}
    </nav>
  );
};

export default Navbar;
