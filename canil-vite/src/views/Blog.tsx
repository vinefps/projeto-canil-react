
import  { useState, useEffect } from "react";

const Blog = () => {
  let initialState = {
    title: "",
    content: "",
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(initialState);
  const [isMobile, setIsMobile] = useState(false);

  const openModal = (title: string, content: string) => {
    setModalContent({ title, content });
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    const checkWindowWidth = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkWindowWidth();
    window.addEventListener("resize", checkWindowWidth);

    return () => {
      window.removeEventListener("resize", checkWindowWidth);
    };
  }, []);

  const blogContainerClass = isMobile ? "w-full" : "w-1/2";

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className={`${blogContainerClass} bg-blue-200 p-8 rounded-lg mb-4`}>
        <h1 className="text-2xl font-bold mb-2">
          Desafio Crescente: O Aumento Alarmante de Animais Abandonados no
          Brasil
        </h1>
        <p>
          Medidas Urgentes para Combater o Aumento Alarmante de Animais
          Abandonados no Brasil
        </p>
        <button
          className="text-blue-500 mt-2"
          onClick={() =>
            openModal(
              "Nos últimos anos, o Brasil tem enfrentado um desafio crescente que causa preocupação e tristeza em muitas pessoas: o aumento alarmante de animais abandonados. Essa realidade tem se tornado cada vez mais evidente nas ruas das cidades, nos abrigos e nas redes sociais, onde imagens de animais desamparados e em situações precárias se espalham com frequência. As razões por trás desse fenômeno são diversas e complexas. Entre elas, podemos citar o abandono motivado pela falta de responsabilidade dos tutores, que muitas vezes não consideram a adoção de um animal como um compromisso de longo prazo. Além disso, a falta de informação sobre a importância da castração e dos cuidados básicos com os pets contribui para a reprodução descontrolada e, consequentemente, para o aumento do número de animais abandonados.",
              "https://exame.com/bussola/abandono-de-animais-aumentou-cerca-de-60-durante-a-pandemia/"
            )
          }
        >
          &rarr;
        </button>
      </div>

      <div
        className={`${blogContainerClass} bg-yellow-200 p-8 rounded-lg mb-4`}
      >
        <h1 className="text-2xl font-bold mb-2">
          Saúde mental com adoção de um pet
        </h1>
        <p>O Poder Terapêutico da Adoção de um Pet</p>
        <button
          className="text-blue-500 mt-2"
          onClick={() =>
            openModal(
              "A saúde mental é um tema cada vez mais discutido e valorizado na sociedade atual. Em meio a rotinas agitadas, pressões sociais e estresse diário, buscar alternativas para cuidar do bem-estar psicológico tornou-se uma necessidade. Nesse contexto, a adoção de um animal de estimação surge como uma opção benéfica e terapêutica para promover o equilíbrio emocional e melhorar a saúde mental.A relação entre seres humanos e animais é antiga e profundamente significativa. Os pets, sejam cães, gatos, pássaros ou outros, têm o poder de oferecer companheirismo incondicional, amor e suporte emocional. Essa conexão afetiva estabelecida com um animal de estimação é capaz de trazer diversos benefícios à saúde mental.",
              "https://hospitalsantamonica.com.br/a-saude-mental-e-a-importancia-dela-na-vida-das-pessoas/"
            )
          }
        >
          &rarr;
        </button>
      </div>

      <div className={`${blogContainerClass} bg-green-200 p-8 rounded-lg mb-4`}>
        <h1 className="text-2xl font-bold mb-2">
          Combate ao abandono de animais
        </h1>
        <p>
          Unindo Forças pela Proteção e Bem-Estar dos Nossos Fiéis Companheiros
        </p>
        <button
          className="text-blue-500 mt-2"
          onClick={() =>
            openModal(
              "O abandono de animais é um problema grave e preocupante que afeta milhares de seres indefesos em todo o mundo. No entanto, esse fenômeno não é inevitável e precisa ser combatido de forma enérgica e consciente pela sociedade como um todo. Uma das principais medidas para combater o abandono de animais é a conscientização. É fundamental educar a população sobre a importância da posse responsável e dos cuidados necessários para garantir o bem-estar dos animais de estimação. Informar sobre a esterilização, a vacinação, a alimentação adequada, os passeios regulares e a atenção veterinária são aspectos essenciais que devem ser abordados.",
              "https://www.cvsf.com.br/dezembro-verde-mes-de-conscientizacao-e-combate-ao-abandono-de-animais/"
            )
          }
        >
          &rarr;
        </button>
      </div>

      <div className={`${blogContainerClass} bg-red-200 p-8 rounded-lg mb-4`}>
        <h1 className="text-2xl font-bold mb-2">
          Diversão e atividade física com animais
        </h1>
        <p>
          Promovendo um Estilo de Vida Saudável com a Companhia dos Nossos
          Amigos Peludos
        </p>
        <button
          className="text-blue-500 mt-2"
          onClick={() =>
            openModal(
              "Quando falamos sobre diversão e atividade física, uma parceria perfeita que pode ser explorada é a interação com os animais. Os pets, em especial cães e gatos, podem se tornar grandes companheiros nessa jornada, trazendo não apenas alegria, mas também uma motivação extra para nos mantermos ativos.Os animais são naturalmente energéticos e adoram brincar e se movimentar. Essa disposição contagiante pode ser um estímulo poderoso para que nós também entremos em ação. Ao envolver nossos animais de estimação em atividades físicas, criamos uma relação de diversão e cumplicidade, além de proporcionarmos uma vida mais saudável tanto para nós quanto para eles.",
              "https://blog.alice.com.br/sua-saude/beneficios-dos-animais-de-estimacao-para-saude/"
            )
          }
        >
          &rarr;
        </button>
      </div>

      {modalIsOpen && (
        <div className="modal">
          <div className="overlay" onClick={closeModal}></div>
          <div className="p-8">
            <h1 className="text-2xl font-bold mb-2">{modalContent.title}</h1>
            <p>{modalContent.content}</p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={closeModal}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
