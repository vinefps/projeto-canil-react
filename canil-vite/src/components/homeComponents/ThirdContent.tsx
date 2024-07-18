import { Link } from "react-router-dom";

const Third = () => {
  return (
    <section className="mt-8 mx-auto sm:mt-16 md:mt-24 max-w-7xl px-4 md:px-8 mb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16 mt-8 sm:mt-20 pb-4">
        <div className="relative mt-12">
          <div className="origin-center rotate-12 bg-orange-500 w-62 h-48 xl:h-[480px]"></div>
          <div className="absolute w-full h-[400px] sm:h-[500px] bottom-10 sm:bottom-30">
            <img
              src="/dog3.jpeg"
              className="rounded-xl border-2 h-full object-cover"
              alt="Dog"
            />
          </div>
        </div>
        <div className="flex flex-col md:ml-36">
          <span className="text-red-600/40 font-bold text-xl">Sobre Nós</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-black mt-4">
            Nós Temos o Cão Perfeito Para Você
          </h1>
          <div className="bg-orange-600 w-24 h-2 mt-6"></div>
          <p className="mt-8 sm:mt-10 text-lg sm:text-xl text-gray-500 text-justify">
            Se você está procurando o seu companheiro canino ideal, o nosso site
            é o lugar certo para encontrar o cão perfeito para você. Com uma
            ampla variedade de cães disponíveis para adoção, temos certeza de
            que você encontrará um amigo fiel e amoroso para compartilhar a
            vida.
          </p>
          <Link to="/animais">Saber Mais</Link>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-16 mt-16 sm:mt-40">
        <div className="relative mt-12 xl:order-last md:ml-36">
          <div className="origin-center rotate-12 bg-orange-500 w-62 h-48 xl:h-[480px]"></div>
          <div className="absolute w-full h-[400px] sm:h-[500px] bottom-10 sm:bottom-30">
            <img
              src="/dog2.jpeg"
              className="rounded-xl border-2 h-full object-cover"
              alt="Dog"
            />
          </div>
        </div>
        <div className="flex flex-col md:order-first">
          <span className="text-red-600/40 font-bold text-xl">Sobre Nós</span>
          <h1 className="text-4xl sm:text-5xl font-serif font-bold text-black mt-4">
            Venha adotar um amigo de quatro patas
          </h1>
          <div className="bg-orange-600 w-24 h-2 mt-6"></div>
          <p className="mt-8 sm:mt-10 text-lg sm:text-xl text-gray-500 text-justify">
            Nosso site tem uma interface fácil de usar que permite que você
            filtre cães por raça, tamanho, idade e localização, tornando mais
            fácil encontrar o cão perfeito para você. Além disso, nossos perfis
            de cães detalhados fornecem informações sobre a personalidade,
            história e necessidades de cada cão, permitindo que você tome uma
            decisão informada sobre qual cão é adequado para você.
          </p>
          <Link to="/animais">Saber mais</Link>
        </div>
      </div>
    </section>
  );
};

export default Third;
