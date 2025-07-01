import MainMenu from "./pages/MainMenu/script";
import { useState } from "react";

function App() {
  const [options, setOptions] = useState("Menu");
  const [events, setEvents] = useState([
    {
      title: "Jogo",
      date: "24/06/2025",
      time: "15:00",
      local: "Saquarema",
      activityType: "Campeonato",
      image: "logo.png",
      description: "TESTE",
      status: "Pendente",
    },
  ]);
  const [userList, setUserList] = useState({ name: "teste", password: "123" });
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
