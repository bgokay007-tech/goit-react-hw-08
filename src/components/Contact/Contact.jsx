import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

export default function Contact({ contact }) {
    const dispatch = useDispatch();

    return (
        <li>
            {contact.name}: {contact.number}
            <button onClick={() => dispatch(deleteContact(contact.id))}>
                Delete
            </button>
        </li>
    );
}