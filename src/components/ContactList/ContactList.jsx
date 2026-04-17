import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";

export default function ContactList() {
    const contacts = useSelector(selectFilteredContacts);

    return (
        <ul>
            {contacts.map(c => (
                <Contact key={c.id} contact={c} />
            ))}
        </ul>
    );
}