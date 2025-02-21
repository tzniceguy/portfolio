import SocialLinksCard from "./contact-card";
import LocationCard from "./location-card";
import StacksCard from "./stacks-card";
import FavouriteStack from "./favourite-stack";
import CodingHours from "./coding-hours";

export default function About() {
  return (
    <div className="grid md:grid-cols-2 gap-4 p-4  rounded-lg h-full">
      <div className="flex flex-col gap-4">
        <LocationCard />
        <StacksCard />
      </div>
      <div className="flex flex-col gap-4">
        <SocialLinksCard />
        <div className="flex flex-col sm:flex-row gap-4 h-full">
          <FavouriteStack />
          <CodingHours />
        </div>
      </div>
    </div>
  );
}
