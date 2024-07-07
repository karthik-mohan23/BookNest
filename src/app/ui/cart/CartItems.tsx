"use client";
import { useCartContext } from "@/app/context/CartContext";
import { TrashIcon } from "@heroicons/react/24/solid";

function CartItems() {
  const { cartData } = useCartContext();

  return (
    <div className="py-5">
      <h3 className="text-2xl pb-2">Cart items</h3>
      <ul>
        {cartData?.map((item, index) => {
          return (
            <li className="flex items-center gap-1">
              <span>{index + 1}.</span>{" "}
              <span className="font-semibold text-lg">
                {item.title}({item.type})
              </span>
              <span>
                <TrashIcon className="w-5 text-gray-500 hover:text-red-500 cursor-pointer" />
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default CartItems;
