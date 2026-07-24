'use client'

import { useState } from "react";
import PageHeader from "@/components/common/PageHeader";

export default function EventsPage() {
    const [showForm, setShowForm] = useState(false);

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
        {showForm && (
          <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900">
              Add Event
            </h2>

            <p className="mt-2 text-gray-600">
              Event form will be built here.
            </p>
          </div>
        )}
          {showForm ? "Cancel" : "+ Add Event"}
      </button>

      <p className="mt-4">
        Form Visible: {showForm ? "Yes" : "No"}
      </p>
    </>  
  );
}