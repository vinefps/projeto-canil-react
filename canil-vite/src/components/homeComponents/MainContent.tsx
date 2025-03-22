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

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % dogs.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <div className="flex flex-col md:flex-row w-full bg-gray-50 overflow-hidden rounded-lg shadow-xl">
      {/* Coluna da imagem */}
      <div className="w-full md:w-1/2 p-6 flex items-center justify-center relative">
        <div className="w-full h-96 md:h-full relative overflow-hidden rounded-lg shadow-2xl">
          {dogs.map((dog, index: number) => (
            <img
              key={index}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out transform ${
                index === currentImage 
                  ? "opacity-100 scale-100" 
                  : "opacity-0 scale-110"
              } ${isAnimating ? "blur-sm" : "blur-0"}`}
              src={dog}
              alt={`Cão abandonado - ${dog.replace('.jpg', '')}`}
            />
          ))}
          
          {/* Overlay com gradiente */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70 z-10"></div>
          
          {/* Contador de slide */}
          <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium z-20">
            {currentImage + 1}/{dogs.length}
          </div>
          
          {/* Navegação por pontos */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
            {dogs.map((_, index: number) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImage ? "bg-white scale-125" : "bg-white/50"
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Coluna do texto */}
      <div className="w-full md:w-1/2 bg-white p-6 md:p-10 flex flex-col justify-center">
        <span className="text-red-600 font-semibold text-sm uppercase tracking-wider mb-2">Conscientização</span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 leading-tight">
          Desafio Crescente: O Aumento Alarmante de Animais Abandonados no Brasil
        </h2>
        
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p className="relative pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-red-500 before:rounded-full">
            A realidade dos animais abandonados no Brasil é um tema preocupante
            e cada vez mais urgente. De acordo com a <span className="font-semibold text-gray-800">Organização Mundial da
            Saúde (OMS)</span>, nosso país abriga aproximadamente <span className="font-semibold text-red-600">30 milhões de animais
            sem lar</span>, entre cães e gatos. Esses números alarmantes refletem uma
            tendência preocupante que precisa ser enfrentada com determinação e
            empenho.
          </p>
          
          <p>
            O abandono de animais é um problema multifacetado, com diversas
            causas subjacentes. Questões socioeconômicas, falta de
            conscientização sobre a importância da guarda responsável, ausência
            de políticas públicas efetivas e até mesmo a reprodução
            descontrolada contribuem para essa triste realidade. Enquanto esses
            fatores persistirem, a população de animais abandonados continuará
            crescendo.
          </p>
          
          <div className="flex gap-4 pt-6">
            <button className="px-6 py-3 bg-red-600 text-white font-medium rounded-lg shadow-lg hover:bg-red-700 transition-all duration-300 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              Como ajudar
            </button>
            <button className="px-6 py-3 bg-white text-gray-800 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-all duration-300">
              Saiba mais
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
