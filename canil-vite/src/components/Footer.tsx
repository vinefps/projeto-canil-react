import {Link} from 'react-router-dom';

function Footer() {
  return (
    <footer className="mt-[900px] md:mt-0 bg-blue-500 py-8 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="hidden md:visible">
            <h2 className="text-xl font-bold text-white mb-4">Logo</h2>
            <img src="/logo.png" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-4">
              Nossos produtos
            </h2>
            <ul className="text-gray-200">
              <li>Ração Seca</li>
              <li>Sachê</li>
              <li>Lata</li>
              <li>Cuidado oral</li>
              <li>Snack</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-4">
              Dicas e Avisos
            </h2>
            <ul className="text-gray-200">
              <li>Adoção</li>
              <li>Cuidados</li>
              <li>Alimentação</li>
              <li>Comportamento</li>
            </ul>
          </div>
          <div className="text-gray-200">
            <h2 className="text-xl font-bold text-white mb-4">Redes sociais</h2>
            <div className="redes-sociais flex items-center justify-center px-4">
              <Link to="https://www.instagram.com">
                <img src="/instagram.jpg" alt="Instagram" />
              </Link>
              <Link to="https://www.facebook.com">
                <img src="/facebook.jpg" alt="Facebook" className="px-3" />
              </Link>
              <Link to="https://www.twitter.com">
                <img src="twitter.jpg" alt="Twitter" className="px-3.5" />
              </Link>
              <Link to="https://www.youtube.com">
                <img src="/youtube.jpg" alt="YouTube" className="px-3.5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center flex flex-wrap">
          <p className="text-gray-200">
            © {new Date().getFullYear()} Seu Site. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
