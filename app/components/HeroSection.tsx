import Image from 'next/image';

const HeroSection = () => {
    return (
      <section className="bg-gray-100 p-8 text-center md:text-left">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Let’s Enjoy Your Desired Trip With  <span className="text-orange-500">Plan'it</span>
            </h1>
            <p className="text-gray-600 mb-6">
              "Man cannot discover new oceans unless he has the courage to lose sight of the shore."
            </p>
            <div className="flex items-center">
              
              <button className="bg-blue-500 text-white p-3 rounded-r-md">
                Planifiez votre voyage
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <Image
              src="/images/hero-image.png" 
              alt="Hero Image"
              className="rounded-lg shadow-lg"
              width={500} 
              height={500} 
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  