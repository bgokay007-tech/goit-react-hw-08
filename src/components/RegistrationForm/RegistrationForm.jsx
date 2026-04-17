import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

export default function RegistrationForm() {
    const dispatch = useDispatch();

    const handleSubmit = values => {
        dispatch(register(values));
    };

    return (
        <Formik
            initialValues={{ name: "", email: "", password: "" }}
            onSubmit={handleSubmit}
        >
            <Form>
                <Field name="name" placeholder="Name" />
                <Field name="email" placeholder="Email" />
                <Field name="password" type="password" placeholder="Password" />
                <button type="submit">Register</button>
            </Form>
        </Formik>
    );
}