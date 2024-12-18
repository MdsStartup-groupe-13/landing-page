const Header = () => {
    return (
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="text-2xl font-bold text-black">Plan'it.</div>
        <nav className="hidden md:flex space-x-6 text-black">
          <a href="#" className="hover:text-blue-500">Home</a>
          <a href="#" className="hover:text-blue-500">About</a>
          <a href="#" className="hover:text-blue-500">Packages</a>
          <a href="#" className="hover:text-blue-500">Contact Us</a>
        </nav>
        <div className="md:hidden">
          <button>☰</button> {/* Menu Burger */}
        </div>
      </header>
    );
  };
  
  export default Header;
  