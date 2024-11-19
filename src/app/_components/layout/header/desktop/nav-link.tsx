"use client";

import { ReactNode } from "react";
import Link from "next/link";

interface Props {
  href: string;
  children: ReactNode;
}

export function DesktopHeaderNavLink({ children, href }: Props) {
  return <Link href={href}>{children}</Link>;
}
