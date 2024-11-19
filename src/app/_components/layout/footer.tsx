import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="-mt-8 w-full rounded-tl-3xl rounded-tr-3xl bg-primary">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-16 px-6 py-32 lg:px-8">
        <Image
          src="/logo/light.svg"
          alt="Beyond Web Solutions | Logo"
          className="mx-auto h-full"
          width={250}
          height={50}
        />
        <div className="flex items-center justify-center space-x-1">
          <Link
            target="_blank"
            className="rounded-full p-4 transition hover:bg-secondary/10"
            href="https://www.linkedin.com/company/beyond-web-solutions-nl"
          >
            <LinkedinIcon className="size-5 text-secondary" />
          </Link>
          <Link
            target="_blank"
            className="rounded-full p-4 transition hover:bg-secondary/10"
            href="https://x.com/beyond_web"
          >
            <TwitterIcon className="size-5 text-secondary" />
          </Link>
          <Link
            target="_blank"
            className="rounded-full p-4 transition hover:bg-secondary/10"
            href="https://github.com/Beyond-Web-Solutions"
          >
            <GithubIcon className="size-5 text-secondary" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
