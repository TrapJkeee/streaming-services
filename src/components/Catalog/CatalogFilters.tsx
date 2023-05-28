import { useState } from "react";
import MySelect, { SelectOptions } from "components/UI/MySelect/MySelect";
import { SingleValue } from "react-select";

import { useSearchParams } from "react-router-dom";

const genres: SelectOptions[] = [
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

  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get("genres.name") || "";

  const changeHandler = (newValue: SingleValue<SelectOptions>) => {
    if (!newValue) {
      setCurrentValue("");
      setSearchParams("");
      return;
    }
    setCurrentValue(newValue.value);
    setSearchParams({ [`genres.name`]: newValue.value });
  };
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
