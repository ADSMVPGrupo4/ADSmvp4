const CreateEvent = () => {
  return (
    <>
      <form>
        <div>
          <h1>Novo evento:</h1>
          <label>Título:</label>
          <input></input>
        </div>

        <div>
          <label>Data do Evento:</label>
          <input></input>
        </div>

        <div>
          <label>Horário do Evento</label>
          <input></input>
        </div>

        <div>
          <label>Local</label>
          <input></input>
        </div>

        <div>
          <label>Tipo de atividade</label>
          <input></input>
        </div>

        <div>
          <label>Imagem</label>
          <input type="file" title="Adicionar" name="Adicionar" />
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

export default CreateEvent;
