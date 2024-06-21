import { Metadata } from "next";
import Sidebar from "../ui/sidebar/Sidebar";
import Header from "../ui/header/Header";

export const metadata: Metadata = {
  title: "BookNest",
  description: "An online store to buy or rent books",
};

function layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Header />
      <div className="flex max-w-6xl w[90%] mx-auto">
        <Sidebar />
        {children}
      </div>
    </section>
  );
}
export default layout;
