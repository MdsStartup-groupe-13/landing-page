import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white py-16">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="flex flex-col items-start">
  <div className="mb-4 flex justify-start" style={{ marginLeft: '-18px' }}>
    <Image src="/images/myless.svg" alt="Myless Logo" width={120} height={40} />
  </div>
  <p className="text-gray-400 mb-4">
    Organisez vos voyages en groupe facilement. Réservez vos destinations, partagez vos avis et gérez vos cagnottes en toute simplicité.
  </p>
  <p className="text-gray-400">
    &copy; {new Date().getFullYear()} Myless. Tous droits réservés.
  </p>
</div>


        {/* Liens rapides */}
        <div>
          <h4 className="text-xl font-bold mb-4">Liens rapides</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Accueil</a></li>
            <li><a href="#" className="hover:text-white">À propos</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <h4 className="text-xl font-bold mb-4">Suivez-nous</h4>
          <div className="flex space-x-4">
            {/* Icône Facebook */}
            <a href="#" aria-label="Facebook" className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-black hover:bg-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.07 3.763 9.261 8.643 9.879v-6.987H8.82v-2.892h1.823V9.671c0-1.804 1.06-2.794 2.681-2.794.778 0 1.598.139 1.598.139v1.76h-.899c-.886 0-1.16.552-1.16 1.12v1.351h1.973l-.315 2.892h-1.658v6.987C18.238 21.26 22 17.07 22 12z" />
              </svg>
            </a>

            {/* Icône Twitter */}
            <a href="#" aria-label="Twitter" className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-black hover:bg-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.162 5.656c-.793.352-1.644.591-2.54.697.913-.547 1.614-1.41 1.946-2.436-.854.505-1.798.872-2.805 1.069a4.518 4.518 0 0 0-7.691 4.118C7.688 8.94 4.064 7.056 1.64 3.978a4.514 4.514 0 0 0-.61 2.271c0 1.568.798 2.954 2.013 3.767-.74-.024-1.434-.226-2.045-.565v.057c0 2.191 1.56 4.017 3.63 4.434-.38.103-.779.158-1.19.158-.291 0-.575-.028-.854-.081.576 1.8 2.245 3.113 4.222 3.147a9.056 9.056 0 0 1-5.606 1.933c-.364 0-.723-.022-1.077-.064 2.003 1.284 4.38 2.034 6.928 2.034 8.313 0 12.857-6.894 12.857-12.87 0-.197-.004-.394-.012-.59a9.153 9.153 0 0 0 2.248-2.336z" />
              </svg>
            </a>

            {/* Icône Instagram */}
            <a href="#" aria-label="Instagram" className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-black hover:bg-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5C20.129 2 22 3.871 22 7.75v8.5C22 20.129 20.129 22 16.25 22h-8.5C3.871 22 2 20.129 2 16.25v-8.5C2 3.871 3.871 2 7.75 2zm8.5 1.5h-8.5C4.821 3.5 3.5 4.821 3.5 7.75v8.5c0 2.929 1.321 4.25 4.25 4.25h8.5c2.929 0 4.25-1.321 4.25-4.25v-8.5c0-2.929-1.321-4.25-4.25-4.25zm-4.25 4.25c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3zm0 1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm4.563-1.281c.345 0 .625-.28.625-.625s-.28-.625-.625-.625-.625.28-.625.625.28.625.625.625z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
