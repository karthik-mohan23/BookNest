import { Metadata } from "next";
import Sidebar from "../ui/sidebar/Sidebar";
import Header from "../ui/header/Header";
import { CartContextProvider } from "../context/CartContext";

export const metadata: Metadata = {
  title: "BookNest",
  description: "An online store to buy or rent books",
};

function layout({ children }: { children: React.ReactNode }) {
  return (
    <CartContextProvider>
      <section>
        <Header />
        <div className="flex max-w-6xl w[90%] mx-auto relative">
          <Sidebar />
          <section className="flex-grow ">{children}</section>
        </div>
      </section>
    </CartContextProvider>
  );
}
export default layout;
