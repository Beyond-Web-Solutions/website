import Image from "next/image";
import Link from "next/link";

const navItems = {
  "/": {
    name: "home",
  },
  "/blog": {
    name: "werk",
  },
  "mailto:info@beyond-web.nl": {
    name: "contact",
  },
};

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex w-full flex-row items-center justify-between gap-4 px-0 pb-0 fade md:overflow-auto scroll-pr-6"
          id="nav"
        >
          <Link
            href="/"
            aria-label="Beyond Web Solutions home"
            className="m-1 flex shrink-0 items-center px-2 py-1 transition-opacity hover:opacity-80"
          >
            <span className="block sm:hidden">
              <Image
                src="/emblem-dark.svg"
                alt="Beyond Web Solutions"
                width={32}
                height={32}
                priority
                className="h-8 w-8 dark:hidden"
              />
              <Image
                src="/emblem-light.svg"
                alt="Beyond Web Solutions"
                width={32}
                height={32}
                priority
                className="hidden h-8 w-8 dark:block"
              />
            </span>
            <span className="hidden sm:block">
              <Image
                src="/logo-dark.svg"
                alt="Beyond Web Solutions"
                width={206}
                height={34}
                priority
                className="h-8 w-auto dark:hidden"
              />
              <Image
                src="/logo-light.svg"
                alt="Beyond Web Solutions"
                width={206}
                height={34}
                priority
                className="hidden h-8 w-auto dark:block"
              />
            </span>
          </Link>
          <div className="ml-auto flex flex-row justify-end space-x-0">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
