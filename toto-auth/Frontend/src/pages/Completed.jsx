// import React from 'react'

// const  = () => {
//   return (
//     <div>
//       Completed
//     </div>
//   )
// }

// export default Completed


import { useContext } from "react";
import { UserContext } from "../context/userContext";

const Completed = () => {
  const { task } = useContext(UserContext);

  // Filter karke sirf completed tasks nikaalo
  const completedTasks = task ? task.filter((t) => t.status === "completed") : [];

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-4">Completed Tasks</h2>

      {/* Conditional Rendering */}
      {completedTasks.length > 0 ? (
        <ul className="space-y-3">
          {completedTasks.map((task) => (
            <li key={task._id} className="p-4 rounded bg-gray-800">
              <p className="font-bold text-lg">{task.title}</p>
              <p className="text-gray-400">{task.description}</p>
              <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
              <p className="text-sm mt-2 text-green-400">{task.status}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400">Koi completed tasks nahi hain</p>
      )}
    </div>
  );
};

export default Completed;