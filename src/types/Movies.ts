type Countries = {
  name: string;
};

type Externalid = {
  kpHD: string;
  imdb: string;
  tmbd: number;
};

export type Genres = {
  name: string;
};

type Names = {
  name: string;
  language?: string;
  type?: string | null;
};

type Rating = {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number | null;
};

type Watchability = {
  name: string;
  logo: string;
};

export type Movies = {
  alternativeName: string | null;
  countries: Countries[];
  description: string | null;
  enName: string | null;
  externalId: Externalid;
  genres: Genres[];
  id: number;
  logo: {
    url: string | null;
  };
  movieLength: number;
  name: string;
  names: Names[];
  poster: {
    previewUrl: string;
    url: string;
  };
  rating: Rating;
  shortDescription: string | null;
  type: string;
  votes: Rating;
  watchability: Watchability;
  year: number;
};

type BackDrop = {
  url: string | null;
  previewUrl: string | null;
};

type Facts = {
  value: string;
  type: string;
  spoiler: boolean;
};

export type Persons = {
  id: number;
  photo: string | null;
  name: string;
  enName: string;
  description: string;
  profession: string;
  enProfession: string;
};

export type Status = "idle" | "loading" | "finished" | "error";

export type TopMovies = Pick<
  Movies,
  "id" | "rating" | "genres" | "name" | "year"
> & {
  backdrop: BackDrop;
};

export type MoviesSlice = {
  status: Status;
  data: Movies[];
};

export type CurrentFilm = Pick<
  Movies,
  | "id"
  | "rating"
  | "genres"
  | "name"
  | "year"
  | "countries"
  | "movieLength"
  | "shortDescription"
  | "description"
  | "logo"
> & {
  facts: Facts[];
  backdrop: BackDrop;
  persons: Persons[] | null;
};
