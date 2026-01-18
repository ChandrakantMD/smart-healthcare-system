import { useNavigate } from "react-router-dom";

export default function RoleSelect() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-teal-100">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-[420px] text-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-8">
          Choose Login Type
        </h1>

        <button
          onClick={() => navigate("/login/patient")}
          className="w-full mb-4 py-3 text-lg rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          👤 Patient Login
        </button>

        <button
          onClick={() => navigate("/login/doctor")}
          className="w-full py-3 text-lg rounded-xl bg-teal-600 text-white hover:bg-teal-700 transition"
        >
          🩺 Doctor Login
        </button>
      </div>
    </div>
  );
}
