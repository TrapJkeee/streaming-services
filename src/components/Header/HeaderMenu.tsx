import { ReactComponent as Home } from "assets/svg/home.svg";
import { ReactComponent as Movie } from "assets/svg/movie.svg";
import { ReactComponent as Serials } from "assets/svg/serials.svg";
import { ReactComponent as Cartoons } from "assets/svg/cartoons.svg";
import { NavLink } from "react-router-dom";
import { memo } from "react";

const HeaderMenu = () => {
  return (
    <nav className="header__menu">
      <ul className="header__menu-body">
        <NavLink to="/" className="header__menu-item">
          <span className="header__menu-icon">
            <Home />
          </span>
          <span className="header__menu-text">Главная</span>
        </NavLink>
        <NavLink to="/films" className="header__menu-item">
          <span className="header__menu-icon">
            <Movie />
          </span>
          <span className="header__menu-text">Фильмы</span>
        </NavLink>
        <NavLink to="/serials" className="header__menu-item">
          <span className="header__menu-icon">
            <Serials />
          </span>
          <span className="header__menu-text">Сериалы</span>
        </NavLink>
        <NavLink to="/cartoons" className="header__menu-item">
          <span className="header__menu-icon">
            <Cartoons />
          </span>
          <span className="header__menu-text">Мультфильмы</span>
        </NavLink>
      </ul>
    </nav>
  );
};

export default memo(HeaderMenu);
