import { useContext, useEffect } from "react";
import { UserContext } from "../context/userContext";
import { MdEdit, MdDelete } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Tasks = () => {
  const { userid } = useContext(UserContext);
  const { task, setTask } = useContext(UserContext);
  console.log("now the data is comming form task", task);
   const navigate = useNavigate()
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/todo/getTodos", {
          // http://localhost:4000/api/todo/create
          withCredentials: true,
        });
        // console.log(response.data.todos);
        setTask(response.data.todos);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);


  const handleDelete = async (id) => {

    try {
      console.log(id)
      const response = await axios.delete(`http://localhost:4000/api/todo/deleteTodo/${id}`, {
        withCredentials: true,
      })
      console.log(response)
      setTask((prevTasks) => prevTasks.filter((task) => task._id !== id));
      toast(response.data.message)

    } catch (error) {
      console.error("Error occured while Deleting ", Error)
      toast.error(error.response?.data?.message || "Error deleting task");
    }
  }

const handleEdit=(id)=>{
  console.log(id)
  navigate("/edit", { state: { taskId: id } });

}


  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-4">All Tasks</h2>

      {/* Conditional Rendering */}
      {task ? (
        task.length > 0 ? (
          <ul className="space-y-3">
            {task.map((task) => (
              <li key={task._id} className="p-4 rounded bg-gray-800">
                <p className="font-bold text-lg">{task.title}</p>
                <p className="text-gray-400">{task.description}</p>
                <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
                <p className={`text-sm mt-2 ${task.status === "completed" ? "text-green-400" : "text-yellow-400"}`}>
                  {task.status}
                </p>
                <div className="flex mt-3 gap-3">
                  <button className="text-blue-500 hover:text-blue-700" onClick={()=>{handleEdit(task._id)}} >
                    <MdEdit size={24} />
                  </button>

                  <button className="text-red-500 hover:text-red-700" onClick={() => {
                    handleDelete(task._id)
                  }}>
                    <MdDelete size={24} />
                  </button>

                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">No tasks available</p>
        )
      ) : (
        <p className="text-gray-400">Loading tasks...</p>
      )}
    </div>
  );
};

export default Tasks;