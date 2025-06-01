"use client";
import LocationCard from "./location-card";
import StacksCard from "./stacks-card";

export default function About() {
  return (
    <div className="h-full flex-flex-col items-center text-center">
      <h1 className="text-3xl font-semibold">About Me</h1>
      <div className="mt-10 flex flex-col gap-4  rounded-lg h-full">
        <div className="grid md:grid-cols-2 gap-4">
          <LocationCard />
          <StacksCard />
        </div>
      </div>
    </div>
  );
}
