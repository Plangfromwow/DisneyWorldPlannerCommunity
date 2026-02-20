import { useParams } from "react-router-dom";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div>
      <p className="text-gray-400 text-sm mb-2">Post: {slug}</p>
      <p className="text-gray-500 italic">Blog post detail coming soon.</p>
    </div>
  );
}
