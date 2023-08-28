import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";

function RadioButtons(props: any) {
  const { inputLabel, inputName, options, ...rest } = props;
  return (
    <div className="form-control">
      <label>{inputName}</label>
      <Field name={inputName}>
        {({ field }: any) => {
          return options.map((option: any) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
      {/* @ts-ignore */}
      <ErrorMessage component={TextError} name={inputName} />
    </div>
  );
}

export default RadioButtons;
