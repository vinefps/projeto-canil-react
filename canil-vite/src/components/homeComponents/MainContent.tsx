import { useEffect, useState } from "react";

const Maincontent = () => {
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage: any) => (prevImage + 1) % dogs.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col md:flex-row md:w-full">
      <div className="w-full md:w-1/2 bg-gray-100 p-4">
        <div className="">
          <div className="w-72 relative md:w-full md:h-[600px] md:shadow-[0_25px_25px_6px_rgba(0,0,0,.4)]">
            {dogs.map((dog, index) => (
              <img
                key={index}
                className={`absolute w-full h-full object-cover transition-opacity duration-500 ${index === currentImage ? "opacity-100" : "opacity-0"
                  }`}
                src={dog}
                alt="Cão"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-white p-4 md:w-[700px] text-justify shadow-md">
        <div className="flex flex-col items-center h-full justify-center py-3.5">
          <h2 className="text-2xl font-bold mb-4">
            Desafio Crescente: O Aumento Alarmante de Animais Abandonados no
            Brasil
          </h2>
          <p>
            A realidade dos animais abandonados no Brasil é um tema preocupante
            e cada vez mais urgente. De acordo com a Organização Mundial da
            Saúde (OMS), nosso país abriga aproximadamente 30 milhões de animais
            sem lar, entre cães e gatos. Esses números alarmantes refletem uma
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
        </div>
      </div>
    </div>
  );
};

export default Maincontent;
