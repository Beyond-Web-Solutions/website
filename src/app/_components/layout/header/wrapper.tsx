"use client";

import { useState } from "react";
import { DesktopHeaderNavLink } from "@/app/_components/layout/header/desktop/nav-link";
import { ExternalLinkIcon } from "lucide-react";
import { MobileHeaderNav } from "@/app/_components/layout/header/mobile/nav";
import { MenuIcon } from "@/_components/icons/menu-icon";
import Link from "next/link";
import Image from "next/image";

interface Props {
  items: { url: string; label: string }[];
}

export function HeaderWrapper({ items }: Props) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Beyond Web Solutions</span>
            <Image
              className="h-8 w-auto"
              src="/logo/dark.svg"
              width={190}
              height={32}
              alt="Beyond Web Solutions | Logo"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prevState) => !prevState)}
            className="text-gray-700 -m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          >
            <span className="sr-only">Open main menu</span>
            <MenuIcon aria-hidden="true" isOpen={isMobileMenuOpen} />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {items.map((item) => (
            <DesktopHeaderNavLink key={item.url} href={item.url}>
              {item.label}
            </DesktopHeaderNavLink>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="https://calendar.app.google/AMCUDvoELqb9ivx57"
            target="_blank"
            className="text-gray-900 flex items-center text-sm/6"
          >
            Contact
            <ExternalLinkIcon className="ml-2 size-4" />
          </a>
        </div>
      </nav>
      <MobileHeaderNav
        isOpen={isMobileMenuOpen}
        setIsOpen={setMobileMenuOpen}
        items={items}
      />
    </header>
  );
}
