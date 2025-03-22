import { useState } from "react";

const Third = () => {
  // Definindo explicitamente os tipos para evitar erros de TypeScript
  const [hoverFirst, setHoverFirst] = useState<boolean>(false);
  const [hoverSecond, setHoverSecond] = useState<boolean>(false);

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-white via-white to-orange-50">
      <div className="max-w-7xl mx-auto">
        {/* Primeira seção */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
          {/* Imagem com efeitos avançados */}
          <div 
            className="relative"
            onMouseEnter={() => setHoverFirst(true)}
            onMouseLeave={() => setHoverFirst(false)}
          >
            {/* Formas decorativas */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-orange-500/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-red-500/10 rounded-full blur-xl"></div>
            
            {/* Bloco de fundo rotacionado com animação */}
            <div 
              className={`absolute origin-center rotate-12 bg-gradient-to-tr from-orange-500 to-amber-500 w-full h-64 lg:h-96 rounded-lg transition-all duration-700 ease-in-out ${
                hoverFirst ? 'rotate-6 scale-105' : 'rotate-12'
              }`}
            ></div>
            
            {/* Imagem principal */}
            <div className="relative w-full h-[400px] lg:h-[480px] translate-y-8 translate-x-4">
              <img
                src="/dog3.jpeg"
                className={`rounded-xl shadow-2xl h-full w-full object-cover transition-all duration-700 ${
                  hoverFirst ? 'translate-y-0 translate-x-0 scale-105' : 'translate-y-8 translate-x-4'
                }`}
                alt="Cachorro fofo esperando adoção"
              />
              
              {/* Pequenos detalhes decorativos */}
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Conteúdo de texto com elementos interativos */}
          <div className="flex flex-col lg:pl-12">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-8 h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600 font-bold text-lg uppercase tracking-wider">Sobre Nós</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Nós Temos o <span className="relative inline-block">
                <span className="relative z-10">Cão Perfeito</span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-orange-300 opacity-40 -z-10"></span>
              </span> Para Você
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Se você está procurando o seu companheiro canino ideal, o nosso site
              é o lugar certo para encontrar o cão perfeito para você. Com uma
              ampla variedade de cães disponíveis para adoção, temos certeza de
              que você encontrará um amigo fiel e amoroso para compartilhar a
              vida.
            </p>
            
            {/* Lista de benefícios com ícones */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-start space-x-3">
                <div className="mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-600">Processo de adoção simplificado</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-600">Acompanhamento pós-adoção</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-600">Cães vacinados e castrados</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="mt-1 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-600">Orientação veterinária inicial</p>
              </div>
            </div>
            
            {/* Botão estilizado */}
            <a
              href="/animais"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 p-0.5 text-sm font-medium text-white hover:text-white focus:outline-none focus:ring-4 focus:ring-orange-300 self-start"
            >
              <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-300 ease-in-out group-hover:bg-opacity-0 text-orange-700 group-hover:text-white">
                <span className="flex items-center">
                  Saber Mais
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </span>
            </a>
          </div>
        </div>
        
        {/* Segunda seção */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Conteúdo de texto com elementos interativos (ordem invertida em desktop) */}
          <div className="flex flex-col lg:order-last lg:pl-12">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-8 h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600 font-bold text-lg uppercase tracking-wider">Encontre um Amigo</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Venha adotar um <span className="relative inline-block">
                <span className="relative z-10">amigo</span>
                <span className="absolute -bottom-2 left-0 right-0 h-3 bg-orange-300 opacity-40 -z-10"></span>
              </span> de quatro patas
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nosso site tem uma interface fácil de usar que permite que você
              filtre cães por raça, tamanho, idade e localização, tornando mais
              fácil encontrar o cão perfeito para você. Cada perfil fornece informações detalhadas sobre 
              personalidade, história e necessidades específicas, permitindo que você tome uma
              decisão informada sobre qual cão é adequado para sua família.
            </p>
            
            {/* Estatísticas em cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-10">
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-orange-500">100+</div>
                <div className="text-gray-600 text-sm">Cães disponíveis</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-orange-500">500+</div>
                <div className="text-gray-600 text-sm">Adoções realizadas</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center sm:col-span-1 col-span-2">
                <div className="text-3xl font-bold text-orange-500">98%</div>
                <div className="text-gray-600 text-sm">De satisfação</div>
              </div>
            </div>
            
            {/* Botão estilizado */}
            <a
              href="/animais"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 p-0.5 text-sm font-medium text-white hover:text-white focus:outline-none focus:ring-4 focus:ring-orange-300 self-start"
            >
              <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-300 ease-in-out group-hover:bg-opacity-0 text-orange-700 group-hover:text-white">
                <span className="flex items-center">
                  Conhecer nossos cães
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </span>
            </a>
          </div>
          
          {/* Imagem com efeitos avançados */}
          <div 
            className="relative lg:order-first"
            onMouseEnter={() => setHoverSecond(true)}
            onMouseLeave={() => setHoverSecond(false)}
          >
            {/* Formas decorativas */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-orange-500/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-red-500/10 rounded-full blur-xl"></div>
            
            {/* Bloco de fundo rotacionado com animação */}
            <div 
              className={`absolute origin-center -rotate-12 bg-gradient-to-tr from-orange-500 to-amber-500 w-full h-64 lg:h-96 rounded-lg transition-all duration-700 ease-in-out ${
                hoverSecond ? '-rotate-6 scale-105' : '-rotate-12'
              }`}
            ></div>
            
            {/* Imagem principal */}
            <div className="relative w-full h-[400px] lg:h-[480px] translate-y-8 -translate-x-4">
              <img
                src="/dog2.jpeg"
                className={`rounded-xl shadow-2xl h-full w-full object-cover transition-all duration-700 ${
                  hoverSecond ? 'translate-y-0 translate-x-0 scale-105' : 'translate-y-8 -translate-x-4'
                }`}
                alt="Cachorro carinhoso esperando um lar"
              />
              
              {/* Badge decorativo */}
              <div className="absolute top-4 right-4 bg-white py-1 px-3 rounded-full shadow-lg">
                <span className="text-orange-600 text-sm font-medium">Adote agora</span>
              </div>
              
              {/* Dados do pet em card flutuante */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-xl p-4 w-48">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Disponível</span>
                </div>
                <h3 className="text-gray-900 font-bold">Tommy</h3>
                <p className="text-gray-500 text-sm">Labrador, 2 anos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Third;
