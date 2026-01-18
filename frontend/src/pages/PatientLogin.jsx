import { useNavigate } from "react-router-dom";

export default function PatientLogin() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-[420px]">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Patient Login
        </h2>

        <input
          placeholder="Patient Email"
          className="w-full mb-4 px-4 py-2 border rounded-lg"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-2 border rounded-lg"
        />

        <button
          onClick={() => navigate("/patient")}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}
