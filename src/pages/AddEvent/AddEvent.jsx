import React from "react";
import s from "./AddEvent.module.scss";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { FetchStart, FetchSuccess, FetchFailure } from "../../redux/actions";
import EventSchema from "../../components/Formik/Schemas/EventSchema";
import DateTime from "../../components/Formik/DateTime/DateTime";
import InputField from "../../components/Formik/InputField/InputField";

const AddEvent = () => {
  const { currentUser, isFetching, error } = useSelector(
    (state) => state.userReducer
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <motion.div
      className={s.addEvent}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className={s.wrapper}>
        <div className={s.pageTitle}>Новое мероприятие</div>
        <Formik
          initialValues={{
            dateTime: "",
            place: "",
            cast: "",
            record: false,
            tickets: "",
          }}
          validateOnMount
          validationSchema={EventSchema}
          onSubmit={async (values) => {
            try {
              dispatch(FetchStart());
              const res = await fetch(`/api/event/create`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ ...values, userRef: currentUser._id }),
              });
              const data = await res.json();

              if (data.success === false) {
                dispatch(FetchFailure(data.message));
                return;
              }
              dispatch(FetchSuccess(data));
              navigate("/");
            } catch (err) {
              dispatch(FetchFailure(err.message));
            }
          }}
        >
          {(formikProps) => (
            <Form className={s.form}>
              <div className={s.body}>
                <div className={s.eventInfo}>
                  <div className={s.date}>
                    <DateTime
                      id="dateTime"
                      name="dateTime"
                      placeholder="Дата и время"
                      formikProps={formikProps}
                      selected={formikProps.values.dateTime}
                    />
                  </div>
                  <div className={s.place}>
                    <InputField
                      formikProps={formikProps}
                      type="text"
                      id="place"
                      name="place"
                      placeholder="Место"
                    />
                  </div>
                  <div className={s.cast}>
                    <InputField
                      formikProps={formikProps}
                      type="text"
                      id="cast"
                      name="cast"
                      placeholder="Состав"
                    />
                  </div>
                  <div className={s.bottom}>
                    <div className={s.tickets}>
                      <InputField
                        formikProps={formikProps}
                        type="text"
                        id="tickets"
                        name="tickets"
                        placeholder="Ссылка на билеты"
                      />
                    </div>
                    <span>Будет съёмка?</span>
                    <Field
                      type="checkbox"
                      name="record"
                      className={s.checkBoxInput}
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className={s.submit} disabled={isFetching}>
                <span>
                  {isFetching ? "Сохранение..." : "Добавить мероприятие"}
                </span>
              </button>
              {error && <div className={s.serverError}>{error}</div>}
            </Form>
          )}
        </Formik>
      </div>
    </motion.div>
  );
};

export default AddEvent;
