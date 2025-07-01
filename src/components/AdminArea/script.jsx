import { AdminAreaConteiner } from "./style";

const AdminArea = ({ options, setOptions, adminStatus, events, setEvents }) => {
  const accessAdmin = () => {
    if (options === "Admin" && adminStatus === true) {
      const handleDeleteEvent = (id) => {
        const confirmDelete = window.confirm(
          "Tem certeza que deseja excluir este evento?",
        );
        if (confirmDelete) {
          const updatedEvents = events.filter((event) => event.id !== id);
          setEvents(updatedEvents);
        }
      };
      return (
        <>
          <AdminAreaConteiner>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Evento</th>
                    <th>Data</th>
                    <th>Horário</th>
                    <th>Local</th>
                    <th>Tipo de atividade</th>
                    <th>Imagem</th>
                    <th>Status</th>
                    <th class="centro">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {events.map((event) => (
                    <tr key={event.id}>
                      <td>{event.title}</td>
                      <td>{event.date}</td>
                      <td>{event.time}</td>
                      <td>{event.local}</td>
                      <td>{event.activityType}</td>
                      <td>
                        <img
                          src={event.image}
                          alt={event.title}
                          style={{ width: "100px" }}
                        />
                      </td>
                      <td>{event.status}</td>
                      <td>
                        <button onClick={() => setOptions("Atualizar")}>
                          Editar
                        </button>
                        <button onClick={() => handleDeleteEvent(event.id)}>
                          Excluir
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button onClick={() => setOptions("Criar")}>Novo</button>
            </div>
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
