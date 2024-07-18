import { Link } from "react-router-dom";

const SecondContext = () => {
  return (
    <section className="flex flex-col items-center mt-10 md:mt-20 border-b-2 md:border-x-2">
      <div className="border-b-2 border-x-2 font-bold">
        <h1 className="px-4 md:px-16 text-xl md:text-3xl text-orange-400">
          PORQUÊ ADOTAR UM PET?
        </h1>
      </div>
      <div className="flex flex-col md:flex-row justify-between w-full md:w-[1200px] mt-4 md:mt-8">
        <div className="w-full md:w-[400px] h-[400px] flex flex-col items-center border-b-2 md:border-b-0">
          <img
            src="/dog2.jpg"
            className="rounded-full w-16 md:w-24 h-16 md:h-24 bg-black border-2"
            alt="Dog"
          />
          <div className="font-bold text-lg md:text-2xl mt-6">Saúde mental</div>
          <div className="w-52 md:w-72 text-gray-400 mt-2 md:mt-4">
            <p className="text-justify">
              Cuidar de um animal de estimação pode ter benefícios terapêuticos,
              ajudando a reduzir o estresse, a ansiedade e a depressão.
            </p>
            <Link to="/blog">
              <img
                src="/arrow.png"
                className="rounded-full w-8 md:w-14 h-8 md:h-14 mt-4 md:mt-10 border-2 p-2"
                alt="Arrow"
              />
            </Link>
          </div>
        </div>
        <div className="w-full md:w-[400px] h-[400px] flex flex-col items-center border-b-2 md:border-b-0 md:shadow-[0_25px_25px_6px_rgba(0,0,0,.4)] mt-4 md:mt-0">
          <img
            src="/dog1.jpg"
            className="rounded-full w-16 md:w-24 h-16 md:h-24 bg-black border-2"
            alt="Dog"
          />
          <div className="font-bold text-lg md:text-2xl mt-6">
            Combate ao abandono
          </div>
          <div className="w-52 md:w-72 text-gray-400 mt-2 md:mt-4">
            <p className="text-justify">
              Ao adotar um animal de estimação, você pode ajudar a combater o
              abandono e o sofrimento dos animais que estão em abrigos ou nas
              ruas.
            </p>
            <Link to="/blog">
              <img
                src="/arrow.png"
                className="rounded-full w-8 md:w-14 h-8 md:h-14 mt-4 md:mt-10 border-2 p-2"
                alt="Arrow"
              />
            </Link>
          </div>
        </div>
        <div className="w-full md:w-[400px] h-[400px] flex flex-col items-center border-b-2 md:border-b-0 mt-4 md:mt-0">
          <img
            src="/dog3.jpg"
            className="rounded-full w-16 md:w-24 h-16 md:h-24 bg-black border-2"
            alt="Dog"
          />
          <div className="font-bold text-lg md:text-2xl mt-6">
            Diversão e atividade física
          </div>
          <div className="w-52 md:w-72 text-gray-400 mt-2 md:mt-4">
            <p className="text-justify">
              Ter um animal de estimação pode trazer muita diversão e alegria
              para a sua vida. Brincar, passear e interagir com seu pet pode ser
              uma ótima forma de se exercitar e se divertir ao mesmo tempo.
            </p>
            <Link to="/blog">
              <img
                src="/arrow.png"
                className="rounded-full w-8 md:w-14 h-8 md:h-14 mt-4 md:mt-10 border-2 p-2"
                alt="Arrow"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondContext;
