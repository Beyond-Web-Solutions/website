import { HeaderWrapper } from "@/app/_components/layout/header/wrapper";

export function Header() {
  const items = [
    { url: "#services", label: "Diensten" },
    { url: "#how-we-work", label: "Werkwijze" },
    { url: "#about", label: "Over ons" },
  ];

  return (
    <HeaderWrapper items={items} cta={{ url: "#cta", label: "Contact" }} />
  );
}
