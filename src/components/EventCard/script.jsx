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
      {image && <img src={image} alt={title} />}
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
