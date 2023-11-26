import * as Yup from "yup";

const SignUpSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Слишком короткий логин")
    .max(50, "Слишком длинный логин")
    .required("Введите логин!"),
  realName: Yup.string()
    .min(2, "Слишком короткое имя")
    .max(50, "Слишком длинное имя")
    .required("Введите имя!"),
  password: Yup.string()
    .min(2, "Слишком короткий пароль")
    .max(50, "Слишком длинный пароль")
    .required("Введите пароль!"),
  token: Yup.string().test(
    "is-token-valid",
    "🤖 Необходимо пройти проверку",
    (value) => {
      return !!value;
    }
  ),
});

export default SignUpSchema;
