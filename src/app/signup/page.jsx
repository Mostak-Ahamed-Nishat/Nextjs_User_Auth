"use client";
import dynamic from "next/dynamic";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function SignUpPage() {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const onSignUp = async (e) => {
    try {
      const response = await axios.post("/api/users/signup", user);

      console.log("Sign Up Success");

      console.log(typeof response);

      router.push("/login");
    } catch (error) {
      console.log("Client Error", error.message);

      // toast.error(error.message ? error.message : "Sign Up failed", {
      //   position: "top-right",
      // });

      // toastFunction("error", error.message ? error.message : "Sign Up failed");
    }
    e.preventDefault();
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    }
  }, [user]);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 border border-sky-500">
        <div className="w-full max-w-xs">
          <h1 className="flex justify-center my-7 text-2xl">Signup Form</h1>
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={(e) => onSignUp(e)}
          >
            <div class="mb-4">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="username"
              >
                Username
              </label>
              <input
                type="text"
                className="p-1 border border-gray-300 rounded-md md-4 focus:outline-none focus:border-sky-600 text-black"
                id="username"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
            </div>
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
              <Link href={"/login"}
                class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                
              >
                Already have account?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default dynamic(() => Promise.resolve(SignUpPage), { ssr: false });
