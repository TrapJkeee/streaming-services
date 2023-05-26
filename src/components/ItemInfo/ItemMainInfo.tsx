import { Container } from "components/Contanier/Container";
import { sklonenie } from "helpers/sklonenie";
import { CurrentFilm } from "types";
import ItemInfoCastCrew from "./ItemInfoCastCrew";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import Modal from "components/UI/Modal/Modal";
import { useAppDispatch } from "store/redux-hooks";
import { selectModal } from "store/ModalSlice/modalSelector";
import { useSelector } from "react-redux";
import { modalActions } from "store/ModalSlice/modalSlice";

interface ItemMainInfoProps {
  currentFilm: CurrentFilm;
}
const ItemMainInfo = ({ currentFilm }: ItemMainInfoProps) => {
  const {
    countries,
    backdrop,
    genres,
    logo,
    movieLength,
    name,
    rating,
    shortDescription,
    year,
    persons,
    videos,
    watchability,
  } = currentFilm;
  const dispatch = useAppDispatch();

  const { isModalOpen } = useSelector(selectModal);

  const openModalHandler = () => {
    dispatch(modalActions.openModal());
    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = "17px";
  };

  const trailers =
    videos?.trailers?.length > 0 ? videos?.trailers[0].url : undefined;

  return (
    <div
      className="item-info__main"
      style={{ backgroundImage: `url(${backdrop.url})` }}
    >
      <Container>
        <div className="item-info__content">
          {logo?.url ? (
            <div className="item-info__avatar">
              <img
                className="item-info__img"
                src={`${logo?.url}`}
                alt={name}
                loading="lazy"
              />
            </div>
          ) : (
            <span className="item-info__name">{name}</span>
          )}
          <div className="item-info__stats">
            <span className="item-info__rating">{rating.kp.toFixed(2)}</span>
            <span className="item-info__year">{year}</span>
            {genres.map((item) => (
              <span className="item-info__genre">{item.name}</span>
            ))}
          </div>

          <div className="item-info__stats">
            {countries.map((item) => (
              <span className="item-info__country">{item.name}</span>
            ))}
            {movieLength && (
              <span className="item-info__time">
                {movieLength}
                {` ${sklonenie(movieLength, ["минуту", "минуты", "минут"])}`}
              </span>
            )}
          </div>
          <div className="item-info__short-description">{shortDescription}</div>
          {persons && <ItemInfoCastCrew persons={persons} />}
          <div className="item-info__btn-block">
            {watchability?.items?.length > 0 && (
              <Link to={watchability?.items[0]?.url}>
                <button className="item-info__btn item-info__btn-watch">
                  Смотреть
                </button>
              </Link>
            )}
            {trailers && (
              <button
                className="item-info__btn item-info__btn-trailer"
                onClick={openModalHandler}
              >
                Трейлер
              </button>
            )}
            {isModalOpen && (
              <Modal>
                <ReactPlayer controls url={trailers} />
              </Modal>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ItemMainInfo;
