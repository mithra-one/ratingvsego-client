import React from "react";
import s from "./DateTime.module.scss";
import DatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from "date-fns/locale/ru";
registerLocale("ru", ru);

const DateTime = ({ formikProps, selected, id, name, placeholder }) => {
  return (
    <div className={s.inputField}>
      <label htmlFor={id}>{placeholder}</label>
      <DatePicker
        wrapperClassName={s.picker}
        className={s.pickerInput}
        selected={selected}
        onChange={(date) => {
          formikProps.setFieldValue(name, date);
        }}
        showTimeSelect
        timeIntervals={15}
        locale="ru"
        dateFormat="dd/MM/yyyy  HH:mm"
        placeholderText={placeholder}
      />
      {formikProps.errors[name] && formikProps.touched[name] ? (
        <div className={s.formikError}>{formikProps.errors[name]}</div>
      ) : null}
    </div>
  );
};

export default DateTime;
