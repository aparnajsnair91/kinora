type EventCountdownCardProps = {
  eventName: string;
  daysRemaining: number;
};

export default function EventCountdownCard({
  eventName,
  daysRemaining,
}: EventCountdownCardProps) {
  return (
    <section className="rounded-xl border p-5 shadow-sm">
      <p className="text-sm font-medium uppercase tracking-wide text-gray-700">
        Current Event
      </p>

      <h2 className="mt-3 text-3xl font-bold text-gray-900">
        💍 {eventName}
      </h2>

      <p className="mt-1 text-center text-gray-700">
        🎉 {daysRemaining} Days Remaining
      </p>

      <p className="mt-1 text-gray-700 leading-relaxed">
        One family, one celebration, one place to plan it all.
      </p>
    </section>
  );
}