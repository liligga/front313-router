import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Главная</NavLink>
        </li>
        <li>
          <NavLink to="/about">О нас</NavLink>
        </li>
        <li>
          <NavLink to="/posts">Посты</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
