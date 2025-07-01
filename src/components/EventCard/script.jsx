import { EventCardConteiner, Card } from "./style";

const EventCard = ({
  image,
  title,
  description,
  date,
  time,
  local,
  activityType,
  status,
}) => {
  return (
    <Card>
      {image && <img src={image} alt={title} />}
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Data: {date}</p>
      <p>Horário: {time}</p>
      <p>Local: {local}</p>
      <p>Tipo: {activityType}</p>
      <p>Status: {status}</p>
    </Card>
  );
};

export default EventCard;
