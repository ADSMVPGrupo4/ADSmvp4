import { useState } from "react";

const UpdateEvent = ({ options, setOptions, events, setEvents }) => {
  const [selectedId, setSelectedId] = useState("");
  const [newTitle, setNewTitle] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedEvents = events.map((event, index) =>
      index === parseInt(selectedId) ? { ...event, title: newTitle } : event,
    );

    setEvents(updatedEvents);
    setSelectedId("");
    setNewTitle("");
    setOptions("Menu");
  };

  return options === "Atualizar" ? (
    <form onSubmit={handleUpdate}>
      <div>
        <h1>Atualizar Evento:</h1>

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
        <label>Novo Título:</label>
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          required
        />
      </div>

      <button type="submit">Salvar Alteração</button>
    </form>
  ) : null;
};

export default UpdateEvent;
