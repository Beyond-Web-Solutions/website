import { HeaderWrapper } from "@/app/_components/layout/header/wrapper";

export function Header() {
  const items = [
    { url: "#why-us", label: "Waarom?" },
    { url: "#how-we-work", label: "Hoe?" },
    { url: "#about", label: "Wie?" },
  ];

  return <HeaderWrapper items={items} />;
}
