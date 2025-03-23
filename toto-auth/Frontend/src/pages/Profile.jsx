import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleclick = async () => {
    try {
      const response = await axios.post("http://localhost:4000/api/auth/logout", {}, {
        withCredentials: true, // Ensure cookies are sent and received
      });

      if (response.data.success) {
        navigate("/login"); // Redirect user to login page after logout
      } else {
        console.error("Logout failed:", response.data.message);
      }
    } catch (error) {
      console.error("Logout error:", error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="absolute top-16 right-4 w-80 h-auto bg-[#101828] bg-opacity-95 text-white shadow-xl p-6 border border-gray-700 rounded-lg z-50">
      <h2 className="text-lg font-bold mb-3"></h2>

      {user ? (
        <>
          <p className="mb-2"><strong>Username:</strong> {user.userName}</p>
          <p className="mb-2"><strong>Email:</strong> {user.email}</p>
          <p className="mb-2"><strong>Age:</strong> {user.age}</p>
          <button className="mt-2 font-bold text-red-600 border-2 px-3 py-1 rounded " onClick={handleclick}>
            LogOut
          </button>
        </>
      ) : (
        <p className="text-gray-400">No user logged in</p>
      )}
    </div>
  );
};

export default Profile;
