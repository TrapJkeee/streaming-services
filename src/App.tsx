import { useEffect } from "react";
import { useAppDispatch } from "store/redux-hooks";
import { fetchAllMoviesData } from "store/MoviesSlice/moviesData";
import { Routes, Route } from "react-router-dom";
import Layout from "pages/Layout";
import HomePage from "pages/HomePage";
import NotFound from "pages/NotFound";
import { fetchAllSeriesData } from "store/SeriesSlice/seriesData";
import CatalogFilmsPage from "pages/CatalogFilmsPage";
import CatalogSerialsPage from "pages/CatalogSerialsPage";
import CatalogCartoonsPage from "pages/CatalogCartoonsPage";
import { fetchAllCartoonsData } from "store/CartoonsSlice/cartoonsData";
import "./App.scss";
import { fetchTopMoviesData } from "store/TopMoviesSlice/topMoviesData";
import {
  fetchComedyFilmsData,
  fetchDramaFilmsData,
  fetchNewCartoonsData,
  fetchNewFilmsData,
  fetchThrillerFilmsData,
} from "store/GenresSlice/genresData";
import FilmPage from "pages/FilmPage";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllMoviesData());
    dispatch(fetchAllSeriesData());
    dispatch(fetchAllCartoonsData());
    dispatch(fetchTopMoviesData());
    dispatch(fetchComedyFilmsData());
    dispatch(fetchDramaFilmsData());
    dispatch(fetchNewCartoonsData());
    dispatch(fetchNewFilmsData());
    dispatch(fetchThrillerFilmsData());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" index element={<HomePage />} />
        <Route path="/films" element={<CatalogFilmsPage />} />
        <Route path="/serials" element={<CatalogSerialsPage />} />
        {/* <Route path="/cartoons" element={<CatalogCartoonsPage />} /> */}
        <Route path="/film/:id" element={<FilmPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
