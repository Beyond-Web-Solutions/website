"use client";

import { SetStateAction, Dispatch, ComponentProps } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { MenuIcon } from "@/_components/icons/menu-icon";
import { MoveRight } from "lucide-react";
import { HeaderWrapper } from "@/app/_components/layout/header/wrapper";
import Link from "next/link";
import Image from "next/image";

interface Props extends ComponentProps<typeof HeaderWrapper> {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export function MobileHeaderNav({ setIsOpen, isOpen, items, cta }: Props) {
  return (
    <Dialog open={isOpen} onClose={setIsOpen} className="lg:hidden">
      <div className="fixed inset-0 z-10" />
      <DialogPanel className="fixed transition inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div className="flex items-center justify-between">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Beyond Web Solutions</span>
            <Image
              className="h-8 w-auto"
              src="/logo/emblem/dark.svg"
              width={150}
              height={40}
              alt="Beyond Web Solutions | Logo"
            />
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen((prevState) => !prevState)}
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Close menu</span>
            <MenuIcon aria-hidden="true" isOpen={isOpen} />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {items.map((item) => (
                <Link
                  key={item.url}
                  href={item.url}
                  onClick={() => setIsOpen(false)}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 text-gray-900 hover:bg-gray-50"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="py-6">
              <Link
                href={cta.url}
                onClick={() => setIsOpen(false)}
                className="-mx-3 rounded-lg px-3 py-2.5 text-base/7  text-gray-900 hover:bg-gray-50 flex items-center"
              >
                {cta.label}
                <MoveRight className="size-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
}