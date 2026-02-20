import { useParams } from "react-router-dom";

export default function TripPage() {
  const { tripId } = useParams<{ tripId: string }>();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Trip Itinerary</h1>
      <p className="text-gray-400 text-sm mb-4">Trip ID: {tripId}</p>
      <p className="text-gray-500 italic">
        Day-by-day itinerary coming soon.
      </p>
    </div>
  );
}
