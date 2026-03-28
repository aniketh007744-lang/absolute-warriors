import { useEffect, useState } from "react";

export default function Profile() {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    const token = localStorage.getItem("token");

    if (!user) {
      window.location.href = "/";
      return;
    }

    // 🔐 FETCH WITH TOKEN
    fetch(`http://https://absolute-warriors-backend-1.onrender.com/user/${user.id}`, {
      headers: {
        Authorization: token || ""
      }
    })
      .then(res => res.json())
      .then(data => setUserData(data))
      .catch(() => {
        alert("Session expired, login again");
        localStorage.clear();
        window.location.href = "/";
      });

  }, []);

  if (!userData) {
    return <div className="text-white p-10">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center text-white">

      <div className="bg-gray-900 p-8 rounded-2xl shadow-xl w-96 text-center">

        {/* TITLE */}
        <h1 className="text-3xl font-bold mb-6 text-red-500">
          👤 Your Profile
        </h1>

        {/* USER INFO */}
        <div className="space-y-3 text-left">

          <p><span className="text-gray-400">Name:</span> {userData.name}</p>
          <p><span className="text-gray-400">Email:</span> {userData.email}</p>
          <p><span className="text-gray-400">Phone:</span> {userData.phone}</p>

          <p>
            <span className="text-gray-400">Plan:</span>{" "}
            <span className="text-green-400 font-bold">
              {userData.plan}
            </span>
          </p>

          <p>
            <span className="text-gray-400">Status:</span>{" "}
            <span className={userData.paymentStatus === "Completed" ? "text-green-400 font-bold" : "text-yellow-400 font-bold"}>
              {userData.paymentStatus}
            </span>
          </p>

        </div>

        {/* BUTTONS */}
        <div className="mt-6 flex flex-col gap-3">

          {/* 🔥 PLAN BUTTON */}
          <button
            onClick={() => {
              window.location.href = "/#plans";
            }}
            className="bg-red-500 p-2 rounded font-bold hover:bg-red-600"
          >
            Upgrade Plan 💳
          </button>

          {/* 💰 SIMULATE PAYMENT */}
          {userData.paymentStatus === "Pending" && (
            <button
              onClick={async () => {
                const user = JSON.parse(localStorage.getItem("user") || "{}");
                const token = localStorage.getItem("token");

                try {
                  const res = await fetch(`http://https://absolute-warriors-backend-1.onrender.com/pay/${user.id}`, {
                    method: "PUT",
                    headers: {
                      Authorization: token || ""
                    }
                  });

                  const data = await res.json();

                  alert("Payment Successful 💰");

                  localStorage.setItem("user", JSON.stringify(data));

                  window.location.reload();

                } catch (err) {
                  console.error(err);
                  alert("Payment failed");
                }
              }}
              className="bg-green-500 p-2 rounded font-bold hover:bg-green-600"
            >
              Mark as Paid 💰
            </button>
          )}

          {/* 🚪 LOGOUT */}
          <button
            onClick={() => {
              localStorage.clear();
              window.location.href = "/";
            }}
            className="bg-gray-700 p-2 rounded"
          >
            Logout
          </button>

        </div>

      </div>
    </div>
  );
}