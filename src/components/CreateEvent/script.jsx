import { useState } from "react";
import { FormConteiner } from "./style";

const CreateEvent = ({ options, setOptions, events, setEvents }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [activityType, setActivityType] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImage(imageURL);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !title ||
      !date ||
      !time ||
      !location ||
      !activityType ||
      !description
    ) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    const newEvent = {
      id: events.length,
      title,
      date,
      time,
      location,
      activityType,
      image,
      description,
      status: "Pendente",
    };

    setEvents([...events, newEvent]);
    setError("");
    setOptions("Menu");
  };

  return options === "Criar" ? (
    <FormConteiner>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Novo Evento:</h1>
          <label>Título:</label>
          <input
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div>
            <label>Data do Evento:</label>
            <input
              required
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div>
            <label>Horário do Evento:</label>
            <input
              required
              type="time"
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
          </div>{" "}
          <div>
            <label>Tipo de Atividade:</label>
            <input
              required
              value={activityType}
              onChange={(e) => setActivityType(e.target.value)}
            />
          </div>{" "}
          <div>
            <label>Imagem:</label>
            <input type="file" accept="image/*" onChange={handleImageChange} />

            {image && (
              <div>
                <p>Pré-visualização da imagem:</p>
                <img
                  src={image}
                  alt="Preview"
                  style={{ width: "50px", height: "50px" }}
                />
              </div>
            )}
          </div>{" "}
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
        </div>
      </form>
    </FormConteiner>
  ) : null;
};

export default CreateEvent;
