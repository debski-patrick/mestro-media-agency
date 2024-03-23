import Link from "next/link";
import { navbarConfig } from "@/utils/config";
import { NavbarConfigType } from "@/utils/types";

export default function Navbar() {
  return (
    <div className="fixed flex justify-center w-full bg-black bg-opacity-25 backdrop:blur-xl">
      <div className="container flex justify-between items-center">
        <h1 className="hidden md:block font-bold">MMA</h1>

        <div className="flex">
          {
            navbarConfig.map((item: NavbarConfigType) => (
              <Link
                key={item.id}
                href={item.path}
                className="px-8 py-6 transition-all duration-500 text-sm hover:text-red-500"
              >{item.title}</Link>
            ))
          }
        </div>
      </div>
    </div>
  );
};
