import s from "./ContactForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
function ContactForm({ setContacts }) {
  const initialValues = {
    name: "",
    number: "",
  };
const handleAddContact = (value) => {
  const newContact = {
    id: nanoid(4),
    name: value.name,
    number: value.number,
  };
  setContacts((prev) => [...prev, newContact]);
};
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(3).max(50).required("Name is required"),
    number: Yup.string().min(3).max(50).required("Name is required"),
  });
  const handleSubmit = (values, actions) => {
    handleAddContact(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={s.form}>
        <label className={s.label}>
          <span>Name</span>
          <Field name="name" />
          <ErrorMessage className={s.error} name="name" component="span" />
        </label>

        <label className={s.label}>
          <span>Number</span>
          <Field name="number" />
          <ErrorMessage
            className={s.error}
            type="tel"
            name="number"
            component="span"
          />
        </label>

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
