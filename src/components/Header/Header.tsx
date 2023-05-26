import { Container } from "components/Contanier/Container";
import { ReactComponent as Logo } from "assets/svg/logo.svg";

import { ReactComponent as Search } from "assets/svg/search.svg";

import "./Header.scss";
import HeaderMenu from "./HeaderMenu";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <header className="header">
        <div className="header__row">
          <Link to="/" className="header__logo">
            <Logo />
          </Link>
          <HeaderMenu />
          {/* <span className="header__search">
            <Search />
          </span> */}
        </div>
      </header>
    </Container>
  );
};

export default Header;
