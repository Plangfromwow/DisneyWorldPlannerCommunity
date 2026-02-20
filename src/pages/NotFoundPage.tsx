import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="text-center mt-16">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-gray-500 mb-6">
        Sorry, we couldn&apos;t find that page.
      </p>
      <Link to="/" className="text-blue-700 hover:underline">
        Back to Home
      </Link>
    </div>
  );
}
