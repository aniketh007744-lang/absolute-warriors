import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AdminPanel() {
  const [users, setUsers] = useState<any[]>([]);
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:5000/admin/users").then(res => res.json()),
      fetch("http://localhost:5000/admin/leads").then(res => res.json())
    ])
      .then(([usersData, leadsData]) => {
        setUsers(usersData);
        setLeads(leadsData);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p className="text-lg animate-pulse">Loading Admin Panel...</p>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* HEADER */}
      <motion.h1
        className="text-4xl font-bold mb-10 text-red-500 tracking-wide"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        👑 Admin Dashboard
      </motion.h1>

      {/* USERS */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl mb-4">👥 Users</h2>

        <div className="overflow-x-auto rounded-xl border border-gray-700 shadow-lg">
          <table className="w-full text-center">
            <thead className="bg-gray-800 text-gray-300">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Plan</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>

            <tbody>
              {users.map((u, i) => (
                <motion.tr
                  key={i}
                  className="border-t border-gray-700 hover:bg-gray-900 transition"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ scale: 1.01 }}
                >
                  <td className="p-3">{u.name}</td>
                  <td className="p-3">{u.email}</td>
                  <td className="p-3">{u.phone}</td>
                  <td className="p-3">{u.plan || "None"}</td>

                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        u.paymentStatus === "Completed"
                          ? "bg-green-600"
                          : "bg-yellow-500 text-black"
                      }`}
                    >
                      {u.paymentStatus}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* LEADS */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl mb-4">📩 Leads</h2>

        <div className="overflow-x-auto rounded-xl border border-gray-700 shadow-lg">
          <table className="w-full text-center">
            <thead className="bg-gray-800 text-gray-300">
              <tr>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Phone</th>
                <th className="p-3">Message</th>
              </tr>
            </thead>

            <tbody>
              {leads.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-4 text-gray-400">
                    No leads yet
                  </td>
                </tr>
              ) : (
                leads.map((l, i) => (
                  <motion.tr
                    key={i}
                    className="border-t border-gray-700 hover:bg-gray-900 transition"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ scale: 1.01 }}
                  >
                    <td className="p-3">{l.name}</td>
                    <td className="p-3">{l.email}</td>
                    <td className="p-3">{l.phone}</td>
                    <td className="p-3">{l.message}</td>
                  </motion.tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
}