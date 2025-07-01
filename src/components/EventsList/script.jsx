import EventCard from "../EventCard/script";
import { AreaProtegida, EventListConteiner } from "./style";

const EventList = ({ options, events }) => {
  return options === "Menu" ? (
    <>
      <ul>
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
      </ul>

      <AreaProtegida>Áreas Protegidas de Saquarema</AreaProtegida>

      <EventListConteiner>
        <div>
          <img src="" alt="Imagem Parque Estadual" />

          <p>
            O Parque Estadual da Costa do Sol protege ecossistemas costeiros de
            grande importância ecológica, incluindo restingas, manguezais e Mata
            Atlântica. É um refúgio para várias espécies de animais e plantas.
          </p>

          <p>Localização: Saquarema, RJ</p>

          <h4>Regras de visitação</h4>

          <li>Proibida a entrada de animais domésticos</li>

          <li>Não é permitido coletar plantas ou animais</li>
          <li>Proibido fazer fogueiras</li>
          <li> Todo lixo deve ser levado de volta</li>

          <h4>Dicas de Segurança</h4>

          <li>Mantenha-se nas trilhas demarcadas</li>
          <li>Use repelente e protetor solar </li>
          <li>Leve água suficiente </li>
          <li>Não alimente os animais silvestres</li>
        </div>

        <div>
          <img src="" alt="Imagem Reserva Ecológica" />
          <p>
            A Reserva Estadual Ecológica de Jacarepiá protege importantes áreas
            de restinga e ecossistemas associados à Lagoa de Jacarepiá. Serve
            como habitat para diversas espécies de plantas e animais adaptados a
            esses ambientes costeiros.
          </p>
          <p>Localização: Saquarema, RJ</p>

          <h4>Regras de visitação</h4>

          <li>Proibida a entrada de animais domésticos</li>

          <li>Não é permitido coletar plantas ou animais</li>
          <li>Proibido fazer fogueiras</li>
          <li> Todo lixo deve ser levado de volta</li>

          <h4>Dicas de Segurança</h4>

          <li>Mantenha-se nas trilhas demarcadas</li>
          <li>Use repelente e protetor solar </li>
          <li>Leve água suficiente </li>
          <li>Não alimente os animais silvestres</li>
        </div>
      </EventListConteiner>
    </>
  ) : null;
};

export default EventList;
