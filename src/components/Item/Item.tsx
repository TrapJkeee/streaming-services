import { Link } from "react-router-dom";
import "./Item.scss";
import { sklonenie } from "helpers/sklonenie";

interface ItemProps {
  id: number;
  poster: string;
  title: string;
  year: number;
  rating: number;
  movieLength: number;
}

const Item = ({
  id,
  poster,
  title,
  movieLength: time,
  rating,
  year,
}: ItemProps) => {
  return (
    <Link to={`/film/${id}`} className="item">
      <div className="item__body">
        <div className="item__poster">
          <img
            src={poster}
            alt={title}
            className="item__img"
            // loading="lazy"
            // decoding="async"
          />
        </div>
        <div className="item__front">
          <div className="item__info">
            <div className="item__subtitle">
              <div className="item__year">{year}</div>
              <div className="item__rating">{rating.toFixed(2)}</div>
              {time && (
                <div className="item__time">
                  {`${time}
                ${sklonenie(time, ["минуту", "минуты", "минут"])}`}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
