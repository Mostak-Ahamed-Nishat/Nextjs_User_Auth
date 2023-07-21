"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 border border-sky-500">

        <h1>Signup</h1>
        <hr />
      
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="p-1 border border-gray-300 rounded-md md-4 focus:outline-none focus:border-sky-600"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="p-1 border border-gray-300 rounded-md md-4 focus:outline-none focus:border-sky-600"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />

        <button className="p-2 my-4 border border-gray-300 rounded-md mb-4 focus:outline-none focus:border-gray-600">
          Signup here
        </button>
        <Link href={'/signup'}>Go to Signup page</Link>

    </div>
  );
}
