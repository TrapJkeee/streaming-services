import { useState, useEffect, memo } from "react";
import "./MySelect.scss";
import Select, { ActionMeta, OnChangeValue, SingleValue } from "react-select";
import { fetchMoviesByFilterData } from "store/FilmsByFilter/filmsByFilterData";
import { useAppDispatch } from "store/redux-hooks";
import { useParams, useNavigate, useLocation } from "react-router-dom";

export type SelectOptions = {
  value: string;
  label: string;
};

interface MySelectProps {
  options: SelectOptions[];
  placeholder: string;
  onChange: (value: SingleValue<SelectOptions>) => void;
}

const MySelect = ({ options, placeholder, onChange }: MySelectProps) => {
  return (
    <>
      <Select
        classNamePrefix="custom-select"
        options={options}
        placeholder={placeholder}
        isClearable={true}
        isSearchable={true}
        onChange={(e) => onChange(e)}
      />
    </>
  );
};

export default memo(MySelect);
