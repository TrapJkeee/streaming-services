type ValueStr = {
  value: string;
};

export type MoviesPerson = {
  id: number;
  name: string;
  alternativeName: string;
  rating: number | null;
  general: boolean;
  description: string;
  enProfession: string;
};

export type Person = {
  isParse: boolean;
  id: number;
  name: string;
  enName: string;
  photo: string;
  profession: ValueStr[];
  birthPlace: ValueStr[];
  deathPlace: string | null;
  movies: MoviesPerson[];
  age: number | null;
  birthday: string;
  countAwards: number | string;
  death: Date | null;
  growth: number;
  sex: string;
};
