import React from "react";
import { Persons } from "types";

interface ItemInfoCastCrewProps {
  persons: Persons[];
}

const ItemInfoCastCrew = ({ persons }: ItemInfoCastCrewProps) => {
  const director = persons.filter((item) => item.enProfession === "director");

  const actors = persons.filter(
    (item, i) => item.enProfession === "actor" && i < 3
  );

  console.log(actors, "dir");
  return (
    <div className="item-info__cast-crew">
      <span className="item-info__director">
        Режиссёр: <span className="item-info__cast">{director[0].name}</span>
      </span>
      <span className="item-info__director">
        <ul className="item-info__list">
          Актеры:
          {actors.map((item) => (
            <li className="item-info__cast">{item.name}</li>
          ))}
        </ul>
      </span>
    </div>
  );
};

export default ItemInfoCastCrew;
