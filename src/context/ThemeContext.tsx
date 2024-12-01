import { createContext } from "react";

// Define the type for the context value
interface ThemeContextType {
    theme: string | null;
    setTheme: React.Dispatch<React.SetStateAction<string | null>>;
  }

export const ThemeContext = createContext<ThemeContextType>({
    theme: null,
    setTheme: () => {},
  });
