import React, { useState } from "react";
import s from "./AddExpert.module.scss";
import { Formik, Form } from "formik";
import { motion } from "framer-motion";
import useModal from "../../hooks/useModal";
import { useDispatch, useSelector } from "react-redux";
import { FetchStart, FetchSuccess, FetchFailure } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import FileUpload from "../../components/Formik/FileUpload/FileUpload";
import ExpertSchema from "../../components/Formik/Schemas/ExpertSchema";
import InputField from "../../components/Formik/InputField/InputField";

const AddExpert = () => {
  const { isShowing, toggleModal } = useModal();
  const { currentUser, isFetching, error } = useSelector(
    (state) => state.userReducer
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [finalImage, setFinalImage] = useState("");

  return (
    <motion.div
      className={s.addExpert}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className={s.wrapper}>
        <div className={s.pageTitle}>Новый эксперт</div>
        <Formik
          initialValues={{
            name: "",
            link: "",
            avatar: "",
          }}
          validateOnMount
          validationSchema={ExpertSchema}
          onSubmit={async (values) => {
            try {
              dispatch(FetchStart());
              const res = await fetch(`/api/expert/create`, {
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
            <Form className={s.form} encType="multipart/form-data">
              <div className={s.body}>
                <div className={s.attachment}>
                  <div className={s.avatar}>
                    <FileUpload
                      name="avatar"
                      id="avatar"
                      placeholder="Фото"
                      isShowing={isShowing}
                      toggleModal={toggleModal}
                      formikProps={formikProps}
                      finalImage={finalImage}
                      setFinalImage={setFinalImage}
                      minHeight="133px"
                      aspect={3 / 3}
                    />
                  </div>
                </div>
                <div className={s.expertInfo}>
                  <div className={s.name}>
                    <InputField
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Имя эксперта"
                      formikProps={formikProps}
                    />
                  </div>
                  <div className={s.link}>
                    <InputField
                      type="text"
                      name="link"
                      id="link"
                      placeholder="Ссылка"
                      formikProps={formikProps}
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className={s.submit}
                // disabled={isFetching}
                disabled
              >
                <span>
                  {/* {isFetching ? "Сохранение..." : "Добавить эксперта"} */}
                  Нельзя добавить эксперта в демо режиме
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

export default AddExpert;
