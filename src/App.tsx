import { useState } from 'react';
import './App.css';
import { ThemeContext } from './context/ThemeContext';
import HomeScreen from './Screen/Home/HomeScreen';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddNewScreen from './Screen/NewIdea/AddNewScreen';
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen/>
  },
  {
    path: "/new",
    element: <AddNewScreen/>
  }
])

function App() {
  const [theme, setTheme] = useState<string>('winter'); // Default theme set as "winter"

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div data-theme={theme} className="min-h-screen flex flex-col items-center p-4">
        <div className="max-w-2xl w-full">
          <RouterProvider router={router}>

          </RouterProvider>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
