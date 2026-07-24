import EventCountdownCard from "../components/home/EventCountdownCard";
import QuickActions from "../components/home/QuickActions";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-extrabold text-center text-gray-900">
        👨‍👩‍👧‍👦 KINORA
      </h1>

      <p className="mt-2 text-center text-gray-600">
        Family Event Planning Made Simple
      </p>

      <div className="mt-4">
        <EventCountdownCard
          eventName="Thejas's Wedding"
          daysRemaining={172}
        />
        <QuickActions />
      </div>
    </>
  );
}