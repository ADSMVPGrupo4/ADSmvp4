import { HeaderConteiner } from "./style";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <>
      <HeaderConteiner>
        <div>
          <img src={logo} alt="Logo" />
          <h1>Saquarema Verde Online</h1>
        </div>
        <div>
          <a>Contate-nos</a>
          <a>Atualizações </a>
        </div>

        <div>
          <a>Área Administrativa</a>
          <button>Login</button>
        </div>
      </HeaderConteiner>
    </>
  );
};

export default Header;
