import { useState, useEffect } from "react";

const SecondContext = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  
  // Monitorar visibilidade para animar componentes ao entrar na viewport
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.2 });
    
    const section = document.getElementById('adoption-benefits');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  
  // Benefícios da adoção - com design revisado
  const benefits = [
    {
      id: 1,
      icon: "💗",
      title: "Saúde Mental",
      mainPoints: [
        "Redução de 45% nos níveis de estresse",
        "Melhora no quadro de depressão",
        "Aumento da produção de endorfina"
      ],
      description: "Os animais de estimação oferecem companhia constante e amor incondicional, ajudando a reduzir o estresse, a ansiedade e a depressão. O simples ato de acariciar um pet libera hormônios que promovem sensação de bem-estar.",
      color: "from-rose-500 to-pink-600",
      gradient: "bg-gradient-to-tr from-rose-50 to-pink-50",
      border: "border-rose-100",
      highlight: "bg-rose-100",
      lightColor: "text-rose-600",
      darkColor: "text-rose-700",
      stats: "45%",
      statsLabel: "Redução de estresse",
      image: "/dog2.jpg"
    },
    {
      id: 2,
      icon: "🏠",
      title: "Combate ao Abandono",
      mainPoints: [
        "Mais de 30 milhões de animais abandonados",
        "Superlotação nos abrigos",
        "Adoção responsável salva vidas"
      ],
      description: "Ao adotar um animal de estimação, você ajuda diretamente a reduzir o número de animais abandonados. Cada adoção abre espaço para que outro animal seja resgatado e tenha a chance de encontrar um lar amoroso.",
      color: "from-amber-500 to-orange-600",
      gradient: "bg-gradient-to-tr from-amber-50 to-orange-50",
      border: "border-amber-100",
      highlight: "bg-amber-100",
      lightColor: "text-amber-600",
      darkColor: "text-amber-700",
      featured: true,
      stats: "500+",
      statsLabel: "Adoções anuais",
      image: "/dog1.jpg"
    },
    {
      id: 3,
      icon: "🌟",
      title: "Atividade Física",
      mainPoints: [
        "30 minutos de caminhada diária",
        "Brincadeiras ativas e divertidas",
        "Motivação para manter-se em movimento"
      ],
      description: "Ter um animal de estimação incentiva um estilo de vida mais ativo. Passear com seu cão, brincar regularmente ou mesmo os cuidados diários aumentam naturalmente seu nível de atividade física, trazendo benefícios para a saúde.",
      color: "from-blue-500 to-indigo-600",
      gradient: "bg-gradient-to-tr from-blue-50 to-indigo-50",
      border: "border-blue-100",
      highlight: "bg-blue-100",
      lightColor: "text-blue-600",
      darkColor: "text-blue-700",
      stats: "30min",
      statsLabel: "Atividade diária",
      image: "/dog3.jpg"
    }
  ];
  
  // Depoimentos de adotantes
  const testimonials = [
    {
      id: 1,
      name: "Mariana Silva",
      avatar: "/dog1.jpg",
      role: "Adotou Max em 2022",
      quote: "Adotar o Max mudou completamente minha vida. Ele trouxe alegria, amor e me ensinou sobre responsabilidade. A saúde mental melhorou significativamente desde que ele chegou."
    },
    {
      id: 2,
      name: "Pedro Almeida",
      avatar: "/dog3.jpg",
      role: "Adotou Luna em 2023",
      quote: "Luna era um animal assustado quando a adotamos, mas com amor e paciência, ela se transformou. Ver essa evolução é emocionante. Agora somos inseparáveis e nossas caminhadas diárias são o melhor momento do dia."
    },
    {
      id: 3,
      name: "Juliana Costa",
      avatar: "/dog2.jpg",
      role: "Adotou Thor em 2021",
      quote: "Adotar o Thor foi a melhor decisão que tomei. Além de ganhar um companheiro fiel, percebi como pequenos gestos podem fazer grande diferença no problema do abandono animal."
    }
  ];

  return (
    <section id="adoption-benefits" className="py-24 px-4 relative overflow-hidden">
      {/* Fundo com gradiente sofisticado */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 z-0"></div>
      
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-amber-100 to-amber-50 rounded-full opacity-30 blur-3xl -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-full opacity-30 blur-3xl translate-y-1/3 -translate-x-1/4"></div>
      
      {/* Padrão de pegadas sutil */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i} 
            className="absolute w-10 h-10" 
            style={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.floor(Math.random() * 360)}deg)` 
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
              <path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5.3-86.2 32.6-96.8 70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3 29.1 51.7 10.2 84.1-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5 46.9 53.9 32.6 96.8-52.1 69.1-84.4 58.5z"/>
            </svg>
          </div>
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Cabeçalho de seção com design exclusivo */}
        <div className={`text-center max-w-4xl mx-auto mb-20 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-200 mb-4">
            <span className="bg-gradient-to-r from-orange-600 to-amber-600 text-transparent bg-clip-text text-sm font-bold">POR QUE ADOTAR?</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900">
            <span className="relative inline-block">
              <span className="relative z-10">Transforme vidas</span>
              <span className="absolute -bottom-1.5 left-0 right-0 h-3 bg-amber-300/30 -z-10 rounded"></span>
            </span>
            {" "}
            <span className="bg-gradient-to-r from-amber-600 to-orange-600 text-transparent bg-clip-text">com a adoção</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            A adoção não só oferece um lar para um animal necessitado, mas também 
            traz inúmeros benefícios para você e sua família. Descubra como esse 
            ato de amor pode transformar positivamente sua vida.
          </p>
          
          {/* Navegação por tabs para alternar benefícios */}
          <div className="flex flex-wrap justify-center gap-2 mt-10">
            {benefits.map((benefit, index) => (
              <button
                key={benefit.id}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeTab === index 
                    ? `bg-gradient-to-r ${benefit.color} text-white shadow-md scale-105` 
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setActiveTab(index)}
              >
                <span className="flex items-center gap-2">
                  <span>{benefit.icon}</span>
                  <span>{benefit.title}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
        
        {/* Benefícios da adoção - seção premium */}
        <div className={`grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch mb-24 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Coluna principal - benefício destacado */}
          <div className="lg:col-span-3 h-full">
            <div 
              className={`h-full rounded-3xl ${benefits[activeTab].gradient} p-8 shadow-lg border ${benefits[activeTab].border} transform transition-all duration-700 overflow-hidden relative`}
            >
              {/* Elementos decorativos */}
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-full ${benefits[activeTab].highlight} opacity-50 blur-3xl -translate-y-1/2 translate-x-1/3`}></div>
              <div className={`absolute -bottom-16 -left-16 w-48 h-48 rounded-full ${benefits[activeTab].highlight} opacity-50 blur-3xl`}></div>
              
              <div className="relative z-10">
                {/* Cabeçalho do benefício */}
                <div className="flex items-center gap-4 mb-6">
                  <span className={`flex items-center justify-center rounded-xl text-2xl p-3 ${benefits[activeTab].highlight}`}>
                    {benefits[activeTab].icon}
                  </span>
                  <div>
                    <h3 className={`text-3xl font-bold ${benefits[activeTab].darkColor}`}>
                      {benefits[activeTab].title}
                    </h3>
                    <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${benefits[activeTab].color} mt-2`}></div>
                  </div>
                </div>
                
                {/* Conteúdo principal */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Texto e detalhes */}
                  <div className="space-y-6">
                    <p className={`text-lg leading-relaxed text-gray-700`}>
                      {benefits[activeTab].description}
                    </p>
                    
                    {/* Lista de pontos principais */}
                    <ul className="space-y-3">
                      {benefits[activeTab].mainPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${benefits[activeTab].color} flex-shrink-0 flex items-center justify-center text-white mt-0.5`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Estatística destacada */}
                    <div className={`${benefits[activeTab].highlight} rounded-xl p-6 inline-block`}>
                      <div className={`text-4xl font-extrabold ${benefits[activeTab].darkColor}`}>
                        {benefits[activeTab].stats}
                      </div>
                      <div className="text-gray-700 font-medium">
                        {benefits[activeTab].statsLabel}
                      </div>
                    </div>
                  </div>
                  
                  {/* Imagem */}
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${benefits[activeTab].color} rounded-2xl transform rotate-3 scale-95 opacity-70`}></div>
                    <img 
                      src={benefits[activeTab].image} 
                      alt={benefits[activeTab].title} 
                      className="w-full h-full object-cover rounded-2xl relative z-10 shadow-xl"
                    />
                    
                    {/* Badge sobre a imagem */}
                    <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-md text-sm font-medium">
                      <span className={`${benefits[activeTab].lightColor}`}>Disponível para adoção</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Coluna lateral - depoimentos */}
          <div className="lg:col-span-2 flex flex-col">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.616a1 1 0 01.894-1.79l1.599.8L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z" clipRule="evenodd" />
                </svg>
                Histórias de Adoção
              </h3>
              
              <div className="space-y-6 flex-grow">
                {testimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id}
                    className="p-5 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200"
                  >
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border-2 border-amber-300">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic relative">
                      <span className="absolute -top-3 -left-1 text-amber-300 text-4xl">"</span>
                      <span className="relative z-10">{testimonial.quote}</span>
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <a 
                  href="/depoimentos" 
                  className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700"
                >
                  Ver mais histórias
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Seção de chamada para ação */}
        <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background com gradiente e overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 opacity-90"></div>
            <div className="absolute inset-0 bg-[url('/dog1.jpg')] bg-cover bg-center mix-blend-overlay"></div>
            
            <div className="relative z-10 py-16 px-8 md:px-12 text-center text-white">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                  Pronto para mudar uma vida?
                </h3>
                <p className="text-xl mb-10 text-white/90">
                  Adotar um animal é uma decisão que transforma vidas - tanto a sua quanto a do pet. 
                  Conheça mais histórias de adoção e inspire-se a fazer parte dessa mudança.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/adotar" 
                    className="px-8 py-4 bg-white text-amber-600 font-bold rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    Quero adotar um pet
                  </a>
                  <a 
                    href="/como-funciona" 
                    className="px-8 py-4 bg-transparent text-white border-2 border-white/50 font-bold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                    Como funciona
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondContext;
