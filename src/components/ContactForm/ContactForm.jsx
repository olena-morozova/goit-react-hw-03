import css from "./ContactForm.module.css";
import { useId } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { nanoid } from "nanoid";

export default function ContactForm({ onAdd }) {
  const initialValues = {
    name: "",
    number: "",
  };

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const nameFieldId = useId();
  const phoneFieldId = useId();

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: `id-${nanoid(3)}`,
      name: values.name,
      number: values.number,
    };
    console.log("Added contact:", newContact);
    onAdd(newContact);

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <div className={css.formItem}>
          <label className={css.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className={css.field}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className={css.formItem}>
          <label className={css.label} htmlFor={phoneFieldId}>
            Number
          </label>
          <Field
            className={css.field}
            type="tel"
            name="number"
            id={phoneFieldId}
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
