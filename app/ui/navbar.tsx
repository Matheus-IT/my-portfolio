"use client";

import {
  Avatar,
  Navbar as NextUiNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();
  const links = [
    { name: "about", href: "/" },
    { name: "projects", href: "/projects" },
    { name: "contact", href: "/contact" },
  ];

  return (
    <NextUiNavbar className="bg-black text-white">
      <NavbarContent justify="center">
        {links.map((l) => {
          return (
            <NavbarItem
              key={l.name}
              isActive={l.href == pathName}
              className="p-2 rounded hover:bg-neutral-800 transition-background duration-200"
            >
              <Link href={l.href}>
                {l.name.charAt(0).toUpperCase() + l.name.slice(1)}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
    </NextUiNavbar>
  );
}
