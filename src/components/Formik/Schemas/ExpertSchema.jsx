import * as Yup from "yup";

const ExpertSchema = Yup.object().shape({
  name: Yup.string().required("Введите имя!"),
  link: Yup.string().required("Укажите ссылку!"),
  avatar: Yup.string().required("Нужен аватар!"),
});

export default ExpertSchema;
