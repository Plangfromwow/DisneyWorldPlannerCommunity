import { useParams } from "react-router-dom";

export default function ProfilePage() {
  const { userId } = useParams<{ userId: string }>();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>
      <p className="text-gray-400 text-sm mb-4">User ID: {userId}</p>
      <p className="text-gray-500 italic">User profile page coming soon.</p>
    </div>
  );
}
