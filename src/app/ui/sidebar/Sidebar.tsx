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
    <div className="md:w-48 px-2 pt-6 left-0 top-0 sticky max-h-screen  border-r border-gray-400 h-screen  flex-col flex gap-8 md:gap-4">
      {links.map((link) => {
        const IconComponent = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className="flex  items-center  gap-2 rounded-md bg-gray-50  text-sm font-medium hover:bg-indigo-600 hover:text-white  justify-start duration-300 md:py-3 md:px-2 p-1">
            <IconComponent className="w-6" />
            <span className="hidden md:block">{link.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
export default Sidebar;
