const Card = ({ image, title, description }) => {
  return (
    <div className="card">
      <div className="card__image">
        <img src={image} alt={image} />
      </div>
      <h3 className="card__title">{title}</h3>
      <p className="card__description">{description}</p>
    </div>
  );
};

export default Card;
