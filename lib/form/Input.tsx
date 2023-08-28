import React, { FC, memo } from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

interface InputComponentPropsType {
  inputName: string;
  inputLabel?: string;
  labelClassName?: string;
  fieldClassName?: string;
  errorMessageClassName?: string;
  wrapperClassName?: string;
}

const Input: FC<InputComponentPropsType> = memo((props) => {
  const {
    inputLabel,
    inputName,
    labelClassName,
    fieldClassName,
    wrapperClassName,
    ...rest
  } = props;
  return (
    <div className={`form-control relative ${wrapperClassName}`}>
      
      {
        inputLabel && 
          <label htmlFor={inputName} className={labelClassName}>
            {inputLabel}
          </label>
      }
      <Field
        id={inputName}
        name={inputName}
        className={`${fieldClassName} dark:bg-transparent border-white border px-2`}
        {...rest}
      />
      <ErrorMessage
        className="absolute bottom-0 right-0 text-red-400"
        // @ts-ignore
        component={TextError}
        name={inputName}
      />
    </div>
  );
});


  Input.displayName = "InputComponent";


export default Input;
