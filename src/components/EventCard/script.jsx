const EventCard = ({
  image,
  title,
  description,
  date,
  time,
  local,
  activityType,
}) => {
  return (
    <li>
      <img src={image} alt="Imagem do Evento" />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{date}</p>
      <p>{time}</p>
      <p>{local}</p>
      <p>{activityType}</p>
    </li>
  );
};

export default EventCard;
