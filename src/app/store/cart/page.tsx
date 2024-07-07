import CartItems from "@/app/ui/cart/CartItems";
import OrderDetails from "@/app/ui/cart/OrderDetails";
import PaymentDetails from "@/app/ui/cart/PaymentDetails";

function page() {
  return (
    <section className="p-5 lg:flex gap-10 ">
      <div>
        <OrderDetails />
        <CartItems />
      </div>
      <PaymentDetails />
    </section>
  );
}
export default page;
