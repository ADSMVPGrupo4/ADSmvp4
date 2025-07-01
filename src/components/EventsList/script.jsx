import EventCard from "../EventCard/script";
import {
  EventCardConteiner,
  ParqueSaquarema,
  AreaProtegidaTexto,
  AreaProtegidaConteiner,
} from "./style";

const EventList = ({ options, events, adminStatus }) => {
  return options === "Menu" ? (
    <>
      <EventCardConteiner>
        {events.map((event) => (
          <EventCard
            adminStatus={adminStatus}
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
      </EventCardConteiner>

      <AreaProtegidaTexto>Áreas Protegidas de Saquarema</AreaProtegidaTexto>

      <AreaProtegidaConteiner>
        <div>
          <ParqueSaquarema
            src="https://cdn.discordapp.com/attachments/1377001131149889709/1389700517852086442/maxresdefault.png?ex=686592f6&is=68644176&hm=7487d5401c9d2919597b14bd9b93fe0f805000c09cbfbf5a041433d8e6876848&"
            alt="Imagem Parque Estadual"
          />

          <h1>Parque Estadual da Costa do Sol</h1>

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
          <ParqueSaquarema
            src="https://cdn.discordapp.com/attachments/1377001131149889709/1389703440187392182/image.png?ex=686595af&is=6864442f&hm=ff6ae72036604d515a1875a7661e58a34bd0573b5270e76fed8c93350945dab9&"
            alt="Imagem Reserva Ecológica"
          />

          <h1>Reserva Ecológica</h1>
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
      </AreaProtegidaConteiner>
    </>
  ) : null;
};

export default EventList;
