import { useNavigate } from "react-router-dom";

export default function DoctorLogin() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-100">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-[420px]">
        <h2 className="text-3xl font-bold text-teal-700 mb-6 text-center">
          Doctor Login
        </h2>

        <input
          placeholder="Doctor Email"
          className="w-full mb-4 px-4 py-2 border rounded-lg"
        />

        <input
          placeholder="Medical License ID"
          className="w-full mb-4 px-4 py-2 border rounded-lg"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-2 border rounded-lg"
        />

        <button
          onClick={() => navigate("/doctor")}
          className="w-full bg-teal-600 text-white py-3 rounded-lg hover:bg-teal-700 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
}
