import { Link } from "react-router-dom";

export default function BlogPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Community Blog</h1>
        <Link
          to="/blog/new"
          className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
        >
          Write a Post
        </Link>
      </div>
      <p className="text-gray-500 italic">
        Community blog posts coming soon.
      </p>
    </div>
  );
}
