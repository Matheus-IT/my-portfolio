import { Button } from "@nextui-org/react";
import Link from "next/link";
import { ReactNode } from "react";

export default function SocialMediaIconButton({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link href={href} target="_blank">
      <Button isIconOnly className="bg-black">
        {children}
      </Button>
    </Link>
  );
}
