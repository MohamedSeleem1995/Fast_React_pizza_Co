import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import PropTypes from "prop-types";
import { decreaseItemsQuantity, increaseItemsQuantity } from "./cartSlice";
function UpdateItemQuantity({pizzaId, currentQuantity}) {
    UpdateItemQuantity.propTypes = {
        pizzaId: PropTypes.number,
        currentQuantity: PropTypes.number,
    }
    const dispatch = useDispatch();
    
    return (
        <div className="flex items-center gap-2 md:gap-3">
            <Button type="round" onClick={() => dispatch(decreaseItemsQuantity(pizzaId))}>-</Button>
            <span className="text-sm font-medium ">{currentQuantity}</span>
            <Button type="round" onClick={()=> dispatch(increaseItemsQuantity(pizzaId))}>+</Button>
        </div>
    )
}

export default UpdateItemQuantity
