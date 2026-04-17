import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filters/slice";

export default function Filter() {
    const dispatch = useDispatch();

    return (
        <input
            placeholder="Search"
            onChange={e => dispatch(setFilter(e.target.value))}
        />
    );
}