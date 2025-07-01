import EventCard from "../EventCard/script";
import { AdminAreaConteiner } from "./style";

const AdminArea = ({ options, setOptions, adminStatus, events, setEvents }) => {
  const accessAdmin = () => {
    if (options === "Admin" && adminStatus === true) {
      return (
        <>
          <AdminAreaConteiner>
            <table>
              <div>
                <h1>Eventos</h1>
                <p>Evento</p>
                <p>Data</p>
                <p>Horário</p>
                <p>Local</p>
                <p>Tipo de atividade</p>
                <p>Imagem</p>
                <p>Ações</p>
              </div>

              <div>
                {events.map((event) => (
                  <EventCard
                    key={event.id}
                    image={event.image}
                    title={event.title}
                    description={event.description}
                    date={event.date}
                    time={event.time}
                    local={event.local}
                    activityType={event.activityType}
                  />
                ))}
              </div>
            </table>
            <button onClick={() => setOptions("Criar")}>Novo</button>
            <div>
              <table>
                <h1>Atualizações</h1>
                <p>Evento</p>
                <p>Data</p>
                <p>Horário</p>
                <p>Local</p>
                <p>Tipo de atividade</p>
                <p>Aviso</p>
                <p>Ações</p>
              </table>
            </div>
            <button onClick={() => setOptions("Atualizar")}>Modificar</button>
            {events.map((event) => (
              <EventCard
                key={event.id}
                image={event.image}
                title={event.title}
                description={event.description}
                date={event.date}
                time={event.time}
                local={event.local}
                activityType={event.activityType}
                status={event.status}
              />
            ))}
          </AdminAreaConteiner>
        </>
      );
    } else if (options === "Admin" && adminStatus === false) {
      setOptions("Login");
    } else {
      return null;
    }
  };
  return <div>{accessAdmin()}</div>;
};

export default AdminArea;
