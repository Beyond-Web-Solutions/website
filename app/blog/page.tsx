import { BlogPosts } from "app/components/posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Werk",
  description:
    "Bekijk een selectie van softwareprojecten, SaaS-platformen en technische inzichten van Beyond Web Solutions.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Werk</h1>
      <BlogPosts />
    </section>
  );
}
