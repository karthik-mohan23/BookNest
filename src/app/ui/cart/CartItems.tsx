"use client";
import { useCartContext } from "@/app/context/CartContext";
import { TrashIcon } from "@heroicons/react/24/solid";

function CartItems() {
  const { cartData, deleteFromCart } = useCartContext();

  const handleDeleteFromCart = (id: string) => {
    deleteFromCart(id);
  };

  return (
    <div className="py-5 max-w-md border border-gray-500 rounded-lg  px-5">
      <h3 className="text-2xl pb-4 text-center font-semibold underline">
        Cart items
      </h3>
      <ul className="space-y-2">
        {cartData?.map((item, index) => {
          return (
            <li className="flex items-center justify-between ">
              <span className="font-semibold text-lg">
                {index + 1}. {item.title}({item.type})
              </span>
              <TrashIcon
                onClick={() => handleDeleteFromCart(item.id)}
                className="w-5 text-gray-500 hover:text-red-500 cursor-pointer"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default CartItems;
