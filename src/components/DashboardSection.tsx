import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { User, CreditCard, CheckCircle, Calendar } from "lucide-react";

export default function DashboardSection() {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    const token = localStorage.getItem("token");

    // ❌ Not logged in
    if (!user || !token) {
      setError("Not logged in");
      setLoading(false);
      return;
    }

    fetch(`http://localhost:5000/user/${user.id}`, {
      headers: {
        Authorization: token,
      },
    })
      .then(async (res) => {
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "Error fetching user");
        }

        return data;
      })
      .then((data) => {
        console.log("USER DATA:", data); // ✅ DEBUG
        setUserData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("ERROR:", err.message);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // 🔄 LOADING
  if (loading) {
    return (
      <div className="text-white text-center py-20">
        Loading dashboard...
      </div>
    );
  }

  // ❌ ERROR STATE (VERY IMPORTANT)
  if (error) {
    return (
      <div className="text-red-500 text-center py-20">
        ❌ {error}
      </div>
    );
  }

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-4"
        >
          YOUR <span className="text-red-500">DASHBOARD</span>
        </motion.h2>

        <p className="text-gray-400 mb-12">
          Your membership details
        </p>

        <div className="grid md:grid-cols-4 gap-6">

          {/* NAME */}
          <div className="bg-gray-900 p-6 rounded-xl">
            <User className="text-red-500 mb-2" />
            <p className="text-gray-400">Member</p>
            <h3 className="font-bold">{userData?.name}</h3>
          </div>

          {/* PLAN */}
          <div className="bg-gray-900 p-6 rounded-xl">
            <CreditCard className="text-red-500 mb-2" />
            <p className="text-gray-400">Plan</p>
            <h3 className="font-bold">{userData?.plan || "No Plan"}</h3>
          </div>

          {/* STATUS */}
          <div className="bg-gray-900 p-6 rounded-xl">
            <CheckCircle
              className={
                userData?.paymentStatus === "Completed"
                  ? "text-green-500 mb-2"
                  : "text-yellow-500 mb-2"
              }
            />
            <p className="text-gray-400">Status</p>
            <h3 className="font-bold">
              {userData?.paymentStatus === "Completed"
                ? "Active"
                : "Pending"}
            </h3>
          </div>

          {/* EXPIRY */}
          <div className="bg-gray-900 p-6 rounded-xl">
            <Calendar className="text-red-500 mb-2" />
            <p className="text-gray-400">Expires</p>
            <h3 className="font-bold">
              {userData?.paymentStatus === "Completed"
                ? "1 Month from Today"
                : "--"}
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
}