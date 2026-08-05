"use client";

import { useState } from "react";

type EventFormProps = {
  onSave: (event: {
    name: string;
    type: string;
    date: string;
    status: string;
  }) => void;
};

export default function EventForm({ onSave }: EventFormProps) {
  const [event, setEvent] = useState({
        name: "",
        type: "",
        date: "",
        status: "Planning",
  });
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(event);
  }; 
  return (
    <form
        onSubmit={handleSave}
        className="mt-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
    >
      <h2 className="text-xl font-semibold text-gray-900">
        Add Event
      </h2>

      <div className="mt-6">
        <label className="mb-2 block text-sm font-medium text-gray-700">
            Event Name
        </label>

        <input
            type="text"
            value={event.name}
            onChange={(e) =>
            setEvent({
                ...event,
                name: e.target.value,
            })
            }
            placeholder="Enter event name"
            className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
        />
        <p className="mt-3 text-sm text-gray-600">
            Current Name: {event.name}
        </p>
      </div>

      <div className="mt-4">
        <label className="mb-2 block text-sm font-medium text-gray-700">
            Event Type
        </label>

        <select
            value={event.type}
            onChange={(e) =>
            setEvent({
                ...event,
                type: e.target.value,
            })
            }
            className="w-full rounded-lg border border-gray-300 p-3"
        >
            <option value="">Select Event Type</option>
            <option value="Wedding">Wedding</option>
            <option value="Birthday">Birthday</option>
            <option value="Housewarming">Housewarming</option>
            <option value="Engagement">Engagement</option>
            <option value="Other">Other</option>
        </select>
      </div>

      <div className="mt-4">
        <label className="mb-2 block text-sm font-medium text-gray-700">
            Event Date
        </label>

        <input
            type="date"
            value={event.date}
            onChange={(e) =>
            setEvent({
                ...event,
                date: e.target.value,
            })
            }
            className="w-full rounded-lg border border-gray-300 p-3"
        />
      </div>

      <div className="mt-4">
        <label className="mb-2 block text-sm font-medium text-gray-700">
            Status
        </label>

        <select
            value={event.status}
            onChange={(e) =>
            setEvent({
                ...event,
                status: e.target.value,
            })
            }
            className="w-full rounded-lg border border-gray-300 p-3"
        >
            <option value="Planning">Planning</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
        </select>
      </div>

      <div className="mt-6 flex gap-3">
        <button
            type="submit"
            className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
        >
            Save
        </button>

        <button
            type="button"
            className="rounded-lg border border-gray-300 bg-white px-5 py-2 text-gray-700 hover:bg-gray-100"
        >
            Cancel
        </button>
      </div>

    </form>
  );
}