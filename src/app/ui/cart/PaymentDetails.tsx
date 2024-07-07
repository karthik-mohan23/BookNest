"use client";

import { useRouter } from "next/navigation";
import { FormEvent } from "react";

function PaymentDetails() {
  const router = useRouter();

  const handlePayment = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/store/track-order");
  };

  return (
    <div className="max-w-md">
      <h3 className="text-2xl py-4 lg:pt-0 lg:pb-4">Payment Details</h3>
      <form className="space-y-2" onSubmit={handlePayment}>
        <div className="flex flex-col gap-1">
          <label htmlFor="cardNumber">Card number</label>
          <input
            type="number"
            id="cardNumber"
            title="cardNumber"
            placeholder="Enter your card number"
            className="border border-gray-400 rounded-lg px-2 py-2"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="cardName">Name on the card</label>
          <input
            type="text"
            id="cardName"
            title="cardName"
            placeholder="Enter your card name"
            className="border border-gray-400 rounded-lg px-2 py-2"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="cardExpiry">Card expiry</label>
          <input
            type="date"
            id="cardExpiry"
            title="cardExpiry"
            placeholder="Enter card expiry date"
            className="border border-gray-400 rounded-lg px-2 py-2"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="cardCvv">CVV/PIN</label>
          <input
            type="number"
            id="cardCvv"
            title="cardCvv"
            placeholder="Enter your card cvv number"
            className="border border-gray-400 rounded-lg px-2 py-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white hover:bg-blue-800 duration-300 w-full  py-1 text-xl rounded-lg">
          Make Payment
        </button>
      </form>
    </div>
  );
}
export default PaymentDetails;
