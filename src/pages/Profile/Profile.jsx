import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import s from "./Profile.module.scss";
import { Formik, Form, Field } from "formik";
import {
  UpdateUserStart,
  UpdateUserSuccess,
  UpdateUserFailure,
} from "../../redux/actions";
import ProfileSchema from "../../components/Formik/Schemas/ProfileSchema";

const Profile = () => {
  const { currentUser, isFetching, error } = useSelector(
    (state) => state.userReducer
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [updateSuccess, setUpdateSuccess] = useState(false);

  return (
    <motion.div
      className={s.profilePage}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className={s.wrapper}>
        <div className={s.pageTitle}>Профиль</div>
        <Formik
          initialValues={{
            username: currentUser.username,
            realName: currentUser.realName,
            password: "",
          }}
          validateOnMount
          validationSchema={ProfileSchema}
          onSubmit={async (values) => {
            try {
              dispatch(UpdateUserStart());
              const res = await fetch(`/api/user/update/${currentUser._id}`, {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(values),
              });
              const data = await res.json();

              if (data.success === false) {
                dispatch(UpdateUserFailure(data.message));
                return;
              }
              dispatch(UpdateUserSuccess(data));
              setUpdateSuccess(true);
              setTimeout(() => {
                navigate("/");
              }, 1500);
            } catch (err) {
              dispatch(UpdateUserFailure(err.message));
            }
          }}
        >
          {(formikProps) => (
            <Form className={s.form}>
              <div className={s.body}>
                <div className={s.userInfo}>
                  <div className={s.inputField}>
                    <label htmlFor="username">Логин</label>
                    <Field
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Логин"
                      className={s.textInput}
                    />
                    {formikProps.errors.username &&
                    formikProps.touched.username ? (
                      <div className={s.formikError}>
                        {formikProps.errors.username}
                      </div>
                    ) : null}
                  </div>
                  <div className={s.inputField}>
                    <label htmlFor="realName">Имя</label>
                    <Field
                      type="text"
                      name="realName"
                      id="realName"
                      placeholder="Имя"
                      className={s.textInput}
                    />
                    {formikProps.errors.realName &&
                    formikProps.touched.realName ? (
                      <div className={s.formikError}>
                        {formikProps.errors.realName}
                      </div>
                    ) : null}
                  </div>
                  <div className={s.inputField}>
                    <label htmlFor="password">Пароль</label>
                    <Field
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Пароль"
                      className={s.textInput}
                    />
                    {formikProps.errors.password &&
                    formikProps.touched.password ? (
                      <div className={s.formikError}>
                        {formikProps.errors.password}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className={s.submit}
                // disabled={
                //   (formikProps.touched.username &&
                //     formikProps.errors.username) ||
                //   (formikProps.touched.password &&
                //     formikProps.errors.password) ||
                //   isFetching
                // }
                disabled
              >
                <span>
                  {/* {isFetching ? "Загрузка..." : "Сохранить"} */}
                  Нельзя изменить профиль в демо режиме
                </span>
              </button>
              {error && <div className={s.serverError}>{error}</div>}
              {updateSuccess && (
                <div className={s.updateSuccess}>Профиль обновлён</div>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </motion.div>
  );
};

export default Profile;
