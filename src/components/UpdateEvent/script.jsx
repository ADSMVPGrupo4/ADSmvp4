import { useState } from "react";

const UpdateEvent = ({ options, setOptions, events, setEvents }) => {
  const [selectedId, setSelectedId] = useState("");
  const [newStatus, setNewStatus] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedEvents = events.map((event, index) =>
      index === parseInt(selectedId) ? { ...event, status: newStatus } : event,
    );

    setEvents(updatedEvents);
    setSelectedId("");
    setNewStatus("");
    setOptions("Menu");
  };

  return options === "Atualizar" ? (
    <form onSubmit={handleUpdate}>
      <div>
        <h1>Atualizar Situação do Evento:</h1>

        <label>Selecione o Evento:</label>
        <select
          required
          value={selectedId}
          onChange={(e) => setSelectedId(e.target.value)}
        >
          <option value="">Selecione Aqui</option>
          {events.map((event, index) => (
            <option key={index} value={index}>
              {event.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Situação</label>
        <select
          required
          value={newStatus}
          onChange={(e) => setNewStatus(e.target.value)}
        >
          <option value="Selecione Aqui">Selecione aqui</option>
          <option value="Pendente">Pendente</option>
          <option value="Cancelado">Cancelado</option>
          <option value="Finalizado">Finalizado</option>
        </select>
      </div>

      <button type="submit">Salvar Alteração</button>
    </form>
  ) : null;
};

export default UpdateEvent;
