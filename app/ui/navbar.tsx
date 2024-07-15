"use client";

import {
  Navbar as NextUiNavbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";

export default function Navbar() {
  const links = [
    { name: "About", href: "/" },
    { name: "Main Projects", href: "#highlighted-project-section" },
    { name: "Contact", href: "#contact-section" },
  ];

  return (
    <NextUiNavbar className="backdrop-blur-md bg-black/90 text-white">
      <NavbarContent>
        {links.map((l) => {
          return (
            <NavbarItem
              key={l.name}
              className="p-2 rounded hover:bg-neutral-800 transition-background duration-200"
            >
              <Link href={l.href}>{l.name}</Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
    </NextUiNavbar>
  );
}
