import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import AboutPages from "./pages/AboutPages";
import PostsPage from "./pages/PostsPage";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<MainPage/>} />
          <Route path="about" element={<AboutPages/>} />
          <Route path="posts" element={<PostsPage/>} />

          <Route path="*" element={<h3>Страница не найдена</h3>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
