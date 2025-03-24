// import React from 'react'

// const Contact = () => {
//   return (
//     <div>
//       contact 
//     </div>
//   )
// }

// export default Contact



import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Backend nahi hai toh data console mein log karo
    console.log("Contact Form Data:", data);
    alert("Form submit ho gaya! Data console mein check kar.");
    reset(); // Form reset karo
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Field */}
        <div>
          <label className="block mb-1">Name</label>
          <input
            {...register("name", { required: "Name toh bharna padega bhai" })}
            className="w-full p-2 bg-gray-800 rounded text-white"
            placeholder="Apna naam daal"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email bhi chahiye",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Thik se email daal",
              },
            })}
            className="w-full p-2 bg-gray-800 rounded text-white"
            placeholder="example@email.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label className="block mb-1">Message</label>
          <textarea
            {...register("message", { required: "Message toh likh bhai" })}
            className="w-full p-2 bg-gray-800 rounded text-white"
            rows="4"
            placeholder="Jo bolna hai likh de"
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-2 bg-blue-600 rounded hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;