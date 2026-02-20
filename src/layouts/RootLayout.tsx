import { Link, Outlet } from "react-router-dom";

const parks = [
  { label: "Magic Kingdom", slug: "magic-kingdom" },
  { label: "EPCOT", slug: "epcot" },
  { label: "Hollywood Studios", slug: "hollywood-studios" },
  { label: "Animal Kingdom", slug: "animal-kingdom" },
  { label: "Disney Springs", slug: "disney-springs" },
];

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-800 text-white">
        <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap gap-4 items-center">
          <Link to="/" className="font-bold text-lg mr-4">
            🏰 Disney World Planner
          </Link>
          <Link to="/parks" className="hover:underline">
            Parks
          </Link>
          {parks.map((p) => (
            <Link
              key={p.slug}
              to={`/parks/${p.slug}`}
              className="hover:underline text-sm"
            >
              {p.label}
            </Link>
          ))}
          <Link to="/wait-times" className="hover:underline">
            Wait Times
          </Link>
          <Link to="/news" className="hover:underline">
            News
          </Link>
          <Link to="/deals" className="hover:underline">
            Deals
          </Link>
          <Link to="/blog" className="hover:underline">
            Blog
          </Link>
          <Link to="/planner" className="hover:underline">
            My Planner
          </Link>
          <Link to="/login" className="ml-auto hover:underline">
            Sign In
          </Link>
        </nav>
      </header>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-8">
        <Outlet />
      </main>

      <footer className="bg-gray-100 text-gray-600 text-center py-4 text-sm">
        © {new Date().getFullYear()} Disney World Planner Community. Not
        affiliated with The Walt Disney Company.
      </footer>
    </div>
  );
}
