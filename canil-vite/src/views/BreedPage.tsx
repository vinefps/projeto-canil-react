import React from "react";
import { useParams } from "react-router-dom";
import {dogs} from '../data/dogData';


const BreedPage = () => {
  
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-500 py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-semibold text-white">
            Cachorros Rottweiler Disponíveis para Adoção:
          </h1>
        </div>
      </header>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {dogs.map((dog, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 transition-transform transform hover:scale-105"
            >
              <div className="rounded-lg mb-4">
                <img
                  src={dog.photo}
                  alt={dog.name}
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
              </div>
              <h2 className="text-xl font-semibold mb-2">{dog.name}</h2>
              <p className="text-gray-600 mb-2">{dog.description}</p>
              <div className="flex justify-between text-gray-500">
                <p>{dog.age}</p>
                <p>{dog.gender}</p>
              </div>
              <div className="flex justify-between text-gray-500 mt-2">
                <p>{dog.location}</p>
                <Link to={dog.adoptionLink}>
                  <span className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded cursor-pointer">
                    Adotar
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="bg-gray-200 py-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">© 2023 Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
};

export default BreedPage;
