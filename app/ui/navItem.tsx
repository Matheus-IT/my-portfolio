import { NavbarItem } from "@nextui-org/navbar";
import { ReactNode } from "react";

export default function NavItem({
  id,
  children,
  isActive,
  onClick,
}: {
  id: number;
  children: ReactNode;
  isActive: boolean;
  onClick: (id: number) => void;
}) {
  return (
    <NavbarItem
      isActive={isActive}
      className="p-2 rounded hover:bg-neutral-800 transition-background duration-200 max-sm:hidden"
      onClick={() => onClick(id)}
    >
      {children}
    </NavbarItem>
  );
}
