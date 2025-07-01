import { useState } from "react";
import { LoginConteiner } from "./style";

const Login = ({ options, setOptions, userList, setAdminStatus }) => {
  const [statusLogin, setStatusLogin] = useState("");
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  function checkLogin() {
    if (userList.name === userName && userList.password === userPassword) {
      setAdminStatus(true);
      setOptions("Admin");
      setStatusLogin("Carregando");
    } else if (
      userList.name === userName &&
      userList.password === userPassword
    ) {
      setAdminStatus(true);
      setOptions("Menu");
      setStatusLogin("Carregando");
    } else if (
      userList.name !== userName ||
      userList.password !== userPassword
    ) {
      setOptions("Login");
      setStatusLogin("Email ou Senha Incorreta");
    }
  }
  return options === "Login" ? (
    <>
      <LoginConteiner>
        <form onSubmit={() => checkLogin()}>
          <div>
            <label>Usuário</label>
            <div>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label>Senha</label>
            <div>
              <input
                type="text"
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
              />
            </div>
          </div>

          <button type="submit">Entrar</button>
          <h1>{statusLogin}</h1>
        </form>
      </LoginConteiner>
    </>
  ) : null;
};

export default Login;
