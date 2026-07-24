import ActionCard from "./ActionCard";
const actions = [
  {
    icon: "📅",
    title: "Events",
    description: "Manage celebrations",
    href: "/events",
  },
  {
    icon: "👥",
    title: "Guests",
    description: "Track invitations",
    href: "/guests",
  },
  {
    icon: "✅",
    title: "Tasks",
    description: "Stay on schedule",
    href: "/tasks",
  },
  {
    icon: "💰",
    title: "Budget",
    description: "Control expenses",
    href: "/budget",
  },
  {
    icon: "🏢",
    title: "Vendors",
    description: "Organize services",
    href: "/vendors",
  },
  {
    icon: "✨",
    title: "More",
    description: "Discover more features",
    href: "/more",
  },
];

export default function QuickActions() {
  return (
    <section className="mt-8">
      <h2 className="mb-2 text-xl font-semibold text-gray-900">
        Plan Your Event
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {actions.map((action) => (
         <ActionCard
            key={action.title}
            icon={action.icon}
            title={action.title}
            description={action.description}
            href={action.href}
         />
        ))}
      </div>
    </section>
  );
}