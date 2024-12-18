import ContactForm from './ContactForm';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">Plan'it</h3>
          <p>
            Organisez vos voyages en groupe facilement. Réservez vos destinations, partagez vos avis et gérez vos cagnottes !
          </p>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
      <p className="text-center mt-8 text-gray-500">
        &copy; {new Date().getFullYear()} Plan'it. Tous droits réservés.
      </p>
    </footer>
  );
};

export default Footer;
