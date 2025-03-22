import { useState, useEffect } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Set active link based on current path
    setActiveLink(window.location.pathname);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // You would implement actual dark mode toggling logic here
  };

  // Navigation links data
  const navLinks = [
    { path: "/", label: "Início" },
    { path: "/animais", label: "Adotar" },
    { path: "/blog", label: "Blog" }
  ];

  // Auth links data
  const authLinks = [
    { path: "/entrar", label: "Entrar" },
    { path: "/cadastro", label: "Cadastrar", isPrimary: true }
  ];

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-white/90 shadow-lg' : 'bg-transparent'}`}>
      <nav className={`${scrolled ? 'py-2' : 'py-4'} transition-all duration-300`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              {/* Logo with animation */}
              <a href="/" className="flex-shrink-0 relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full opacity-0 group-hover:opacity-70 group-hover:blur transition duration-300"></div>
                <div className="relative flex items-center bg-white p-1 rounded-full">
                  <img src="/logo.png" className={`w-10 h-10 transition-all duration-300 ${scrolled ? 'w-8 h-8' : 'w-10 h-10'}`} alt="Pet Adoção" />
                </div>
              </a>
              
              {/* Site name */}
              <div className="ml-3">
                <h1 className={`font-bold transition-all duration-300 ${scrolled ? 'text-gray-900 text-lg' : 'text-orange-600 text-xl'}`}>
                  PetAdoção
                </h1>
                <p className={`text-xs text-gray-500 transition-opacity duration-300 ${scrolled ? 'opacity-0 h-0' : 'opacity-100'}`}>Adote um amigo</p>
              </div>
              
              {/* Desktop navigation */}
              <div className="hidden md:flex space-x-1 ml-10">
                {navLinks.map((link) => (
                  <a
                    key={link.path}
                    href={link.path}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeLink === link.path 
                        ? 'text-orange-600 bg-orange-50' 
                        : 'text-gray-700 hover:text-orange-500 hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Right side - auth links & controls */}
            <div className="flex items-center space-x-2">
              {/* Desktop auth links */}
              <div className="hidden md:flex items-center space-x-2">
                {authLinks.map((link) => (
                  <a
                    key={link.path}
                    href={link.path}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      link.isPrimary 
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5' 
                        : 'text-gray-700 hover:text-orange-500 hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              
              {/* Dark mode toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none"
              >
                {isDarkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
              
              {/* Mobile menu button */}
              <button
                onClick={toggleMenu}
                className="md:hidden p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none"
              >
                {isMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden transform transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white shadow-lg rounded-b-2xl border-t border-gray-100 px-2 py-3 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeLink === link.path 
                  ? 'text-orange-600 bg-orange-50' 
                  : 'text-gray-700 hover:text-orange-500 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          
          <div className="pt-2 mt-2 border-t border-gray-100">
            {authLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  link.isPrimary 
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white my-2' 
                    : 'text-gray-700 hover:text-orange-500 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden z-40"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default NavBar;
