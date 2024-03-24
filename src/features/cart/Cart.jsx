import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import LinkButton from "../../ui/LinkButton";
import CartItem from "./CartItem";
import { clearCart, getCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  const username = useSelector((state) => state.user.username);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();
  if(cart.length === 0) return <EmptyCart />
  return (
    <div className="px-2 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <h2 className="mb-1 mt-5 text-xl font-semibold">Your cart, {username}</h2>
      <ul className="mb-6 mt-3 divide-y divide-stone-200 border-b border-b-stone-200">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div className="space-x-3">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={()=> dispatch(clearCart())}>Clear Cart</Button>
      </div>
    </div>
  );
}

export default Cart;
