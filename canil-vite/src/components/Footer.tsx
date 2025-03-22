import { useState } from 'react';

function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  
  const socialMedia = [
    { name: 'Instagram', icon: '/instagram.jpg', url: 'https://www.instagram.com', color: 'from-purple-500 to-pink-500' },
    { name: 'Facebook', icon: '/facebook.jpg', url: 'https://www.facebook.com', color: 'from-blue-600 to-blue-700' },
    { name: 'Twitter', icon: '/twitter.jpg', url: 'https://www.twitter.com', color: 'from-blue-400 to-blue-500' },
    { name: 'YouTube', icon: '/youtube.jpg', url: 'https://www.youtube.com', color: 'from-red-600 to-red-700' }
  ];
  
  const products = [
    { name: 'Ração Seca', url: '/produtos/racao-seca' },
    { name: 'Sachê', url: '/produtos/sache' },
    { name: 'Lata', url: '/produtos/lata' },
    { name: 'Cuidado oral', url: '/produtos/cuidado-oral' },
    { name: 'Snack', url: '/produtos/snack' }
  ];
  
  const tips = [
    { name: 'Adoção', url: '/dicas/adocao' },
    { name: 'Cuidados', url: '/dicas/cuidados' },
    { name: 'Alimentação', url: '/dicas/alimentacao' },
    { name: 'Comportamento', url: '/dicas/comportamento' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-blue-500 to-blue-600 pt-16 pb-8">
      {/* Elemento decorativo ondulado no topo */}
      <div className="absolute top-0 left-0 right-0 transform -translate-y-full h-16 overflow-hidden">
        <svg className="absolute bottom-0 w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#3B82F6" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,229.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      {/* Padrão de pegadas sutis no background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="w-12 h-12 absolute top-20 left-12 transform rotate-12">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"/></svg>
        </div>
        <div className="w-8 h-8 absolute bottom-40 right-36 transform -rotate-12">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor"><path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z"/></svg>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        {/* Conteúdo principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logotipo e informações da empresa */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-white rounded-full shadow-md p-2">
                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <h2 className="text-xl font-bold text-white">PetAdoção</h2>
            </div>
            
            <p className="text-blue-100">
              Conectando animais que precisam de um lar com pessoas que querem amar e cuidar.
            </p>
            
            <div className="pt-2">
              <div className="flex items-center space-x-3 text-blue-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Av. dos Animais, 123 - SP</span>
              </div>
              <div className="flex items-center space-x-3 mt-2 text-blue-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>(11) 4002-8922</span>
              </div>
            </div>
          </div>
          
          {/* Nossos produtos */}
          <div>
            <div className="mb-6">
              <h3 className="text-lg font-bold text-white relative inline-block">
                Nossos produtos
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-300 transform translate-y-1"></span>
              </h3>
            </div>
            
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <a 
                    href={product.url} 
                    className="text-blue-100 hover:text-white flex items-center transition-transform duration-300 hover:translate-x-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    {product.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Dicas e Avisos */}
          <div>
            <div className="mb-6">
              <h3 className="text-lg font-bold text-white relative inline-block">
                Dicas e Avisos
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-300 transform translate-y-1"></span>
              </h3>
            </div>
            
            <ul className="space-y-3">
              {tips.map((tip, index) => (
                <li key={index}>
                  <a 
                    href={tip.url} 
                    className="text-blue-100 hover:text-white flex items-center transition-transform duration-300 hover:translate-x-1"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    {tip.name}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Newsletter form */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold text-white mb-2">
                Receba nossas dicas
              </h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="rounded-l-lg px-4 py-2 w-full focus:outline-none text-sm"
                />
                <button className="bg-blue-800 text-white rounded-r-lg px-3 hover:bg-blue-900 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
          {/* Redes sociais */}
          <div>
            <div className="mb-6">
              <h3 className="text-lg font-bold text-white relative inline-block">
                Redes sociais
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-300 transform translate-y-1"></span>
              </h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  onMouseEnter={() => setHoveredIcon(index)}
                  onMouseLeave={() => setHoveredIcon(null)}
                  className={`flex flex-col items-center justify-center p-3 rounded-lg transition-all duration-300 ${
                    hoveredIcon === index 
                      ? `bg-gradient-to-r ${social.color} text-white shadow-lg transform -translate-y-1` 
                      : 'bg-blue-600/30 text-blue-100'
                  }`}
                >
                  <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white p-0.5">
                    <img 
                      src={social.icon} 
                      alt={social.name} 
                      className="w-full h-full object-cover rounded-full" 
                    />
                  </div>
                  <span className="text-xs mt-1 font-medium">{social.name}</span>
                </a>
              ))}
            </div>
            
            {/* App store badges */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white mb-2">
                Baixe nosso app
              </h4>
              <div className="flex space-x-2">
                <a href="#" className="bg-black text-white text-xs rounded px-2 py-1 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                  App Store
                </a>
                <a href="#" className="bg-black text-white text-xs rounded px-2 py-1 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  Play Store
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Linha separadora */}
        <div className="border-t border-blue-400/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-100 text-sm">
              © {new Date().getFullYear()} PetAdoção. Todos os direitos reservados.
            </p>
            
            <div className="mt-4 md:mt-0">
              <ul className="flex flex-wrap space-x-4 text-xs text-blue-200">
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
