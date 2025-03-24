import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/userContext";

const Edit = () => {
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const { task } = useContext(UserContext); 
  const taskId = location.state?.taskId;

 
  useEffect(() => {
    if (taskId && task) {
      const taskToEdit = task.find((t) => t._id === taskId);
      if (taskToEdit) {
        setValue("title", taskToEdit.title);
        setValue("description", taskToEdit.description);
        setValue("dueDate", taskToEdit.dueDate);
        setValue("status", taskToEdit.status);
      } else {
        toast.error("Task nahi mila");
        navigate("/tasks"); 
      }
    }
  }, [taskId, task, setValue, navigate]);

  const onSubmit = async (data) => {
    try {
      const response = await axios.put(
        `http://localhost:4000/api/todo/updateTodo/${taskId}`,
        data,
        { withCredentials: true }
      );
      toast.success(response.data.message);
      navigate("/tasks");
    } catch (error) {
      toast.error(error.response?.data?.message || "Update mein gadbad ho gaya");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-4">Task Edit Karo</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-1">Title</label>
          <input
            {...register("title", { required: true })}
            className="w-full p-2 bg-gray-800 rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Description</label>
          <textarea
            {...register("description", { required: true })}
            className="w-full p-2 bg-gray-800 rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Due Date</label>
          <input
            type="date"
            {...register("dueDate", { required: true })}
            className="w-full p-2 bg-gray-800 rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Status</label>
          <select
            {...register("status", { required: true })}
            className="w-full p-2 bg-gray-800 rounded"
          >
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-blue-600 rounded hover:bg-blue-700"
        >
          Update Task
        </button>
      </form>
    </div>
  );
};

export default Edit;