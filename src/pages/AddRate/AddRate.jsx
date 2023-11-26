import React, { useState, useEffect } from "react";
import s from "./AddRate.module.scss";
import { useNavigate } from "react-router-dom";
import { Formik, Form, FieldArray } from "formik";
import { motion } from "framer-motion";
import Select from "react-select";
import useModal from "../../hooks/useModal";
import { useDispatch, useSelector } from "react-redux";
import { FetchStart, FetchSuccess, FetchFailure } from "../../redux/actions";
import TextareaField from "../../components/Formik/TextareaField/TextareaField";
import FileUpload from "../../components/Formik/FileUpload/FileUpload";
import RateSchema from "../../components/Formik/Schemas/RateSchema";
import InputField from "../../components/Formik/InputField/InputField";

const AddRate = () => {
  const { isShowing, toggleModal } = useModal();
  const { currentUser, isFetching, error } = useSelector(
    (state) => state.userReducer
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [finalImage, setFinalImage] = useState("");

  const [expertsList, setExpertsList] = useState([]);

  useEffect(() => {
    const fetchExperts = async () => {
      dispatch(FetchStart());
      try {
        const res = await fetch(`/api/expert/get/`);
        const data = await res.json();

        if (data.success === false) {
          dispatch(FetchFailure(data.message));
        }

        setExpertsList(data);
        dispatch(FetchSuccess());
      } catch (err) {
        dispatch(FetchFailure(err));
      }
    };

    fetchExperts();
  }, []);

  // ***DEV/PROD***
  let ExpertAvatarsFolder;
  if (import.meta.env.VITE_MODE === "DEV") {
    ExpertAvatarsFolder = `${
      import.meta.env.VITE_API_BASE_URL
    }/uploads/expertPhotos`;
  } else if (import.meta.env.VITE_MODE === "PROD") {
    ExpertAvatarsFolder = "/uploads/expertPhotos";
  }

  const quoteOptions = expertsList.map((expert) => {
    return {
      value: expert.name,
      label: (
        <div className={s.expertItem}>
          <img
            height="30px"
            width="30px"
            alt="Эксперт"
            src={`${ExpertAvatarsFolder}/${expert.avatar}`}
          />
          {expert.name}
        </div>
      ),
    };
  });

  const customStyles = {
    singleValue: (provided) => ({
      ...provided,
      color: "#513427",
      fontFamily: "YanoneKaffeesatz",
      fontSize: "22px",
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "#ffffff !important" : "#513427",
      fontSize: "22px",
      lineHeight: "22px",
      background: state.isSelected ? "#513427" : "default",
      padding: 10,
    }),
    control: (styles) => ({ ...styles, height: "40px" }),
    placeholder: (styles) => ({
      ...styles,
      fontSize: "22px",
      lineHeight: "22px",
      fontWeight: "300",
      color: "#513427",
    }),
    valueContainer: (styles) => ({
      ...styles,
      padding: "0px 15px",
      display: "flex",
      alignItems: "center",
      maxHeight: "30px",
    }),
  };

  return (
    <motion.div
      className={s.addRate}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className={s.wrapper}>
        <div className={s.pageTitle}>Новая позиция рейтинга</div>
        <Formik
          initialValues={{
            title: "",
            rate: "",
            quotes: [],
            cardBg: "",
          }}
          validateOnMount
          validationSchema={RateSchema}
          onSubmit={async (values) => {
            try {
              dispatch(FetchStart());
              const res = await fetch(`/api/rate/create`, {
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
              dispatch(FetchSuccess());
              navigate("/");
            } catch (err) {
              dispatch(FetchFailure(err.message));
            }
          }}
        >
          {(formikProps) => (
            <Form className={s.form} encType="multipart/form-data">
              <div className={s.rateInfo}>
                <div className={s.title}>
                  <InputField
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Название позиции"
                    formikProps={formikProps}
                  />
                </div>
                <div className={s.rate}>
                  <InputField
                    type="text"
                    name="rate"
                    id="rate"
                    placeholder="Оценка"
                    formikProps={formikProps}
                  />
                </div>
              </div>
              <div className={s.attachment}>
                <div className={s.cardBg}>
                  <FileUpload
                    placeholder="Фоновая иллюстрация"
                    name="cardBg"
                    id="cardBg"
                    isShowing={isShowing}
                    toggleModal={toggleModal}
                    formikProps={formikProps}
                    finalImage={finalImage}
                    setFinalImage={setFinalImage}
                    minHeight="300px"
                    aspect={3 / 2}
                  />
                  <div className={s.uploadPhotoComment}>
                    ⚠️ Изображение будет преобразовано в размер{" "}
                    <b>1800х1200px</b>, поэтому рекомендуется загрузка
                    изображений <b>высокого качества</b> (источники:{" "}
                    <a
                      href="https://www.freepik.com/search?format=search&last_filter=orientation&last_value=landscape&orientation=landscape&selection=1&type=photo"
                      target="_blank"
                      rel="noreferrer"
                    >
                      freepik.com
                    </a>
                    ,{" "}
                    <a
                      href="https://unsplash.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      unsplash.com
                    </a>
                    ,{" "}
                    <a
                      href="https://www.pexels.com/ru-ru/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      pexels.com
                    </a>
                    )
                  </div>
                </div>
                <div className={s.quotesBlock}>
                  <label htmlFor="cardBg">Цитаты</label>
                  <FieldArray
                    name="quotes"
                    render={(arrayHelpers) => (
                      <div className={s.quotes}>
                        {formikProps.values.quotes.map((quote, index) => (
                          <div key={index} className={s.block}>
                            <TextareaField
                              name={`quotes[${index}].text`}
                              placeholder="Текст цитаты"
                              formikProps={formikProps}
                              index={index}
                            />
                            <div className={s.meta}>
                              <div className={s.select}>
                                <Select
                                  name={`quotes[${index}].author`}
                                  placeholder="Автор"
                                  options={quoteOptions}
                                  styles={customStyles}
                                  value={quoteOptions.find(
                                    (option) => option.value === quote.author
                                  )}
                                  onChange={(selectedOption) => {
                                    formikProps.handleChange({
                                      target: {
                                        name: `quotes[${index}].author`,
                                        value: selectedOption.value,
                                      },
                                    });
                                  }}
                                />
                              </div>
                              <button
                                type="button"
                                onClick={() => arrayHelpers.remove(index)}
                                className={s.delQuote}
                              >
                                <span>✖</span>
                              </button>
                            </div>
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={() =>
                            arrayHelpers.push({ text: "", author: "" })
                          }
                          className={s.addQuote}
                        >
                          <span>Добавить цитату</span>
                        </button>
                      </div>
                    )}
                  />
                </div>
              </div>

              <button type="submit" className={s.submit} disabled={isFetching}>
                <span>{isFetching ? "Сохранение..." : "Добавить оценку"}</span>
              </button>
              {error && <div className={s.serverError}>{error}</div>}
            </Form>
          )}
        </Formik>
      </div>
    </motion.div>
  );
};

export default AddRate;
