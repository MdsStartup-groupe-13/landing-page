const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-sm">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <img src="/images/myless.svg" alt="Logo" className="h-10 w-auto" />
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex space-x-6 text-gray-700">
        <a href="#" className="hover:text-black">Home</a>
        <div className="relative group">
          <a href="#" className="hover:text-black flex items-center">
            A propos
          </a>
          {/* Dropdown Menu */}
          <div className="absolute left-0 mt-1 hidden group-hover:block bg-white shadow-md rounded-md">

          </div>
        </div>
        <a href="#contact" className="hover:text-black">Contact</a>
      </nav>

      {/* Icons */}
      <div className="flex items-center space-x-6 text-gray-700">
        {/* Search Icon */}
        <button aria-label="Search" className="flex items-center justify-center h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>

        {/* Cart Icon */}
        <button aria-label="Cart" className="flex items-center justify-center h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M6 6h15l-1.68 9.24A2 2 0 0117.36 17H8.64a2 2 0 01-1.96-1.76L5 6z"></path>
            <circle cx="9" cy="20" r="1"></circle>
            <circle cx="18" cy="20" r="1"></circle>
          </svg>
        </button>

        {/* User Icon */}
        <button aria-label="User" className="flex items-center justify-center h-8 w-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
