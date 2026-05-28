"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-4xl font-bold mb-4">
          Dashboard KlinikKu
        </h1>

        <p className="mb-8 text-gray-600">
          Frontend sudah terhubung dengan backend NestJS 🚀
        </p>

        <div className="flex gap-4 flex-wrap">
          <button
            onClick={() => router.push("/dokter")}
            className="bg-blue-500 text-white px-6 py-3 rounded-lg"
          >
            Data Dokter
          </button>

          <button
            onClick={() => router.push("/obat")}
            className="bg-green-500 text-white px-6 py-3 rounded-lg"
          >
            Data Obat
          </button>

          <button
            onClick={() => router.push("/appointment")}
            className="bg-purple-500 text-white px-6 py-3 rounded-lg"
          >
            Appointment
          </button>

          <button
            onClick={logout}
            className="bg-red-500 text-white px-6 py-3 rounded-lg"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}