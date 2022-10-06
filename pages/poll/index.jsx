import BackButton from "@/components/BackButton";
import PollComponent from "@/components/Poll";
import Button from "@/reusable/Button";
import { useState } from "react";
import Feed from "@/components/Feed";

export default function Poll() {
  const [comment, setComment] = useState("");

  return (
    <>
      <header className="border-b py-3 px-4 border-b-coolblack-200">
        <BackButton title="Poll"/>
      </header>
      <main className="border-b pb-4 mb-28">
        <PollComponent />
      </main>
    </>
  )
}