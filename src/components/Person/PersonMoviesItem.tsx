import React from "react";
import { Link } from "react-router-dom";
import { MoviesPerson } from "types";

interface PersonMoviesItem {
  id: number;
  name: string;
  enName: string;
  rating: number | null;
  description: string;
}

const PersonMoviesItem = ({
  id,
  name,
  enName,
  description,
  rating,
}: PersonMoviesItem) => {
  return (
    <Link to={`/film/${id}`} className="person-movies__list">
      <ul>
        <li className="person-movies__item">
          <span className="person-movies__name">
            Название: {name ? name : enName}
          </span>
          {description && (
            <div className="person-movies__description">
              Описание: {description}
            </div>
          )}
          {rating && (
            <div className="person-movies__rating">
              Рейтинг: {rating?.toFixed(2)}
            </div>
          )}
        </li>
      </ul>
    </Link>
  );
};

export default PersonMoviesItem;
