import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function EmployeeForm() {
    const navigate = useNavigate()
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    department: "",
    salary: "",
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(employee)
    
    const response  = await axios.post("http://localhost:5400/employees/info",employee) 
   


    setEmployee({
     name: "",
     email: "",
     phone: "",
     position: "",
     department: "",
     salary: "",
   });

   toast.success("Employee added successfully!");
   navigate("/allemployee")
   
  };

  return (
    <>
       <Link to={"/"}> <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition m-6">Back to Home</button></Link> 
        <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Add Employee</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Name" required className="w-full p-2 border rounded" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" required className="w-full p-2 border rounded" onChange={handleChange} />
        <input type="text" name="phone" placeholder="Phone" required className="w-full p-2 border rounded" onChange={handleChange} />
        <input type="text" name="position" placeholder="Position" required className="w-full p-2 border rounded" onChange={handleChange} />
        <input type="text" name="department" placeholder="Department" required className="w-full p-2 border rounded" onChange={handleChange} />
        <input type="number" name="salary" placeholder="Salary" required className="w-full p-2 border rounded" onChange={handleChange} />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Submit</button>
      </form>
    </div>
    </>
   
  );
}
