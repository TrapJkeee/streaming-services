import React from "react";
import { Link } from "react-router-dom";
import { Persons } from "types";

interface ItemInfoCastCrewProps {
  persons: Persons[];
}

const ItemInfoCastCrew = ({ persons }: ItemInfoCastCrewProps) => {
  const director = persons.filter((item) => item.enProfession === "director");

  const actors = persons.filter(
    (item, i) => item.enProfession === "actor" && i < 3
  );

  return (
    <div className="item-info__cast-crew">
      <span className="item-info__director">
        Режиссёр:{" "}
        <Link to={`/person/${director[0].id}`} className="item-info__cast">
          {director[0].name}
        </Link>
      </span>
      <span className="item-info__director">
        <ul className="item-info__list">
          Актеры:
          {actors.map((item) => (
            <Link to={`/person/${item.id}`} className="item-info__cast">
              {item.name}
            </Link>
          ))}
        </ul>
      </span>
    </div>
  );
};

export default ItemInfoCastCrew;
