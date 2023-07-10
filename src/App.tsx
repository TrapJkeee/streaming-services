import { useEffect, lazy } from "react";
import { useAppDispatch } from "store/redux-hooks";
import { Routes, Route } from "react-router-dom";
import { fetchAllCartoonsData } from "store/CartoonsSlice/cartoonsData";
import { fetchTopMoviesData } from "store/TopMoviesSlice/topMoviesData";
import {
  fetchComedyFilmsData,
  fetchDramaFilmsData,
  fetchNewCartoonsData,
  fetchNewFilmsData,
  fetchThrillerFilmsData,
} from "store/GenresSlice/genresData";
import Layout from "pages/Layout";
import HomePage from "pages/HomePage";
import NotFound from "pages/NotFound";
import CatalogFilmsPage from "pages/CatalogFilmsPage";
import CatalogSerialsPage from "pages/CatalogSerialsPage";
import CatalogCartoonsPage from "pages/CatalogCartoonsPage";
import FilmPage from "pages/FilmPage";
import PersonPage from "pages/PersonPage";
import "./App.scss";

// const HomePage = lazy(() => import("pages/HomePage"));
// const CatalogFilmsPage = lazy(() => import("pages/CatalogFilmsPage"));
// const CatalogSerialsPage = lazy(() => import("pages/CatalogSerialsPage"));
// const CatalogCartoonsPage = lazy(() => import("pages/CatalogCartoonsPage"));
// const FilmPage = lazy(() => import("pages/FilmPage"));
// const PersonPage = lazy(() => import("pages/PersonPage"));
// const NotFound = lazy(() => import("pages/NotFound"));

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(fetchTopMoviesData());
    // dispatch(fetchAllCartoonsData());
    // dispatch(fetchComedyFilmsData());
    // dispatch(fetchDramaFilmsData());
    // dispatch(fetchNewCartoonsData());
    // dispatch(fetchNewFilmsData());
    // dispatch(fetchThrillerFilmsData());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<HomePage />} />
        <Route path="/films" element={<CatalogFilmsPage />} />
        <Route path="/serials" element={<CatalogSerialsPage />} />
        <Route path="/cartoons" element={<CatalogCartoonsPage />} />
        <Route path="/film/:id" element={<FilmPage />} />
        <Route path="/person/:id" element={<PersonPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
