"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Form from "./Components/Form";

export default function HomePage() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleStart = (username, difficulty) => {
    router.push(
      `/game?username=${encodeURIComponent(
        username
      )}&difficulty=${encodeURIComponent(difficulty)}`
    );
  };

  return (
    <div className="min-h-screen p-4 bg-white text-black">
      <Form setUsername={setUsername} onSubmit={handleStart} />
    </div>
  );
}
