import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function EmployeeRecord(props) {
const [employees, setemployees] = useState([])

const {id,setid} = props
const navigate = useNavigate()
    const fetchData = async ()=>{
      
       try{
        const response = await axios.get("http://localhost:5400/employees/getAllEmployees")
        // console.log(response.data)
        setemployees(response.data)
       
       }catch(err){
        console.error("error while fetching data",err)
       }
    }

    useEffect(()=>{
        fetchData()
    },[])

    useEffect(() => {
        console.log("Updated employees:", employees);
      }, [employees]);

      const handleDelete = async (id) => {
        try {
          await axios.delete(`http://localhost:5400/employees/delete/${id}`);
          setemployees(employees.filter((employee) => employee._id !== id)); 
          navigate("/"); 
          toast.error("Employee deleted successfully!",{ style: { backgroundColor: "red", color: "white" }});
        } catch (error) {
          console.error("Error deleting employee:", error);
        }
      };
    


    return (
      <>
      <Link to={"/"}> <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition m-6">Back to Home</button></Link> 

      <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
        <h2 className="text-3xl font-bold text-center mb-6">Employee Records</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-left">Phone</th>
                <th className="py-3 px-6 text-left">Position</th>
                <th className="py-3 px-6 text-left">Department</th>
                <th className="py-3 px-6 text-left">Salary</th>
                <th className="py-3 px-6 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {
                employees?.map((item,i)=>{
                    return(
                        <tr key={i} className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-6 text-left">{item.name}</td>
                        <td className="py-3 px-6 text-left">{item.email}</td>
                        <td className="py-3 px-6 text-left">{item.phone}</td>
                        <td className="py-3 px-6 text-left">{item.department}</td>
                        <td className="py-3 px-6 text-left">{item.position}</td>
                        <td className="py-3 px-6 text-left">${item.salary}</td>
                        <td className="py-3 px-6 text-center">
                       <Link to={`/edit/${id}`}>   <button
                        onClick={()=>setid(item._id)}   className="bg-green-500 text-white px-4 py-1 rounded mr-2 hover:bg-green-600">Edit</button>
                       </Link>
                       <button
              onClick={() => handleDelete(item._id)}
              className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
                         
                          
                        </td>
                      </tr>
                    )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
      </>
     
    );
  }
  