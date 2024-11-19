import Image from "next/image";
import Link from "next/link";
import { LinkedinIcon } from "lucide-react";

interface Props {
  name: string;
  role: string;
  image: string;
  linkedIn: string;
}

export function Employee(props: Props) {
  return (
    <div className="grid grid-cols-5 gap-4 rounded-xl bg-primary/5 p-8">
      <Image
        className="col-span-2 rounded-xl"
        src={props.image}
        alt={`${props.name} | Beyond Web Solutions`}
        width={130}
        height={190}
      />
      <div className="col-span-3 flex w-full flex-col justify-between">
        <div className="grid gap-2">
          <p className="text-2xl font-bold">{props.name}</p>
          <p className="text-sm text-primary/70">{props.role}</p>
        </div>

        <Link
          href={props.linkedIn}
          target="_blank"
          className="text-gray-900 ring-gray-300 hover:bg-gray-50 rounded-md bg-white px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-secondary"
        >
          <LinkedinIcon className="mx-auto size-6" />
        </Link>
      </div>
    </div>
  );
}
