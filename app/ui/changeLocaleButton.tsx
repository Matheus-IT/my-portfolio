"use client";
import { ChevronDown } from "lucide-react";
import { useChangeLocale, useCurrentLocale } from "../../locales/client";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarItem,
} from "@nextui-org/react";
import useTranslationsClient from "@/locales/clientHook";

export default function ChangeLocaleButton() {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();
  const t = useTranslationsClient("ChangeLocaleButton");
  const flags = {
    pt: "🇧🇷",
    en: "🇺🇸",
  };

  return (
    <Dropdown>
      <NavbarItem>
        <DropdownTrigger>
          <Button
            disableRipple
            className="p-0 bg-transparent data-[hover=true]:bg-transparent text-white"
            endContent={<ChevronDown fill="white" size={20} />}
            radius="sm"
            variant="light"
          >
            {flags[locale]}
          </Button>
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu
        aria-label="ACME features"
        className="w-[340px]"
        itemClasses={{
          base: "gap-4",
        }}
      >
        <DropdownItem
          key="en"
          startContent={<span>{flags["en"]}</span>}
          onClick={() => changeLocale("en")}
        >
          {t("english")}
        </DropdownItem>
        <DropdownItem
          key="pt"
          startContent={<span>{flags["pt"]}</span>}
          onClick={() => changeLocale("pt")}
        >
          {t("portuguese")}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
