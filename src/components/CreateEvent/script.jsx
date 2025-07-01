import { useState } from "react";

const CreateEvent = ({ options, setOptions, events, setEvents }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [activityType, setActivityType] = useState("");
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newEvents = {
      title,
      date,
      time,
      location,
      activityType,
      image,
      description,
    };
    setEvents([...events, { ...newEvents, id: events.length }]);
    setError("");
    setOptions("Menu");
  }

  return options === "Criar" ? (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Novo evento:</h1>

        <label>Título:</label>
        <input
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div>
        <label>Data do Evento:</label>
        <input
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div>
        <label>Horário do Evento:</label>
        <input
          required
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>

      <div>
        <label>Local:</label>
        <input
          required
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>

      <div>
        <label>Tipo de atividade:</label>
        <input
          required
          value={activityType}
          onChange={(e) => setActivityType(e.target.value)}
        />
      </div>

      <div>
        <label>Imagem:</label>
        <input
          type="file"
          title="Adicionar"
          name="Adicionar"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>

      <div>
        <label>Descrição:</label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button type="submit">Publicar</button>
    </form>
  ) : null;
};

export default CreateEvent;
