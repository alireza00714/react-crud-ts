import React, { ChangeEvent, useEffect, useState } from "react";
import { IformValues } from "../../types";

interface IInput {
  name: string;
  value?: string;
  onChange?: Function;
  setFormValue: Function;
  formValue: IformValues | undefined;
  label: string;
}

const Input: React.FC<IInput> = (props) => {
  const [currValue, setCurrValue] = useState<string>("");
  const handleChange = (e: ChangeEvent) => {
    let inputEl = e.target as HTMLInputElement;
    setCurrValue(inputEl.value);
  };

  useEffect(() => {
    if (
      props.formValue?.firstName === undefined &&
      props.formValue?.lastName === undefined &&
      props.formValue?.address === undefined
    ) {
      setCurrValue("");
    }
  }, [props.formValue]);

  useEffect(() => {
    currValue.length > 0 && props.setFormValue({ ...props.formValue, [props.name]: currValue });
  }, [currValue]);

  return (
    <>
      {/* <input type="text" value={currValue} onChange={handleChange} /> */}
      <label>{props.label}</label>
      <input className="form-control form-control-lg" value={currValue} onChange={handleChange} type="text" />
    </>
  );
};

export default Input;
