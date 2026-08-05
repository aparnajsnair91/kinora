import EventCountdownCard from "../components/home/EventCountdownCard";
import QuickActions from "../components/home/QuickActions";

export default function Home() {

  const eventDate = new Date("2027-01-10");
  const today = new Date();
  const timeDifference = eventDate.getTime() - today.getTime();
  const daysRemaining = Math.ceil(
    timeDifference / (1000 * 60 * 60 * 24)
  );

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
          daysRemaining={daysRemaining}
        />
        <QuickActions />
      </div>
    </>
  );
}