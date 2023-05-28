import { Container } from "components/Contanier/Container";
import CatalogFilters from "./CatalogFilters";
import CatalogBody from "./CatalogBody";
import { Movies } from "types";

import "./Catalog.scss";
export interface CatalogProps {
  data: Movies[];
  title: string;
  status?: string;
}

const Catalog = ({ title, data, status }: CatalogProps) => {
  return (
    <section>
      <Container>
        <div className="catalog">
          <div className="catalog__top">
            <h1 className="catalog__title">{title}</h1>
            <CatalogFilters />
          </div>
          <CatalogBody data={data} status={status} />
        </div>
      </Container>
    </section>
  );
};

export default Catalog;
