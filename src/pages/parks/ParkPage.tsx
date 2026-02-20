import { useParams } from "react-router-dom";

const parkNames: Record<string, string> = {
  "magic-kingdom": "Magic Kingdom",
  epcot: "EPCOT",
  "hollywood-studios": "Hollywood Studios",
  "animal-kingdom": "Animal Kingdom",
  "disney-springs": "Disney Springs",
};

export default function ParkPage() {
  const { parkSlug } = useParams<{ parkSlug: string }>();
  const name = parkSlug ? (parkNames[parkSlug] ?? parkSlug) : "Park";

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{name}</h1>
      <p className="text-gray-500 italic">
        Park details, live wait times, and crowd levels coming soon.
      </p>
    </div>
  );
}
