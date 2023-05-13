import MySelect from "components/UI/MySelect/MySelect";
import { useSelector } from "react-redux";
import { selectMovies } from "store/MoviesSlice/moviesSelector";

type Options = {
  value: string;
  label: string;
};

const genres: Options[] = [
  {
    value: "драма",
    label: "Драма",
  },
  {
    value: "комедия",
    label: "Комедия",
  },
  {
    value: "биография",
    label: "Биография",
  },
  {
    value: "криминал",
    label: "Криминал",
  },
  {
    value: "боевик",
    label: "Боевик",
  },
  {
    value: "триллер",
    label: "Триллер",
  },
  {
    value: "фантастика",
    label: "Фантастика",
  },
  {
    value: "фэнтези",
    label: "Фэнтези",
  },
  {
    value: "детектив",
    label: "Детектив",
  },
  {
    value: "мелодрама",
    label: "Мелодрама",
  },
  {
    value: "вестерн",
    label: "Вестерн",
  },
  {
    value: "история",
    label: "История",
  },
  {
    value: "приключения",
    label: "Приключения",
  },
];

const sort: Options[] = [
  {
    value: "rating.kp",
    label: "По рейтингу",
  },
  {
    value: "year",
    label: "По дате выхода",
  },
];

const CatalogFilters = () => {
  const { data } = useSelector(selectMovies);

  console.log(data);

  return (
    <div className="catalog__filters">
      <div className="catalog__genre">
        <MySelect options={genres} placeholder="Жанры" />
      </div>
      <div className="catalog__sort">
        <MySelect options={sort} placeholder="Сортировать по..." />
      </div>
      {/* <div className="catalog__rating">
        <MySelect options={genres} placeholder="Рейтинг" />
      </div>
      <div className="catalog__year">
        <MySelect options={genres} placeholder="Год" />
      </div> */}
    </div>
  );
};

export default CatalogFilters;
