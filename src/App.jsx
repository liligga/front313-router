import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import AboutPages from "./pages/AboutPages";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="/">Главная</a>
          </li>
          <li>
            <a href="/about">О нас</a>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/about" element={<AboutPages/>} />
      </Routes>
    </>
  );
}

export default App;
