"use client";

import {
  Navbar as NextUiNavbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = [
    { name: "About", href: "/" },
    { name: "Main Projects", href: "#highlighted-project-section" },
    { name: "All Projects", href: "/projects/" },
    { name: "Contact", href: "#contact-section" },
  ];

  return (
    <NextUiNavbar className="backdrop-blur-md bg-black/90 text-white">
      <NavbarContent>
        <em className="text-lg font-bold">Matheus Costa</em>

        {links.map((l) => {
          return (
            <NavbarItem
              key={l.name}
              className="p-2 rounded hover:bg-neutral-800 transition-background duration-200 max-sm:hidden"
            >
              <Link href={l.href}>{l.name}</Link>
            </NavbarItem>
          );
        })}
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden ml-auto"
        />
        <NavbarMenu>
          {links.map((l, index) => (
            <NavbarMenuItem key={`${l}-${index}`}>
              <Link className="w-full" href={l.href}>
                {l.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </NavbarContent>
    </NextUiNavbar>
  );
}
