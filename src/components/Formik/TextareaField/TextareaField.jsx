import React from "react";
import s from "./TextareaField.module.scss";

const TextareaField = ({ formikProps, index, placeholder, name }) => {
  const handleInputChange = (e) => {
    formikProps.setFieldValue(`quotes[${index}].text`, e.target.value);
  };
  return (
    <textarea
      className={s.textarea}
      onChange={(e) => handleInputChange(e)}
      value={formikProps.values.quotes[index].text}
      name={name}
      placeholder={placeholder}
      rows="3"
    />
  );
};

export default TextareaField;
