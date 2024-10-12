"use client";

import useTranslationsClient from "@/locales/clientHook";
import {
  Navbar as NextUiNavbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Link from "next/link";
import { MouseEventHandler, SyntheticEvent, useState } from "react";
import ChangeLocaleButton from "./changeLocaleButton";
import NavItem from "./navItem";

export default function Navbar() {
  const t = useTranslationsClient("NavBar");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [links, setLinks] = useState([
    { id: 1, name: t("about"), href: "/", isActive: true },
    {
      id: 2,
      name: t("mainProjects"),
      href: "#highlighted-project-section",
      isActive: false,
    },
    { id: 3, name: t("allProjects"), href: "/projects/", isActive: false },
    { id: 4, name: t("contact"), href: "#contact-section", isActive: false },
  ]);

  function handleClickNav(activeLinkId: number) {
    setLinks((prevLinks) =>
      prevLinks.map((l) => {
        if (l.id == activeLinkId) l.isActive = true;
        else l.isActive = false;
        return l;
      })
    );
  }

  return (
    <NextUiNavbar className="backdrop-blur-md bg-black/90 text-white">
      <NavbarContent>
        <em className="text-lg font-bold">Matheus Costa</em>

        {links.map((l) => {
          return (
            <NavItem
              key={l.id}
              id={l.id}
              isActive={l.isActive}
              onClick={handleClickNav}
            >
              <Link href={l.href}>{l.name}</Link>
            </NavItem>
          );
        })}

        <ChangeLocaleButton />

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
