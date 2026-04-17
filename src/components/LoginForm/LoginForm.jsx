import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";

export default function LoginForm() {
    const dispatch = useDispatch();

    const handleSubmit = values => {
        dispatch(logIn(values));
    };

    return (
        <Formik initialValues={{ email: "", password: "" }} onSubmit={handleSubmit}>
            <Form>
                <Field name="email" placeholder="Email" />
                <Field name="password" type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </Form>
        </Formik>
    );
}