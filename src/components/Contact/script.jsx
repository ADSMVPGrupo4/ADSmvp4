function Contact({ options, setOptions }) {
  return options === "Contato" ? (
    <>
      <h1>Entre em contato conosco: </h1>
      <h1>Telefone: 21 91234-5678</h1>
      <h1>saquaremaverde@saquarema.com</h1>
      <button onClick={() => setOptions("Menu")}>Voltar aos Eventos</button>
    </>
  ) : null;
}

export default Contact;
