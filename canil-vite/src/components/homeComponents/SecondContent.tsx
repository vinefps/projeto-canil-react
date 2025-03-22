import { useState } from "react";

const SecondContext = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  
  const benefits = [
    {
      id: 1,
      icon: "/dog2.jpg",
      title: "Saúde mental",
      description: "Cuidar de um animal de estimação pode ter benefícios terapêuticos, ajudando a reduzir o estresse, a ansiedade e a depressão.",
      color: "from-pink-500 to-red-500"
    },
    {
      id: 2,
      icon: "/dog1.jpg",
      title: "Combate ao abandono",
      description: "Ao adotar um animal de estimação, você pode ajudar a combater o abandono e o sofrimento dos animais que estão em abrigos ou nas ruas.",
      color: "from-orange-400 to-amber-500",
      featured: true
    },
    {
      id: 3,
      icon: "/dog3.jpg",
      title: "Diversão e atividade física",
      description: "Ter um animal de estimação pode trazer muita diversão e alegria para a sua vida. Brincar, passear e interagir com seu pet pode ser uma ótima forma de se exercitar e se divertir ao mesmo tempo.",
      color: "from-blue-400 to-teal-500"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Título com design moderno */}
        <div className="relative mb-16 text-center">
          <h2 className="inline-block text-3xl md:text-4xl font-extrabold text-gray-900 relative z-10">
            <span className="relative">
              POR QUE ADOTAR UM PET?
              <span className="absolute -bottom-2 left-0 right-0 h-3 bg-orange-400 opacity-30 rounded-full"></span>
            </span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-4"></div>
        </div>

        {/* Cards de benefícios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.id}
              className={`relative rounded-xl overflow-hidden transition-all duration-500 ${
                benefit.featured ? 'transform md:-translate-y-4' : ''
              } ${hoverIndex === index ? 'shadow-2xl scale-105' : 'shadow-lg'}`}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {/* Faixa colorida no topo */}
              <div className={`h-2 w-full bg-gradient-to-r ${benefit.color}`}></div>
              
              <div className="p-8 bg-white">
                {/* Ícone com efeito de gradiente */}
                <div className="relative mb-6 mx-auto w-20 h-20">
                  <div className={`absolute inset-0 bg-gradient-to-r ${benefit.color} rounded-full opacity-20 animate-pulse`}></div>
                  <img
                    src={benefit.icon}
                    className="absolute inset-0 w-full h-full object-cover rounded-full border-2 border-white shadow-md"
                    alt={benefit.title}
                  />
                </div>
                
                {/* Título do benefício */}
                <h3 className="text-xl font-bold text-gray-800 text-center mb-4">
                  {benefit.title}
                </h3>
                
                {/* Linha decorativa */}
                <div className={`h-0.5 w-12 mx-auto mb-4 bg-gradient-to-r ${benefit.color}`}></div>
                
                {/* Descrição */}
                <p className="text-gray-600 mb-8 text-center leading-relaxed">
                  {benefit.description}
                </p>
                
                {/* Botão de link estilizado */}
                <div className="flex justify-center">
                  <a 
                    href="/blog"
                    className={`group relative inline-flex items-center justify-center p-4 overflow-hidden rounded-full transition-all duration-300 ease-in-out ${
                      hoverIndex === index 
                        ? `bg-gradient-to-r ${benefit.color} text-white shadow-lg` 
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    <span className="relative flex items-center transition-all duration-300 ease-in-out group-hover:translate-x-1">
                      Saiba mais
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </a>
                </div>
                
                {/* Badge condicional para card destacado */}
                {benefit.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-400 to-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    Destaque
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Chamada para ação adicional */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Adotar um animal é uma decisão que transforma vidas - tanto a sua quanto a do pet. 
            Conheça mais histórias de adoção e inspire-se a fazer parte dessa mudança.
          </p>
          <a 
            href="/adotar" 
            className="inline-flex items-center px-8 py-3 rounded-lg bg-orange-500 text-white font-medium shadow-lg hover:bg-orange-600 transition-all duration-300 transform hover:-translate-y-1"
          >
            Quero adotar um pet
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SecondContext;
