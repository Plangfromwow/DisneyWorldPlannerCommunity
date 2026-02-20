import { Link } from "react-router-dom";

const parks = [
  { label: "Magic Kingdom", slug: "magic-kingdom" },
  { label: "EPCOT", slug: "epcot" },
  { label: "Hollywood Studios", slug: "hollywood-studios" },
  { label: "Animal Kingdom", slug: "animal-kingdom" },
  { label: "Disney Springs", slug: "disney-springs" },
];

export default function ParksPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Parks</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {parks.map((park) => (
          <li key={park.slug}>
            <Link
              to={`/parks/${park.slug}`}
              className="block p-6 rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow transition"
            >
              <span className="font-semibold text-lg">{park.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
