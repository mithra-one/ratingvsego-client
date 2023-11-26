import React from "react";
import s from "./InputField.module.scss";
import { Field } from "formik";

const InputField = ({ formikProps, type, id, name, placeholder }) => {
  return (
    <div className={s.inputField}>
      <label htmlFor={id}>{placeholder}</label>
      <Field
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className={s.textInput}
      />
      {formikProps.errors[name] && formikProps.touched[name] ? (
        <div className={s.formikError}>{formikProps.errors[name]}</div>
      ) : null}
    </div>
  );
};

export default InputField;
