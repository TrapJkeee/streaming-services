import React from "react";
import { Link } from "react-router-dom";

interface CastItemProps {
  id: number;
  name: string;
  img: string | null;
  job: string;
}

const CastItem = ({ id, img, job, name }: CastItemProps) => {
  return (
    <Link to={`/person/${id}`} className="cast__item">
      <div className="cast__foto">
        <img src={img ? img : ""} alt={name} className="cast__img" />
      </div>
      <div className="cast__name">{name}</div>
      <div className="cast__job">{job.slice(0, -1)}</div>
    </Link>
  );
};

export default CastItem;
