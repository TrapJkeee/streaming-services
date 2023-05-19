import { useState, useEffect } from "react";
import MySelect, { SelectOptions } from "components/UI/MySelect/MySelect";
import { OnChangeValue, SingleValue } from "react-select";
import { fetchMoviesByFilterData } from "store/FilmsByFilter/filmsByFilterData";
import { useAppDispatch } from "store/redux-hooks";
import { useLocation } from "react-router-dom";

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

const CatalogFilters = () => {
  const [currentValue, setCurrentValue] = useState("");

  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  // console.log(pathname);

  useEffect(() => {
    // if (!currentValue) return;
    if (pathname === "/films") {
      dispatch(fetchMoviesByFilterData(currentValue));
    }
  }, [currentValue]);

  const changeHandler = (newValue: SingleValue<SelectOptions>) => {
    console.log(newValue, "newValue");
    if (!newValue) {
      setCurrentValue("");
      return;
    }
    setCurrentValue(newValue.value);
  };
  console.log(currentValue);
  return (
    <div className="catalog__filters">
      <div className="catalog__genre">
        <MySelect
          options={genres}
          placeholder="Жанры"
          onChange={changeHandler}
        />
      </div>
    </div>
  );
};

export default CatalogFilters;
