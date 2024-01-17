import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("login");
    navigate("/posts");
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Логин" />
        <input type="password" placeholder="Пароль" />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};
export default LoginPage;
