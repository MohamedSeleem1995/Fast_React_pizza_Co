import { useDispatch} from "react-redux"
import PropTypes from "prop-types";
import Button from "../../ui/Button"
import { deleteItem } from "./cartSlice";
function DeleteItem({pizzaId}) {
    DeleteItem.propTypes = {
        pizzaId: PropTypes.number,
    } 
    const dispatch = useDispatch();
    return (
        <Button type="small" onClick={() => dispatch(deleteItem(pizzaId))}>Delete</Button>
    )
}

export default DeleteItem
