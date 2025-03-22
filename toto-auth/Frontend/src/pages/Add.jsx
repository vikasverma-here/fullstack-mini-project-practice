import { useForm } from "react-hook-form";

const Add = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Task Data:", data);
    reset(); // Clear the form after submission
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Task</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block font-semibold">Title</label>
          <input
            type="text"
            {...register("title", { required: "Title is required", minLength: 3, maxLength: 100 })}
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
          />
          {errors.title && <p className="text-red-400 text-sm">{errors.title.message}</p>}
        </div>

        {/* Description */}
        <div>
          <label className="block font-semibold">Description</label>
          <textarea
            {...register("description", { maxLength: 500 })}
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
          />
          {errors.description && <p className="text-red-400 text-sm">{errors.description.message}</p>}
        </div>

        {/* Status */}
        <div>
          <label className="block font-semibold">Status</label>
          <select
            {...register("status", { required: "Status is required" })}
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
          {errors.status && <p className="text-red-400 text-sm">{errors.status.message}</p>}
        </div>

        {/* Due Date */}
        <div>
          <label className="block font-semibold">Due Date</label>
          <input
            type="date"
            {...register("dueDate")}
            className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default Add;
