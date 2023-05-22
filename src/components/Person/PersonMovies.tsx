import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectPerson } from "store/PersonSlice/personSelector";
import { Person } from "types";
import { PersonInfoProps } from "./PersonInfo";
import PersonMoviesItem from "./PersonMoviesItem";

interface PersonMovieProps extends PersonInfoProps {}

const PersonMovies = ({ data }: PersonMovieProps) => {
  const movies = data?.movies;

  return (
    <div className="person-movies">
      <div className="person-movies__body">
        <h2 className="person-movies__title">Фильмография</h2>
        <div className="person-movies__films">
          {movies.map((item) => (
            <PersonMoviesItem
              key={item.id}
              id={item.id}
              name={item.name}
              enName={item.alternativeName}
              description={item.description}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonMovies;
