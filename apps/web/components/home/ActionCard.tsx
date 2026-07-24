import Link from "next/link";
type ActionCardProps = {
  icon: string;
  title: string;
  description: string;
  href: string;
};

export default function ActionCard({
  icon,
  title,
  description,
  href,
}: ActionCardProps) {
  return (
    <Link href={href} className="block">
        <div className="rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md">
        <div className="text-3xl">{icon}</div>

        <h3 className="mt-2 font-semibold text-gray-900">
            {title}
        </h3>

        <p className="mt-1 text-sm text-gray-600">
            {description}
        </p>
        </div>
    </Link>

  );
}