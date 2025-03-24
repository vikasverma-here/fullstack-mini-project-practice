import { Link } from "react-router-dom";
import homeImage from "../assets/home.jpg"
const Home = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 md:py-24">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Get Things Done, <br /> One Task at a Time
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mt-4">
            Simplify your day with Doist—organize tasks, track progress, and
            stay on top of everything. Free and easy to use.
          </p>
          <Link
            to="/SignUp"
            className="inline-block bg-blue-500 text-white text-lg font-medium px-6 py-3 mt-6 rounded-lg transition transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            src={homeImage}
            alt="Task Illustration"
            className="w-full md:w-3/4 drop-shadow-lg "
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-700">
          Why Doist?
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-16">
          {/* Feature 1 */}
          <div className="flex flex-col items-center">
            <div className="text-green-500 text-4xl">➕</div>
            <h3 className="text-xl font-semibold mt-4">Add Tasks in Seconds</h3>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Quickly jot down tasks with due dates and priorities.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col items-center">
            <div className="text-blue-500 text-4xl">📋</div>
            <h3 className="text-xl font-semibold mt-4">Stay Organized</h3>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Sort tasks by day, category, or importance—your way.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col items-center">
            <div className="text-orange-500 text-4xl">🏆</div>
            <h3 className="text-xl font-semibold mt-4">Track Your Wins</h3>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              See completed tasks and feel the progress.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-12 bg-gray-50 text-center">
        <p className="italic text-lg text-gray-600 px-6">
          "Doist made my chaotic day feel manageable!" – Priya, Freelancer
        </p>
      </section>

      {/* Footer Section */}
      <footer className="py-8 bg-gray-900 text-center text-white">
        <h3 className="text-xl font-semibold">Ready to take control of your day?</h3>
        <Link
          to="/login"
          className="inline-block bg-blue-500 text-white text-lg font-medium px-5 py-2 mt-4 rounded-md transition transform hover:scale-105"
        >
          Try Doist Now
        </Link>
        <div className="mt-6 text-gray-400 text-sm">
          <Link to="/about" className="mx-2 hover:text-white">About</Link> | 
          <Link to="/contact" className="mx-2 hover:text-white">Contact</Link> | 
          <Link to="/privacy" className="mx-2 hover:text-white">Privacy</Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;
