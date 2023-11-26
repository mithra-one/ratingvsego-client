import * as Yup from "yup";

const EventSchema = Yup.object().shape({
  dateTime: Yup.string().required("Укажите дату и время!"),
  place: Yup.string().required("Укажите место проведения!"),
  cast: Yup.string().required("Укажите состав!"),
  tickets: Yup.string().required("Укажите ссылку на билеты!"),
});

export default EventSchema;
