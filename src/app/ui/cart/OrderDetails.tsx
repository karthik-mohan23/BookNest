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
    <div>
      <h3 className="text-2xl pb-2">Order details</h3>
      <div>
        <p>
          Buying {booksToBuy.length} for &#x20B9;{priceForBuying}.
        </p>
        <p>
          Renting {booksToRent.length} for &#x20B9;{priceForRenting}.
        </p>
      </div>
    </div>
  );
}
export default OrderDetails;
