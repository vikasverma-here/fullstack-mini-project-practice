

const Profile = () => {
    const user = {
      username: "Vikas",
      email: "vikas@example.com",
      age: 25
    };
  
    return (
      <div className="absolute top-16 right-4 w-64 h-auto bg-[#101828] bg-opacity-95 text-white shadow-xl p-6 border border-gray-700 rounded-lg z-50">
        <h2 className="text-lg font-bold mb-3">User Profile</h2>
        <p className="mb-2"><strong>Username:</strong> {user.username}</p>
        <p className="mb-2"><strong>Email:</strong> {user.email}</p>
        <p><strong>Age:</strong> {user.age}</p>
      </div>
    );
  };
  
  export default Profile;

  
  