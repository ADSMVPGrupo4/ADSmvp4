const NewUpdate = () => {
  return (
    <>
      <form>
        <div>
          <h1>Novo atualização:</h1>
          <label>Título do aviso:</label>
          <input></input>
        </div>

        <div>
          <label>Selecione o Evento</label>
          <select>
            <option defaultValue>Selecione Aqui</option>
            <option value="">Evento 1</option>
            <option value="">Evento 2</option>
          </select>
        </div>

        <div>
          <label>Descrição:</label>
          <textarea></textarea>
        </div>

        <button type="submit">Publicar</button>
      </form>
    </>
  );
};

export default NewUpdate;
