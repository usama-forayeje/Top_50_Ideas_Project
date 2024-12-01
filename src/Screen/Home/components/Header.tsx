import { useNavigate } from "react-router-dom";

function Header() {
  const navigation = useNavigate()
    return (
      <div className="flex flex-row items-center justify-between p-4 border border-gray-300 rounded-lg shadow-md bg-gradient-to-r from-base-100 to-base-200 md:p-6">
        {/* New Idea Button */}
        <button onClick={() => navigation('/new')} className="flex items-center gap-2 btn btn-primary btn-sm md:btn-md">
          <span className="text-lg md:text-xl">+ New Idea</span>
        </button>
  
        {/* Title */}
        <h2 className="text-lg font-extrabold text-center md:text-2xl text-primary">
          🚀 Top 50 Ideas
        </h2>
  
        {/* Profile Section */}
        <div className="flex items-center gap-3">
          <img
            className="w-12 h-12 border-2 rounded-full border-primary"
            src="logo.jpg"
            alt="Logo"
          />
          <div className="flex-col hidden md:flex">
            <span className="text-sm font-bold text-gray-700">By</span>
            <span className="font-bold text-md text-primary">Usama Forayaje</span>
          </div>
        </div>
      </div>
    );
  }
  
  export default Header;
  