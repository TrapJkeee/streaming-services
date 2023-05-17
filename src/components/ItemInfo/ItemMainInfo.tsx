import { Container } from "components/Contanier/Container";
import { sklonenie } from "helpers/sklonenie";
import { CurrentFilm } from "types";
import ItemInfoCastCrew from "./ItemInfoCastCrew";

interface ItemMainInfoProps {
  currentFilm: CurrentFilm;
}
const ItemMainInfo = ({ currentFilm }: ItemMainInfoProps) => {
  const {
    countries,
    backdrop,
    genres,
    logo,
    movieLength,
    name,
    rating,
    shortDescription,
    year,
    persons,
  } = currentFilm;
  return (
    <div
      className="item-info__main"
      style={{ backgroundImage: `url(${backdrop.url})` }}
    >
      <Container>
        <div className="item-info__content">
          {logo?.url ? (
            <div className="item-info__avatar">
              <img className="item-info__img" src={`${logo.url}`} alt={name} />
            </div>
          ) : (
            <span className="item-info__name">{name}</span>
          )}
          <div className="item-info__stats">
            <span className="item-info__rating">{rating.kp.toFixed(2)}</span>
            <span className="item-info__year">{year}</span>
            {genres.map((item) => (
              <span className="item-info__genre">{item.name}</span>
            ))}
          </div>

          <div className="item-info__stats">
            {countries.map((item) => (
              <span className="item-info__country">{item.name}</span>
            ))}
            {movieLength && (
              <span className="item-info__time">
                {movieLength}
                {` ${sklonenie(movieLength, ["минуту", "минуты", "минут"])}`}
              </span>
            )}
          </div>
          <div className="item-info__short-description">{shortDescription}</div>
          {persons && <ItemInfoCastCrew persons={persons} />}
        </div>
      </Container>
    </div>
  );
};

export default ItemMainInfo;
