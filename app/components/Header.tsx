const navItems = [
  { label: 'Accueil', href: '#home' },
  { label: 'À propos', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => (
  <header className="fixed top-0 w-full bg-white shadow-md z-50">
    <div className="container mx-auto flex items-center px-6 py-4">
      
      {/* Logo à l’extrême gauche */}
      <div className="flex-shrink-0 mr-auto">
        <a href="#home" aria-label="Aller à l'accueil">
          <img src="/images/myless.svg" alt="Logo Myless" className="h-12 w-auto" />
        </a>
      </div>
      
      {/* Menu centré */}
      <nav className="flex-1">
        <ul className="flex justify-center space-x-10">
          {navItems.map(({ label, href }) => (
            <li key={href} className="group">
              <a
                href={href}
                className="
                  relative
                  inline-block
                  px-2 py-1
                  text-gray-700 font-semibold uppercase tracking-wider
                  transition-colors duration-200
                  hover:text-black
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A600FF]
                "
              >
                {label}
                {/* Soulignement animé */}
                <span
                  className="
                    absolute left-0 bottom-0
                    h-[2px] bg-[#A600FF]
                    w-0
                    group-hover:w-full
                    group-focus:w-full
                    transition-all duration-300 ease-out
                  "
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>
      

      <div className="ml-auto w-12" />
    </div>
  </header>
);

export default Header;
