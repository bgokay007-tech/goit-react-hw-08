import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

export default function ContactForm() {
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        dispatch(addContact(values));
        actions.resetForm();
    };

    return (
        <Formik initialValues={{ name: "", number: "" }} onSubmit={handleSubmit}>
            <Form>
                <Field name="name" placeholder="Name" />
                <Field name="number" placeholder="Number" />
                <button type="submit">Add</button>
            </Form>
        </Formik>
    );
}