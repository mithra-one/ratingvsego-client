import * as Yup from "yup";

const RateSchema = Yup.object().shape({
  title: Yup.string().required("Введите название!"),
  rate: Yup.string().required("Введите оценку!"),
  cardBg: Yup.string().required("Необходимо загрузить фоновую иллюстрацию!"),
});

export default RateSchema;
