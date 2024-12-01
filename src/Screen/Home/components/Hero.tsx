import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { Lightbulb, Heart, ArrowDownCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const { theme, setTheme } = useContext(ThemeContext);
  const navigation = useNavigate()

  // List of themes
  const themes = [
    "light",
    "dark",
    "synthwave",
    "cyberpunk",
    "luxury",
    "corporate",
    "nord",
    "lemonade",
    "winter",
  ];

  return (
    <div className="py-12   min-h-[60vh] flex flex-col items-center">
      {/* Title Section */}
      <h2 className="text-4xl font-extrabold text-center md:text-5xl text-primary">
        🚀 Top 50 Productive Ideas for Your Startup
      </h2>
      <p className="max-w-3xl my-4 text-lg text-center text-gray-600 md:text-xl">
        <span className="font-bold text-secondary">Like your favorite ideas</span> and share your thoughts! No account required. Your creativity matters.
      </p>

      {/* Theme Selector Section */}
      <div className="flex flex-col items-center w-full mt-8">
        <label
          htmlFor="theme-select"
          className="flex items-center gap-2 text-lg font-medium text-gray-700"
        >
          <ArrowDownCircle size={24} className="text-info" />
          Choose Your Preferred Theme:
        </label>
        <select
          id="theme-select"
          onChange={(e) => setTheme(e.target.value)}
          value={theme || "default"}
          className="mt-4 text-gray-700 shadow-md select select-bordered border-primary w-60 md:w-72 focus:ring focus:ring-primary-focus"
        >
          <option value="default" disabled>
            Select Theme
          </option>
          {themes.map((theme) => (
            <option key={theme} value={theme}>
              {theme.charAt(0).toUpperCase() + theme.slice(1)} {/* Capitalize first letter */}
            </option>
          ))}
        </select>
      </div>

      {/* Call-to-Action Section */}
      <div className="flex flex-col items-center gap-4 mt-12">
        <p className="flex items-center gap-2 text-lg text-gray-500">
          <Lightbulb size={22} className="text-warning" />
          Start sharing your creative ideas now!
        </p>
        <button onClick={() => navigation('/new')} className="px-8 py-3 text-lg font-semibold transition shadow-lg btn btn-primary hover:scale-105">
          Get Started
        </button>
      </div>

      {/* Footer Section */}
      <div className="flex flex-col items-center mt-12 text-sm text-gray-400">
        <p className="flex items-center gap-2">
          <Heart size={18} className="text-red-500" />
          Empower your creativity with us.
        </p>
      </div>
    </div>
  );
}

export default Hero;
