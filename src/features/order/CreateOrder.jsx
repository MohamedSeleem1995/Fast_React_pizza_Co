/* import { useState } from "react"; */
import { Form, useActionData, useNavigation } from "react-router-dom";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { getCart, getTotalCartPrice } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import { formatCurrency } from "../../utilities/helpers";
import { useState } from "react";
import { fetchAddress } from "../user/userSlice";

// https://uibakery.io/regex-library/phone-number
/* const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  ); */

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const { status: addressStatus, position, address, error: errorAddress } = useSelector((state) => state.user);
  const isLoadingAddress = addressStatus === "loading"; 
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const formErrors = useActionData();
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const priorityPrice = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + priorityPrice;
  if (cart.length === 0) return <EmptyCart />;
  return (
    <div>
      <h2>Ready to order? Let&apos;s go!</h2>
      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:items-center sm:flex-row">
          <label className="sm:basis-40">First Name</label>
          <input className="input w-full" type="text" name="customer" required />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:items-center sm:flex-row">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input className="input w-full" type="tel" name="phone" required />
          {formErrors?.phone && <p className="text-xs mt-2 text-red-700 bg-red-100 p-2 rounded-md">{formErrors.phone}</p>}
          </div>
        </div>

        <div className="relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              className="input w-full"
              type="text"
              name="address"
              disabled={isLoadingAddress}
              defaultValue={address}
              required
            />
             {addressStatus === "error" && <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">{errorAddress.message}</p>}
          </div>
          {!position.latitude && !position.longitude && (
            <span className="absolute z-50 right-[3px] top-[3px] md:righ-[5px] md:top-[5px]">
            <Button disabled={isLoadingAddress} type={"small"} onClick={(e) => {
              e.preventDefault();
              dispatch(fetchAddress());
            }}>
              Get position
            </Button>
          </span>
          ) }
        </div>

        <div className="mb-12 flex gap-5 items-center">
          <input
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input type="hidden" name="position" value={position.longitude && position.latitude ? `${position.latitude}, ${position.longitude}`: ""}/>
          <Button disabled={isSubmitting || isLoadingAddress} type="primary">
            {isSubmitting
              ? "Placing order"
              : `Ordernow from ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrder;
