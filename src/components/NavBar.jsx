import { NavLink } from "react-router-dom";

const activeNavLink = ({ isActive }) => (isActive ? "active-menu" : "");

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink className={activeNavLink} to="/">
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink className={activeNavLink} to="/about">
            О нас
          </NavLink>
        </li>
        <li>
          <NavLink className={activeNavLink} to="/posts">
            Посты
          </NavLink>
        </li>
        <li>
          <NavLink className={activeNavLink} to="/login">
            Вход
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
