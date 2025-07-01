import { useState } from "react";

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
      <form onSubmit={() => checkLogin()}>
        <div>
          <label>Usuário</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>

        <div>
          <label>Senha</label>
          <input
            type="text"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </div>

        <button type="submit">Entrar</button>
        <h1>{statusLogin}</h1>
      </form>
    </>
  ) : null;
};

export default Login;
