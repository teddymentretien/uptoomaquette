import { FC, useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

const ThemeSelector: FC = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        if (darkMode) {
          document.documentElement.classList.remove("dark");
        } else {
          document.documentElement.classList.add("dark");
        }
    };

    return (
        <div className="flex items-center space-x-2 bg-gray-800 p-1 rounded-full w-fit mb-5">
            {/* Bouton Light */}
            <button
              onClick={toggleTheme}
              className={`flex items-center space-x-1 px-2 py-1 rounded-full transition ${
                !darkMode ? 'bg-gray-700 text-white' : 'text-gray-400'
              }`}
            >
              <SunIcon className="h-4 w-4 mr-1" />
              <span>Light</span>
            </button>
            {/* Bouton Dark */}
            <button
              onClick={toggleTheme}
              className={`flex items-center space-x-1 px-2 py-1 rounded-full transition ${
                darkMode ? 'bg-gray-700 text-white' : 'text-gray-400'
              }`}
            >
              <MoonIcon className="h-4 w-4 mr-1" />
              <span>Dark</span>
            </button>
        </div>
    )
}

export default ThemeSelector;