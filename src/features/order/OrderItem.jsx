import formatCurrency from "../../utilities/helpers";
import PropTypes from "prop-types";
function OrderItem({ item, isLoadingIngredients, ingredients }) {
  OrderItem.propTypes = {
    item: PropTypes.object,
    isLoadingIngredients: PropTypes.bool,
    ingredients: PropTypes.arrayOf(PropTypes.string),
  };
  const { quantity, name, totalPrice } = item;

  return (
    <li className="space-y-1 py-3">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p className="font-bold">
          <span>{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic text-stone-500">
        {isLoadingIngredients ? "loading..." : ingredients.join(", ")}
      </p>
    </li>
  );
}

export default OrderItem;
