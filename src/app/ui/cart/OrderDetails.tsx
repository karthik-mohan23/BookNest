"use client";
import { useCartContext } from "@/app/context/CartContext";
function OrderDetails() {
  const { cartData } = useCartContext();

  const booksToBuy = cartData.filter((book) => {
    return book.type === "buy";
  });

  const priceForBuying = booksToBuy.reduce((acc, curr) => {
    return acc + curr.sellPrice;
  }, 0);

  const booksToRent = cartData.filter((book) => {
    return book.type === "rent";
  });
  const priceForRenting = booksToBuy.reduce((acc, curr) => {
    return acc + curr.rentPrice;
  }, 0);

  return (
    <div className="py-5 max-w-md border border-gray-500 rounded-lg  px-5">
      <h3 className="text-2xl pb-2 font-semibold pb-3">Order details</h3>
      <div>
        <p className="font-semibold text-lg">
          Buying {booksToBuy.length} for &#x20B9;{priceForBuying}.
        </p>
        <p className="font-semibold text-lg">
          Renting {booksToRent.length} for &#x20B9;{priceForRenting}.
        </p>
      </div>
    </div>
  );
}
export default OrderDetails;
