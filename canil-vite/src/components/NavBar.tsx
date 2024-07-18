import { Link } from "react-router-dom";
import { useState} from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <div className="">
      <nav className="bg-blue-500 dark:bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to={"/"} className="flex-shrink-0">
                <img src="/logo.png" className="w-12" />
              </Link>
              <div className="hidden md:flex space-x-4 ml-10">
                <Link
                  to="/"
                  className="text-white hover:text-gray-200 dark:text-gray-300 dark:hover:text-white"
                >
                  Saber sobre
                </Link>
                <Link
                  to="/animais"
                  className="text-white hover:text-gray-200 dark:text-gray-300 dark:hover:text-white"
                >
                  Animais
                </Link>
                <Link
                  to="/blog"
                  className="text-white hover:text-gray-200 dark:text-gray-300 dark:hover:text-white"
                >
                  Blog
                </Link>
                <Link
                  to="/entrar"
                  className="text-white hover:text-gray-200 dark:text-gray-300 dark:hover:text-white"
                >
                  Entrar
                </Link>
                <Link
                  to="/cadastro"
                  className="text-white hover:text-gray-200 dark:text-gray-300 dark:hover:text-white"
                >
                  Cadastrar
                </Link>
              </div>
            </div>
            <div className="flex items-center">
              <button
                id="darkModeToggle"
                className="p-2 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </button>
              <div className="md:hidden ml-4">
                <button
                  className="text-white hover:text-gray-200"
                  onClick={toggleMenu}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-blue-500 dark:bg-gray-800">
          <Link
            to="/"
            className="block p-4 text-white hover:text-gray-200 dark:text-gray-300 dark:hover:text-white"
          >
            Saber sobre
          </Link>
          <Link
            to="/animais"
            className="block p-4 text-white hover:text-gray-200 dark:text-gray-300 dark:hover:text-white"
          >
            Animais
          </Link>
          <Link
            to="/blog"
            className="block p-4 text-white hover:text-gray-200 dark:text-gray-300 dark:hover:text-white"
          >
            Blog
          </Link>
          <Link
            to="/entrar"
            className="block p-4 text-white hover:text-gray-200 dark:text-gray-300 dark:hover:text-white"
          >
            Entrar
          </Link>
          <Link
            to="/cadastro"
            className="block p-4 text-white hover:text-gray-200 dark:text-gray-300 dark:hover:text-white"
          >
            Cadastrar
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
