"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";
import dynamic from "next/dynamic";


 function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onLogin = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 border border-sky-500">
        <div className="w-full max-w-xs">
          <h1 className="flex justify-center my-7 text-2xl">Login Form</h1>
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={(e) => onLogin(e)}
          >
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                type="email"
                className="p-1 border border-gray-300 rounded-md md-4 focus:outline-none focus:border-sky-600 text-black"
                id="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="p-1 border border-gray-300 rounded-md md-4 focus:outline-none focus:border-sky-600 text-black"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <div class="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
                type="submit"
              >
                Sign In
              </button>
              <Link
                href={"/signup"}
                class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              >
                Create Account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default dynamic(() => Promise.resolve(LoginPage), { ssr: false });