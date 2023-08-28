import React, { FC, memo } from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import Select from "./Select";
import RadioButtons from "./RadioButtons";
import CheckboxGroup from "./CheckboxGroup";
// import DatePicker from './DatePicker'
// import ChakraInput from './ChakraInput'

interface FormikControlType {
  control: string;
  inputName: string;
  inputLabel?: string;
  labelClassName?: string;
  fieldClassName?: string;
  errorMessageClassName?: string;
  type: string;
  wrapperClassName?: string;
  placeholder?: string
}

const FormikControl: FC<FormikControlType> = memo((props) => {
  const { control, ...rest } = props;
  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "textarea":
      return <Textarea {...rest} />;
    case "select":
      return <Select {...rest} />;
    case "radio":
      return <RadioButtons {...rest} />;
    case "checkbox":
      return <CheckboxGroup {...rest} />;
    // case 'date':
    //   return <DatePicker {...rest} />
    // case 'chakraInput':
    //   return <ChakraInput {...rest} />
    default:
      return null;
  }
});

FormikControl.displayName = "FormkiControl";

export default FormikControl;
