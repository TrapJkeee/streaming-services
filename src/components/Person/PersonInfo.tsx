import { useSelector } from "react-redux";
import { selectPerson } from "store/PersonSlice/personSelector";
import { Person } from "types";

const dateParse = (date: number) => {
  const parseDate = new Date(date);
  const year = parseDate.getFullYear();
  const month = `${parseDate.getMonth() + 1}`.padStart(2, `0`);
  const day = `${parseDate.getDate()}`.padStart(2, `0`);
  return `${day}.${month}.${year}`;
};

export interface PersonInfoProps {
  data: Person;
}

const PersonInfo = ({ data }: PersonInfoProps) => {
  const {
    age,
    birthPlace,
    birthday,
    death,
    enName,
    growth,
    name,
    photo,
    profession,
    sex,
  } = data;

  const parseDate = Date.parse(`${birthday}`);
  const birthdayDate = parseDate ? dateParse(Date.parse(`${birthday}`)) : null;
  const deadDate = death ? dateParse(Date.parse(`${death}`)) : null;

  return (
    <div className="person__content">
      <div className="person__photo">
        <img src={photo} alt={name} className="person__img" />
      </div>
      <div className="person__body">
        <h1 className="person__name-ru">{name}</h1>
        <div className="person__name-en">{enName}</div>
        <div className="person__info">
          <div className="person__left">
            Карьера:
            {profession.map((item) => (
              <span className="person__rigth"> {item.value}</span>
            ))}
          </div>
          <div className="person__left">
            Дата рождения:
            <span className="person__rigth"> {birthdayDate}</span>
          </div>
          {birthPlace && (
            <div className="person__left">
              Место рождения:
              {birthPlace.map((item) => (
                <span className="person__rigth"> {item.value}</span>
              ))}
            </div>
          )}
          <div className="person__left">
            Пол:
            <span className="person__rigth"> {sex}</span>
          </div>
          {growth && (
            <div className="person__left">
              Рост:
              <span className="person__rigth"> {growth} см</span>
            </div>
          )}
          {deadDate ? (
            <span className="person__left">
              Дата смерти:
              <span className="person__rigth"> {deadDate}</span>
            </span>
          ) : (
            <span className="person__left">
              Возраст:
              <span className="person__rigth"> {age}</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonInfo;
