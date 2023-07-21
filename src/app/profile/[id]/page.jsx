import React from "react";

export default function ProfilePage({ params: { id } }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Single Profile id :{id}</h1>
    </div>
  );
}
