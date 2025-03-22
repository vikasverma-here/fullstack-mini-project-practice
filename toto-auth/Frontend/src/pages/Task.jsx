const Tasks = () => {
    const tasks = [
      { id: 1, title: "Learn React", description: "Complete React hooks tutorial", status: "pending", dueDate: "2025-03-25" },
      { id: 2, title: "Build Todo App", description: "Create a simple task manager", status: "in-progress", dueDate: "2025-03-28" },
      { id: 3, title: "Read a Book", description: "Read 'Clean Code' by Robert C. Martin", status: "completed", dueDate: "2025-04-01" },
    ];
  
    return (
      <div className="max-w-2xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg mt-10">
        <h2 className="text-2xl font-bold mb-4">All Tasks</h2>
  
        {/* Tasks List */}
        <ul className="space-y-3">
          {tasks.map((task) => (
            <li key={task.id} className="p-4 rounded bg-gray-800">
              <p className="font-bold text-lg">{task.title}</p>
              <p className="text-gray-400">{task.description}</p>
              <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
              <p className={`text-sm mt-2 ${task.status === "completed" ? "text-green-400" : "text-yellow-400"}`}>
                {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Tasks;
  