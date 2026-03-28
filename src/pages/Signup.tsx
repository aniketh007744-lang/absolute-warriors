import { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup(e: any) {
    e.preventDefault();

    try {
      console.log("Signup button clicked");

      const res = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, phone, email, password })
      });

      const data = await res.json();

      console.log("Response:", data);

      if (res.ok) {
        // ✅ SAVE USER LOCALLY (LOGIN STATE)
        localStorage.setItem(
          "user",
          JSON.stringify({
            name,
            email,
            phone
          })
        );

        alert("Signup Successful 🚀");

        // ✅ REDIRECT TO HOME
        window.location.href = "/";
      } else {
        alert(data.message || "Signup failed");
      }

    } catch (error) {
      console.error("Signup error:", error);
      alert("Something went wrong. Check console.");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white bg-black">
      <h1 className="text-3xl mb-6 font-bold">Signup</h1>

      <form onSubmit={handleSignup} className="flex flex-col gap-4 w-80">

        <input 
          placeholder="Name" 
          value={name}
          onChange={e => setName(e.target.value)} 
          className="p-2 bg-gray-800 text-white border border-gray-600 rounded"
          required
        />

        <input 
          placeholder="Phone" 
          value={phone}
          onChange={e => setPhone(e.target.value)} 
          className="p-2 bg-gray-800 text-white border border-gray-600 rounded"
          required
        />

        <input 
          type="email"
          placeholder="Email" 
          value={email}
          onChange={e => setEmail(e.target.value)} 
          className="p-2 bg-gray-800 text-white border border-gray-600 rounded"
          required
        />

        <input 
          type="password"
          placeholder="Password" 
          value={password}
          onChange={e => setPassword(e.target.value)} 
          className="p-2 bg-gray-800 text-white border border-gray-600 rounded"
          required
        />

        <button className="bg-red-500 hover:bg-red-600 p-2 font-bold rounded transition">
          Sign Up
        </button>

      </form>
    </div>
  );
}