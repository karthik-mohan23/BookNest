import Link from "next/link";
import {
  UserGroupIcon,
  BookOpenIcon,
  CubeTransparentIcon,
  RectangleStackIcon,
  CogIcon,
  TruckIcon,
  Squares2X2Icon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";

const links = [
  { name: "Books", href: "/store", icon: BookOpenIcon },
  { name: "Sell or Lend", href: "/store/sell-lend", icon: RectangleStackIcon },
  { name: "Cart", href: "/store/cart", icon: ShoppingCartIcon },
  { name: "Track Order", href: "/store/track-order", icon: TruckIcon },
  { name: "Community", href: "/store/community", icon: UserGroupIcon },
  { name: "Settings", href: "/store/settings", icon: CogIcon },
  { name: "About", href: "/store/about", icon: Squares2X2Icon },
  { name: "Admin", href: "/store/admin", icon: CubeTransparentIcon },
];

function Sidebar() {
  return (
    <div className="w-48 border-r border-gray-500 h-screen  flex-col hidden md:flex">
      <div className="  ">
        {links.map((link) => {
          const IconComponent = link.icon;
          return (
            <Link
              key={link.name}
              href={link.href}
              className="flex  items-center  gap-2 rounded-md bg-gray-50  text-sm font-medium hover:bg-indigo-600 hover:text-white  justify-start duration-300 py-3">
              <IconComponent className="w-6" /> {link.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default Sidebar;
