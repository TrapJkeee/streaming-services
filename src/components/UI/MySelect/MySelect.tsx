import { useState } from "react";
import "./MySelect.scss";
import Select, { OnChangeValue, SingleValue } from "react-select";

type SelectOptions = {
  value: string;
  label: string;
};

interface MySelectProps {
  options: SelectOptions[];
  placeholder: string;
  value?: SelectOptions;
}

const MySelect = ({ options, value, placeholder }: MySelectProps) => {
  const [currentValue, setCurrentValue] = useState("");

  const getValue = () => {
    return currentValue
      ? options.find((item) => item.value === currentValue)
      : setCurrentValue("");
  };

  const changeHandler = (newValue: any) => {
    if (!newValue) {
      // setCurrentValue("");
      return;
    }
    setCurrentValue(newValue.value);
  };

  console.log(currentValue);
  return (
    <div>
      <Select
        classNamePrefix="custom-select"
        options={options}
        placeholder={placeholder}
        isLoading={false}
        isClearable={true}
        isSearchable={true}
        // value={getValue()}
        onChange={changeHandler}
      />
    </div>
  );
};

export default MySelect;
