import MainMenu from "./pages/MainMenu/script";
import { useState } from "react";

function App() {
  const [options, setOptions] = useState("Menu");
  const [events, setEvents] = useState([
    {
      title: "Trilha Saquarema",
      date: "24/07/2025",
      time: "15:00",
      local: "Saquarema",
      activityType: "Caminhada",
      image:
        "https://cdn.discordapp.com/attachments/1377001131149889709/1389699142808506429/83187953.png?ex=686591af&is=6864402f&hm=31224e454bc57f5dcf06ffc23d2129bed0de5ab54900bd7af6ac4d12ec1e52ab&",
      description: "Trilha com os Jovens em Saquarema",
      status: "Pendente",
    },

    {
      title: "Trilha de Jacarépiá",
      date: "29/06/2025",
      time: "12:00",
      local: "Saquarema",
      activityType: "Passeio",
      image:
        "https://cdn.discordapp.com/attachments/1377001131149889709/1389699230804873268/18683046.png?ex=686591c3&is=68644043&hm=17b3625efa595adbef1e21586b62a393cde7e45d42ae56156df9b65277fe4c7d&",
      description: "Trilha com os Jovens em Saquarema",
      status: "Finalizado",
    },
  ]);
  const [userList, setUserList] = useState({
    name: "admin",
    password: "admin",
  });
  const [adminStatus, setAdminStatus] = useState(false);

  return (
    <>
      <MainMenu
        options={options}
        setOptions={setOptions}
        events={events}
        setEvents={setEvents}
        userList={userList}
        setUserList={setUserList}
        adminStatus={adminStatus}
        setAdminStatus={setAdminStatus}
      />
    </>
  );
}

export default App;
