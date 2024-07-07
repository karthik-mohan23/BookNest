"use client";
import { useCartContext } from "@/app/context/CartContext";
import CartItems from "@/app/ui/cart/CartItems";
import OrderDetails from "@/app/ui/cart/OrderDetails";
import PaymentDetails from "@/app/ui/cart/PaymentDetails";

function page() {
  const { cartData } = useCartContext();

  if (cartData.length === 0) {
    return (
      <h2 className="font-bold text-2xl text-center pt-12">No items in cart</h2>
    );
  }

  return (
    <section className="p-5 lg:flex gap-10 space-y-5 lg:space-y-0 justify-center lg:pt-10">
      <div className="space-y-5">
        <OrderDetails />
        <CartItems />
      </div>
      <PaymentDetails />
    </section>
  );
}
export default page;
