import { HeaderConteiner } from "./style";
import logo from "../../assets/logo.png";

const Header = ({ setOptions, adminStatus }) => {
  return (
    <>
      <HeaderConteiner>
        <div>
          <img onClick={() => setOptions("Menu")} src={logo} alt="Logo" />
          <h1 onClick={() => setOptions("Menu")}>Saquarema Verde Online</h1>
        </div>
        <div>
          <a onClick={() => setOptions("Contato")}>Contate-nos</a>
          <a onClick={() => setOptions("Atualizar")}>Atualizações</a>
        </div>

        <div>
          <a onClick={() => setOptions("Admin")}>Área Administrativa</a>
          {adminStatus === false ? (
            <button onClick={() => setOptions("Login")}>Login</button>
          ) : null}
        </div>
      </HeaderConteiner>
    </>
  );
};

export default Header;
