'use client'

import { toast } from "sonner";
import EventList from "@/components/events/EventList";
import EventForm from "@/components/events/EventForm";
import { useState } from "react";
import PageHeader from "@/components/common/PageHeader";

type FamilyEvent = {
  name: string;
  type: string;
  date: string;
  status: string;
};

export default function EventsPage() {
    const [showForm, setShowForm] = useState(false);
    const [events, setEvents] = useState<FamilyEvent[]>([]);

    const handleAddEvent = (newEvent: FamilyEvent) => {
      setEvents((previousEvents) => [...previousEvents, newEvent]);
      setShowForm(false);
      toast.success(`${newEvent.name} added successfully! 🎉`);
    };

  return (
    <>
      <PageHeader
        icon="📅"
        title="Events"
        description="Manage your family events here."
      />

      <button
        onClick={() => setShowForm(!showForm)}
        className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        {showForm ? "Cancel" : "+ Add Event"}
      </button>

      {showForm && <EventForm onSave={handleAddEvent} />}

      <EventList events={events} />
    </>  
  );
}