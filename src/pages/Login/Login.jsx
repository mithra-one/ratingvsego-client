import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import s from "./Login.module.scss";
import { Formik, Form, Field } from "formik";
import { motion } from "framer-motion";
import { Turnstile } from "@marsidev/react-turnstile";
import { useDispatch, useSelector } from "react-redux";
import { SignInStart, SignInSuccess, SignInFailure } from "../../redux/actions";
import SignInSchema from "../../components/Formik/Schemas/SignInSchema";

const Login = () => {
  const captchaRef = useRef();

  const { isFetching, error } = useSelector((state) => state.userReducer);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <motion.div
      className={s.loginPage}
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
            password: "",
            token: "",
          }}
          validateOnMount
          validationSchema={SignInSchema}
          onSubmit={async (values) => {
            try {
              dispatch(SignInStart());
              const res = await fetch(`/api/auth/signin`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  username: values.username,
                  password: values.password,
                  token: values.token,
                }),
              });
              const data = await res.json();

              if (data.success === false) {
                dispatch(SignInFailure(data.message));
                return;
              }
              dispatch(SignInSuccess(data));
              navigate("/");
            } catch (err) {
              dispatch(SignInFailure(err.message));
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
                      className={s.captcha}
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
                  (formikProps.touched.password &&
                    formikProps.errors.password) ||
                  formikProps.values.token === "" ||
                  isFetching
                }
              >
                <span>{isFetching ? "Загрузка..." : "Войти"}</span>
              </button>
              {error && <div className={s.serverError}>{error}</div>}
            </Form>
          )}
        </Formik>
      </div>
    </motion.div>
  );
};

export default Login;
