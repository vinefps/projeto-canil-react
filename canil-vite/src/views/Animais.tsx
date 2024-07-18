import { useState } from "react";
import { Link } from "react-router-dom";

const animais = [
  {
    name: "Labrador Retriever",
    description:
      "O Labrador Retriever é uma raça amigável e gentil. Eles são conhecidos por sua inteligência e lealdade. São cães atléticos e brincalhões, perfeitos para famílias ativas.",
  },
  {
    name: "Bulldog Frances",
    description:
      "O Bulldog Francês é uma raça de porte pequeno a médio, conhecida por sua personalidade divertida e carinhosa. Eles são cães afetuosos e ótimos companheiros para pessoas de todas as idades.",
  },
  {
    name: "Border Collie",
    description:
      "O Border Collie é uma raça altamente inteligente e enérgica. Eles são excelentes cães de trabalho e pastoreio, mas também são ótimos em atividades como agilidade e obediência.",
  },
  {
    name: "Golden Retriever",
    description:
      "O Golden Retriever é uma raça amigável e confiável. Eles são conhecidos por sua inteligência e disposição para agradar. São cães leais e ótimos companheiros para pessoas de todas as idades.",
  },
  {
    name: "Poodle",
    description:
      "O Poodle é uma raça altamente inteligente e enérgica. Eles são conhecidos por sua aparência elegante e pelos cachos característicos. São cães afetuosos e versáteis, adequados para famílias e atividades de agilidade.",
  },
  {
    name: "Bulldog Ingles",
    description:
      "O Bulldog Inglês é uma raça de porte médio e aparência distinta. Eles são cães calmos, doces e amigáveis. São ótimos companheiros e se dão bem com crianças e outros animais de estimação.",
  },
  {
    name: "Chihuahua",
    description:
      "O Chihuahua é a menor raça de cão do mundo. Eles são corajosos, alertas e cheios de energia. Apesar de seu tamanho pequeno, são cães ousados e protetores.",
  },
  {
    name: "Husky Siberiano",
    description:
      "O Husky Siberiano é uma raça enérgica e atlética. Eles são conhecidos por sua aparência marcante e pelos olhos azuis ou multicoloridos. São cães amigáveis, sociáveis e bons em atividades de corrida e trenó.",
  },
  {
    name: "Dachshund",
    description:
      'O Dachshund, também conhecido como "cachorro salsicha", é uma raça de porte pequeno a médio. Eles são valentes, curiosos e cheios de energia. São cães leais e ótimos companheiros para famílias.',
  },
  {
    name: "Rottweiler",
    description:
      "O Rottweiler é uma raça de porte médio a grande. Eles são cães corajosos, leais e protetores. São excelentes cães de guarda e trabalham bem em tarefas de obediência e agilidade.",
  },
  {
    name: "Pug",
    description:
      "O Pug é uma raça de porte pequeno, conhecida por seu rosto enrugado e expressão adorável. Eles são cães afetuosos, brincalhões e cheios de personalidade. São ótimos companheiros para pessoas de todas as idades.",
  },
  {
    name: "Boxer",
    description:
      "O Boxer é uma raça de porte médio a grande, conhecida por sua natureza amigável e enérgica. Eles são cães leais, corajosos e atléticos. São ótimos companheiros e se dão bem com crianças e outros animais de estimação.",
  },
];

const Animais = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event:any) => {
    setSearchTerm(event.target.value);
  };

  const filteredBreeds = animais.filter((animais) => {
    return animais.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-blue">Raças de Cachorro</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Pesquisar raça de cachorro"
          value={searchTerm}
          onChange={handleSearchChange}
          className="border p-2 rounded-md"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredBreeds.map((animal, index) => (
          <div key={index} className="p-4 border rounded-md">
            <div className="mb-4">
              <img
                src={`/${animal.name.toLowerCase().replace(/\s/g, "-")}.jpg`}
                alt={animal.name}
                className="w-full rounded-md md:w-96 md:h-80 w-[150px] h-[170px]"
              />
            </div>
            <h2 className="text-xl font-bold mb-2">{animal.name}</h2>
            <p className="w-[200px] md:w-80">{animal.description}</p>
            <Link
              to={`/animais/${animal.name.toLowerCase().replace(/\s/g, "-")}`}
              className="text-white mt-2 inline-block bg-orange-400 rounded p-2 hover:bg-orange-600"
            >
              Saber mais
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Animais;
