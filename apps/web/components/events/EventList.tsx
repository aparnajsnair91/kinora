type FamilyEvent = {
  name: string;
  type: string;
  date: string;
  status: string;
};

type EventListProps = {
  events: FamilyEvent[];
};

export default function EventList({
  events,
}: EventListProps) {
  const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  };

  const getStatusIcon = (status: string) => {
  switch (status) {
    case "Planning":
      return "🟡";
    case "Completed":
      return "🟢";
    case "Cancelled":
      return "🔴";
    case "Postponed":
      return "🟠";
    default:
      return "⚪";
  }
};  
  return (
    <div>
      <>
        <h2 className="mt-6 text-xl font-bold">
            Saved Events
        </h2>

        {events.map((event, index) => (
            <div
                key={index}
                className="mt-4 rounded-xl border bg-white p-4 shadow-sm"
            >
                <h3 className="text-lg font-semibold">
                    {event.name}
                </h3>

                <p>{event.type}</p>

                <p>📅 {formatDate(event.date)}</p>

                <p>
                    {getStatusIcon(event.status)} {event.status}
                </p>
            </div>
        ))}
        </>
    </div>
  );
}