import { fetchRequestsById } from "@/app/lib/data";
import { auth } from "@/auth";

type Request = {
  id: number;
  userId: string;
  type: string;
  message: string | null;
  credentials: string | null;
  subtype: string | null;
  status: string;
  createdAt: Date;
};

export default async function Page() {
  const session = await auth();
  const userId = session?.user?.id; // string
  const requests: Request[] = await fetchRequestsById(userId!);

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        All User Requests
      </h1>

      {requests.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center text-gray-500 border-2 border-dashed border-gray-300 rounded-lg">
          <p className="text-lg font-medium">No requests found</p>
          <p className="text-sm text-gray-400 mt-1">
            You haven’t created any requests yet.
          </p>
        </div>
      ) : (
        <ul className="space-y-4">
          {requests.map((req) => (
            <li
              key={req.id}
              className="bg-white shadow-sm border border-gray-200 rounded-lg p-5 hover:shadow-md transition"
            >
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-semibold text-gray-800">
                  {req.type}
                </h2>
                <span
                  className={`px-3 py-1 text-xs font-medium rounded-full
                    ${
                      req.status === "pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : req.status === "approved"
                        ? "bg-green-100 text-green-800"
                        : req.status === "rejected"
                        ? "bg-red-100 text-red-800"
                        : "bg-gray-100 text-gray-700"
                    }
                  `}
                >
                  {req.status}
                </span>
              </div>

              {req.message && (
                <p className="text-gray-700 mb-2">
                  <strong className="text-gray-900">Message: </strong>
                  {req.message}
                </p>
              )}

              {req.credentials && (
                <p className="text-gray-700 mb-2">
                  <strong className="text-gray-900">Credentials: </strong>
                  {req.credentials}
                </p>
              )}

              {req.subtype && (
                <p className="text-gray-700 mb-2">
                  <strong className="text-gray-900">Subtype: </strong>
                  {req.subtype}
                </p>
              )}

              <p className="text-sm text-gray-500 italic">
                Created At: {new Date(req.createdAt).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
