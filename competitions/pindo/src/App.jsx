import React from "react";
import FormItem from "./components/FormItem";
import Button from "./components/Button";
import "./App.css";
import { useForm , FormProvider} from "react-hook-form";

function App({ onSubmit, fields }) {
  const formMethods = useForm();

  const onSubmitForm = (data) => {
    console.log('data',data);
    onSubmit(data);
  };


  return (
      <form className="form" onSubmit={formMethods.handleSubmit(onSubmitForm)}>
        <FormProvider {...formMethods}> 
          {fields.map((data) => (
            <FormItem key={data.name} className="form__item" {...data} />
          ))}
        </FormProvider>
        <Button type="submit">ثبت</Button>
      </form>
  );
}

export default App;
