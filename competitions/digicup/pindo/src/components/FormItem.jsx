import React from "react";
import Error from "./Error";
import Checkbox from "./Checkbox";
import Dropdown from "./Dropdown";
import Textarea from "./Textarea";
import TextInput from "./TextInput";
import CitySelector from "./CitySelector";
import FormType from "../constants/FormType";
import { useFormContext } from "react-hook-form" ;


function FormItem({ type, options, error, ...props }) {
  const { register, formState : { errors } ,setValue , watch , setError } = useFormContext();

  React.useEffect(() => {
    if (watch("delivery") && !watch("cityId")) {
      setError("cityId", { type: "manual", message: 'this field is required'});
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch("delivery"), watch("cityId")]);

  function renderFormItem() {
    switch (type) {
      case FormType.TEXT:
        return <TextInput {...props} {...register(props.name, { required : true })}/>;
      case FormType.TEXTAREA:
        return watch("productStatus") === "4" && ( <Textarea {...props} {...register(props.name, { required : watch("productStatus") === "4"  })}/>);
      case FormType.CHECKBOX:
        return <Checkbox {...props} {...register(props.name)}/>;
      case FormType.DROPDOWN:
        return <Dropdown {...props} options={options} {...register(props.name)} />;
      case FormType.CITY:
        return <CitySelector {...props} onChange={(id) => setValue(props.name,id)}  />;
      default:
        return null;
    }
  }

  let errorMessage = errors[props.name] ? errors[props.name].message : null;

  return (
    <div data-testid={`form-item-${props.name}`}>
      {renderFormItem()}
      {errorMessage && <Error name={props.name} error={errorMessage} />}
    </div>
  );
}

export default FormItem;
