"use client";
import SocialLinksCard from "./contact-card";
import LocationCard from "./location-card";
import StacksCard from "./stacks-card";
import FavouriteStack from "./favourite-stack";
import CodingHours from "./coding-hours";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();
  return (
    <div className="h-full flex-flex-col items-center text-center">
      <h1 className="text-3xl font-semibold">About Me</h1>
      <div className="mt-10 grid md:grid-cols-2 gap-4 p-4  rounded-lg h-full">
        <div className="flex flex-col gap-4">
          <LocationCard />
          <StacksCard />
        </div>
        <div className="flex flex-col gap-4">
          <SocialLinksCard />
          <div className="flex flex-col sm:flex-row gap-4">
            <FavouriteStack />
            <CodingHours />
          </div>
        </div>
      </div>
      <button
        className="mt-4 p-2 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        onClick={() => router.push("/about")}
      >
        Know more about me
      </button>
    </div>
  );
}
