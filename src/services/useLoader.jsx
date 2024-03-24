import { redirect } from "react-router-dom";
import { createOrder, getMenu, getOrder, updateOrder } from "./apiRestaurant";

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

export async function loader() {
    const menu = await getMenu();
    return menu;
}

export async function orderLoader({params}) {
    const order = await getOrder(params.orderId);
    return order;
}

export async function action({ request }) {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const order = {
        ...data,
        cart: JSON.parse(data.cart),
        priority: data.priority === "on",
  };
  const errors = {}
  if (!isValidPhone(order.phone)) errors.phone = "please give us your correct phone number.";
  if (Object.keys(errors).length > 0) return errors;
  
    const newOrder = await createOrder(order);
    

    return redirect(`/order/${newOrder.id}`);
}
export async function updateOrderAction({ params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
