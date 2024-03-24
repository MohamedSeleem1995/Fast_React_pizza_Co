import DeleteItem from "./DeleteItem";
import { formatCurrency } from "../../utilities/helpers";
import PropTypes from "prop-types";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { useSelector } from "react-redux";
import { getCurrentQuantityById } from "./cartSlice";
function CartItem({ item }) {
  CartItem.propTypes = {
    item: PropTypes.object,
  };
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId))
  return (
    <li className="px-3 py-2 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="my-2 flex items-center sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity pizzaId={pizzaId} currentQuantity={currentQuantity} />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
