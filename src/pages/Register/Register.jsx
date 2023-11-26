import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import s from "./Register.module.scss";
import { Formik, Form, Field } from "formik";
import { motion } from "framer-motion";
import { Turnstile } from "@marsidev/react-turnstile";
import SignUpSchema from "../../components/Formik/Schemas/SignUpSchema";

const Register = () => {
  const captchaRef = useRef();

  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  return (
    <motion.div
      className={s.registerPage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className={s.wrapper}>
        <div className={s.pageTitle}>Добро пожаловать!</div>
        <Formik
          initialValues={{
            username: "",
            realName: "",
            password: "",
            token: "",
          }}
          validateOnMount
          validationSchema={SignUpSchema}
          onSubmit={async (values) => {
            try {
              setIsFetching(true);
              const res = await fetch(`/api/auth/signup`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  username: values.username,
                  realName: values.realName,
                  password: values.password,
                }),
              });
              const data = await res.json();

              if (data.success === false) {
                setError(data.message);
                setIsFetching(false);
                return;
              }
              setIsFetching(false);
              setError(null);
              navigate("/login");
            } catch (err) {
              setIsFetching(false);
              setError(err.message);
            }
          }}
        >
          {(formikProps) => (
            <Form className={s.form}>
              <div className={s.body}>
                <div className={s.userInfo}>
                  <div className={`${s.inputField} ${s.username}`}>
                    <label htmlFor="username">Логин</label>
                    <Field
                      type="text"
                      name="username"
                      placeholder="Введите логин"
                      id="username"
                      className={s.textInput}
                    />
                    {formikProps.errors.username &&
                    formikProps.touched.username ? (
                      <div className={s.formikError}>
                        {formikProps.errors.username}
                      </div>
                    ) : null}
                  </div>

                  <div className={`${s.inputField} ${s.realName}`}>
                    <label htmlFor="realName">Имя</label>
                    <Field
                      type="text"
                      name="realName"
                      placeholder="Введите имя"
                      id="realName"
                      className={s.textInput}
                    />
                    {formikProps.errors.realName &&
                    formikProps.touched.realName ? (
                      <div className={s.formikError}>
                        {formikProps.errors.realName}
                      </div>
                    ) : null}
                  </div>

                  <div className={`${s.inputField} ${s.password}`}>
                    <label htmlFor="password">Пароль</label>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Введите пароль"
                      id="password"
                      className={s.textInput}
                    />
                    {formikProps.errors.password &&
                    formikProps.touched.password ? (
                      <div className={s.formikError}>
                        {formikProps.errors.password}
                      </div>
                    ) : null}
                  </div>

                  <div className={s.bottom}>
                    <Turnstile
                      ref={captchaRef}
                      siteKey={import.meta.env.VITE_TURNSTILE_SITEKEY}
                      onSuccess={(token) => {
                        formikProps.setFieldValue("token", token);
                      }}
                      onExpire={() => captchaRef.current?.reset()}
                    />
                    {formikProps.errors.token ? (
                      <div className={s.formikError}>
                        {formikProps.errors.token}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className={s.submit}
                disabled={
                  (formikProps.touched.username &&
                    formikProps.errors.username) ||
                  (formikProps.touched.realName &&
                    formikProps.errors.realName) ||
                  (formikProps.touched.password &&
                    formikProps.errors.password) ||
                  formikProps.values.token === "" ||
                  isFetching
                }
              >
                <span>{isFetching ? "Загрузка..." : "Зарегистрироваться"}</span>
              </button>
              {error && <div className={s.serverError}>{error}</div>}
            </Form>
          )}
        </Formik>
      </div>
    </motion.div>
  );
};

export default Register;
