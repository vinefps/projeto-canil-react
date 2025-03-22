import { useEffect, useState } from "react";

const MainContent = () => {
  const dogs = [
    "bulldog-frances.jpg",
    "husky-siberiano.jpg",
    "rottweiler.jpg",
    "golden-retriever.jpg",
    "labrador-retriever.jpg",
    "poodle.jpg",
    "pug.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!isHovering) {
      const timer = setInterval(() => {
        setIsAnimating(true);
        setTimeout(() => {
          setCurrentImage((prevImage) => (prevImage + 1) % dogs.length);
          setIsAnimating(false);
        }, 500);
      }, 5000);
      
      return () => clearInterval(timer);
    }
  }, [dogs.length, isHovering]);

  const handleDotClick = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <div className="flex flex-col lg:flex-row w-full bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden rounded-2xl shadow-2xl">
      {/* Coluna da imagem - Versão Premium */}
      <div className="w-full lg:w-1/2 p-8 flex items-center justify-center relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}>
        {/* Background decorativo */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute -left-24 -top-24 w-64 h-64 rounded-full bg-blue-100 opacity-40 blur-3xl"></div>
          <div className="absolute -right-24 -bottom-24 w-64 h-64 rounded-full bg-red-100 opacity-40 blur-3xl"></div>
        </div>
        
        <div className="w-full h-96 lg:h-[520px] relative overflow-hidden rounded-2xl shadow-2xl group border-8 border-white">
          {dogs.map((dog, index) => (
            <img
              key={index}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out transform ${
                index === currentImage 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-110"
              } ${isAnimating ? "blur-sm" : "blur-0"}`}
              src={dog}
              alt={`Cão abandonado - ${dog.replace('.jpg', '')}`}
            />
          ))}
          
          {/* Overlay com gradiente premium */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 z-10 
                         group-hover:opacity-50 transition-opacity duration-500"></div>
          
          {/* Badge dos detalhes do cão */}
          <div className="absolute top-6 left-6 bg-white bg-opacity-90 p-3 rounded-lg shadow-lg z-30 
                         transform transition-all duration-500 group-hover:translate-y-2">
            <span className="text-sm font-semibold text-gray-900 block">{currentImage + 1}/{dogs.length}</span>
            <h3 className="text-lg font-bold text-gray-900">
              {dog => dogs[currentImage].replace('.jpg', '').split('-').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
            </h3>
          </div>
          
          {/* Navegação com animação */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 z-20 
                         bg-gradient-to-t from-black/80 to-transparent p-8 translate-y-full
                         group-hover:translate-y-0 transition-transform duration-500">
            {dogs.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentImage 
                    ? "bg-white scale-125 shadow-glow" 
                    : "bg-white/40 hover:bg-white/80"
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Controles laterais animados */}
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/80 w-12 h-12 
                     rounded-full flex items-center justify-center text-white hover:text-gray-800 backdrop-blur-sm
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
            onClick={() => setCurrentImage((prev) => (prev === 0 ? dogs.length - 1 : prev - 1))}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/80 w-12 h-12 
                     rounded-full flex items-center justify-center text-white hover:text-gray-800 backdrop-blur-sm
                     opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
            onClick={() => setCurrentImage((prev) => (prev === dogs.length - 1 ? 0 : prev + 1))}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Coluna do texto - Versão Premium */}
      <div className="w-full lg:w-1/2 bg-white p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute -right-24 -top-24 w-48 h-48 rounded-full bg-orange-100 opacity-30 blur-3xl"></div>
        <div className="absolute -left-24 -bottom-24 w-32 h-32 rounded-full bg-blue-100 opacity-30 blur-3xl"></div>
        
        {/* Tag de categoria */}
        <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-bold py-1 px-4 rounded-full w-fit shadow-md mb-6">
          <span className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            CONSCIENTIZAÇÃO
          </span>
        </div>
        
        <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-8 text-gray-900 leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-600">
            Desafio Crescente:
          </span>
          <br/>O Aumento Alarmante de Animais Abandonados no Brasil
        </h2>
        
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <div className="relative bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500 shadow-sm">
            <p className="italic font-medium mb-2">
              De acordo com a <span className="font-bold text-gray-900">Organização Mundial da Saúde (OMS)</span>:
            </p>
            <p className="text-2xl font-bold text-red-600">
              30 milhões de animais sem lar
            </p>
            <p>Esse é o número estimado no Brasil, entre cães e gatos.</p>
          </div>
          
          <p className="text-lg">
            O abandono de animais é um problema multifacetado, com diversas
            causas subjacentes. Questões socioeconômicas, falta de
            conscientização sobre a importância da guarda responsável, ausência
            de políticas públicas efetivas e até mesmo a reprodução
            descontrolada contribuem para essa triste realidade.
          </p>
          
          {/* Estatísticas em cards */}
          <div className="grid grid-cols-3 gap-4 my-8">
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-red-500">70%</div>
              <div className="text-sm text-gray-600">Abandono urbano</div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-red-500">10M</div>
              <div className="text-sm text-gray-600">Cães abandonados</div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-red-500">20M</div>
              <div className="text-sm text-gray-600">Gatos abandonados</div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 pt-6">
            <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              Como ajudar
            </button>
            <button className="px-8 py-4 bg-white text-gray-800 font-bold rounded-xl border-2 border-gray-300 hover:border-gray-400 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              Saiba mais
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
