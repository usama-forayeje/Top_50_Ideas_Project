import {
  ChevronLeft,
  Info,
  Send,
  Lightbulb,
  UserCircle,
  MessageSquare,
} from "lucide-react";
import Header from "../Home/components/Header";
import { useEffect, useState } from "react";
import { addIdea } from "../../api/api";
import moment from "moment";
import { useNavigate } from "react-router-dom";

function AddNewScreen() {
  const navigation = useNavigate();
  const [idea, setIdea] = useState<string>(""); // Idea state
  const [username, setUsername] = useState<string>(""); // Username state
  const [showAlert, setShowAlert] = useState(false); // Alert visibility state
  const [localUser, setLocalUser] = useState(false); // Check if username exists in local storage

  // Load username from localStorage on component mount
  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
      setUsername(savedUsername);
      setLocalUser(true);
    }
  }, []);

  // Click handler for submitting the idea
  const clickHandler = async () => {
    const newIdea = {
      id: crypto.randomUUID(), // Generate a unique id
      content: idea, // Idea content
      username, // Username
      createdAt: moment().format("DD MMM YYYY"), // Formatted date
    };

    try {
      const data = await addIdea(newIdea); // Send idea to API
      console.log("Idea saved successfully:", data);

      // Reset only the idea field
      setIdea("");
      setShowAlert(true); // Show success alert
      setTimeout(() => setShowAlert(false), 2000); // Hide alert after 2 seconds
    } catch (error) {
      console.error("Error submitting the idea:", error);
    }
  };

  return (
    <div className="min-h-screen p-6 md:p-10 bg-gradient-to-br from-base-200 to-base-300">
      <Header />
      {/* Success Alert */}
      {showAlert && (
        <div role="alert" className="mt-5 shadow-lg alert alert-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 stroke-current shrink-0"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Congratulations! Your idea has been added successfully.</span>
        </div>
      )}

      <div className="max-w-4xl p-6 mx-auto mt-5 bg-white rounded-lg shadow-lg md:p-10">
        {/* Back Button */}
        <button
          onClick={() => navigation("/")}
          className="flex items-center gap-3 px-4 mb-6 btn btn-outline btn-primary"
        >
          <ChevronLeft size={22} /> Back
        </button>

        {/* Heading Section */}
        <h2 className="text-3xl font-extrabold text-center md:text-4xl text-primary">
          Share Your Bright Idea 💡
        </h2>
        <p className="mt-4 text-sm text-center text-gray-600 md:text-lg">
          Tell us your idea and let's make it happen together!
        </p>

        {/* Idea Input Section */}
        <div className="flex flex-col gap-4 mt-10">
          <label className="flex items-center gap-2 text-lg font-medium">
            <Lightbulb size={24} className="text-warning" />
            Your Idea *
          </label>
          <textarea
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setIdea(e.target.value)
            }
            className="w-full textarea textarea-bordered border-primary focus:ring focus:ring-primary-focus"
            placeholder="Write your idea here..."
            rows={5}
            value={idea} // Bind the input value to idea state
          ></textarea>
          <small className="text-gray-500">
            <Info size={16} className="inline mr-1" />
            Be specific and brief. Your idea matters!
          </small>
        </div>

        {/* Username Input Section */}
        {!localUser && (
          <div className="flex flex-col gap-4 mt-8">
            <label className="flex items-center justify-between font-medium text-md">
              <span className="flex items-center gap-2">
                <UserCircle size={24} className="text-info" />
                Your Name *
              </span>
              <span className="flex items-center gap-2 text-sm text-gray-500">
                <Info size={16} /> No Sign-up Needed
              </span>
            </label>
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setUsername(e.target.value)
              }
              type="text"
              placeholder="Enter your name"
              className="w-full input input-bordered border-primary focus:ring focus:ring-primary-focus"
              value={username} // Bind the input value to username state
            />
          </div>
        )}

        {/* Submit Button */}
        <div className="flex items-center justify-center mt-10">
          <button
            className="flex items-center justify-center w-full gap-3 px-8 py-4 text-lg text-center transition transform btn btn-primary md:w-auto hover:scale-105 hover:shadow-md"
            onClick={clickHandler}
            disabled={!idea || (!localUser && !username)} // Button disabled if inputs are empty
          >
            <Send size={24} /> Submit Idea
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div className="flex items-center justify-center gap-4 mt-12 text-sm text-gray-400">
        <MessageSquare size={20} />
        <p>Your ideas are safe with us. Let's create something amazing!</p>
      </div>
    </div>
  );
}

export default AddNewScreen;
