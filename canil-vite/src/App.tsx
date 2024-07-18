import "./App.css";
import Animais from "./views/Animais";
import Blog from "./views/Blog";
import Cadastro from "./views/Cadastro";
import Login from "./views/Login";
import Home from "./views/Home";
import BreedPage from "./views/BreedPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";

import Boxer from "./views/animais/Boxer";
import BulldogF from "./views/animais/Bullf";
import BulldogI from "./views/animais/Bulli";
import Collie from "./views/animais/Collie";
import Chihuahua from "./views/animais/Chihuahua";
import DachShund from "./views/animais/DachShund";
import Golden from "./views/animais/Golden";
import Husky from "./views/animais/Husky";
import Labrador from "./views/animais/Labrador";
import Poodle from "./views/animais/Poodle";
import Pug from "./views/animais/Pug";
import Rottweiler from "./views/animais/Rottweiler";

function App() {
  const { id } = useParams();

  return (
    <main>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/animais" element={<Animais />} />
          <Route path="/animais/boxer" element={<Boxer />} />
          <Route path="/animais/bulldog-frances" element={<BulldogF />} />
          <Route path="/animais/bulldog-ingles" element={<BulldogI />} />
          <Route path="/animais/border-collie" element={<Collie />} />
          <Route path="/animais/chihuahua" element={<Chihuahua />} />
          <Route path="/animais/dachShund" element={<DachShund />} />
          <Route path="/animais/golden-retriever" element={<Golden />} />
          <Route path="/animais/husky-siberiano" element={<Husky />} />
          <Route path="/animais/labrador-retriever" element={<Labrador />} />
          <Route path="/animais/poodle" element={<Poodle />} />
          <Route path="/animais/pug" element={<Pug />} />
          <Route path="/animais/rottweiler" element={<Rottweiler />} />
          <Route path={`/cadastro`} element={<Cadastro />} />
          <Route path={`/entrar`} element={<Login />} />
          <Route path={`/blog`} element={<Blog />} />
          <Route path="/animais/:breed" element={<BreedPage />} />{" "}
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
