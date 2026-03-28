import { useState } from "react";

export default function AuthSection() {
  const [isLogin, setIsLogin] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();

    const url = isLogin
      ? "http://localhost:5000/login"
      : "http://localhost:5000/signup";

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(
          isLogin
            ? { email, password }
            : { name, phone, email, password }
        )
      });

      const data = await res.json();

      if (res.ok) {

        if (isLogin) {
          // 🔥 SAVE TOKEN + USER (CRITICAL FIX)
          localStorage.setItem("token", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));

          alert("Login Successful 🚀");

          window.location.href = "/";
        } else {
          // ✅ SIGNUP FLOW
          alert("Signup successful! Please login now.");

          // switch to login mode automatically
          setIsLogin(true);

          // clear fields
          setName("");
          setPhone("");
          setEmail("");
          setPassword("");
        }

      } else {
        alert(data.message);
      }

    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  }

  return (
    <section className="py-20 flex justify-center bg-black text-white">
      <div className="w-full max-w-md p-6 bg-gray-900 rounded-lg shadow-lg">

        <h2 className="text-3xl font-bold text-center mb-6">
          {isLogin ? "LOGIN" : "SIGN UP"}
        </h2>

        {/* 🔁 TOGGLE BUTTONS */}
        <div className="flex mb-6">
          <button
            onClick={() => setIsLogin(false)}
            className={`w-1/2 p-2 ${!isLogin ? "bg-red-500" : "bg-gray-700"}`}
          >
            Sign Up
          </button>

          <button
            onClick={() => setIsLogin(true)}
            className={`w-1/2 p-2 ${isLogin ? "bg-red-500" : "bg-gray-700"}`}
          >
            Login
          </button>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          {!isLogin && (
            <>
              <input
                placeholder="Full Name"
                value={name}
                onChange={e => setName(e.target.value)}
                className="p-2 bg-gray-800 rounded"
                required
              />

              <input
                placeholder="Phone Number"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                className="p-2 bg-gray-800 rounded"
                required
              />
            </>
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="p-2 bg-gray-800 rounded"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="p-2 bg-gray-800 rounded"
            required
          />

          <button className="bg-red-500 p-2 rounded font-bold hover:bg-red-600 transition">
            {isLogin ? "Login" : "Create Account"}
          </button>

        </form>
      </div>
    </section>
  );
}