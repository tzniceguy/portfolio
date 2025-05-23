"use client";
import LocationCard from "./location-card";
import StacksCard from "./stacks-card";
import FavouriteStack from "./favourite-stack";

export default function About() {
  return (
    <div className="h-full flex-flex-col items-center text-center">
      <h1 className="text-3xl font-semibold">About Me</h1>
      <div className="mt-10 flex flex-col gap-4 p-4  rounded-lg h-full">
        <div className="grid md:grid-cols-2 gap-4">
          <LocationCard />
          <StacksCard />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <FavouriteStack />
          </div>
        </div>
      </div>
    </div>
  );
}
