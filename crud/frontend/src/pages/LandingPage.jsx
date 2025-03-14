import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-6 text-gray-800">
      <header className="w-full max-w-6xl flex justify-between items-center py-4">
        <h1 className="text-3xl font-bold">Employee Manager</h1>
        <Link
          to="/allemployee"
          className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
        >
        Employees Record
        </Link>
      </header>

      <main className="flex-1 flex flex-col justify-center items-center text-center">
        <h2 className="text-4xl font-extrabold mb-4">Effortless Employee Management</h2>
        <p className="text-lg text-gray-600 max-w-2xl">
          Easily add, update, and delete employee records with a user-friendly interface.
          Keep track of your workforce efficiently.
        </p>
        <Link
          to="/employees"
          className="mt-6 px-6 py-3 bg-green-600 text-white text-lg rounded-lg shadow-lg hover:bg-green-700"
        >
          Get Started
        </Link>
      </main>

      <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold">Quick Add & Update</h3>
          <p className="text-gray-500">Easily add or modify employee data with a simple interface.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold">Secure & Reliable</h3>
          <p className="text-gray-500">Your employee records are safely stored and accessible.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h3 className="text-xl font-semibold">Fast Search & Filter</h3>
          <p className="text-gray-500">Find employee records instantly with search and filters.</p>
        </div>
      </section>
    </div>
  );
}
