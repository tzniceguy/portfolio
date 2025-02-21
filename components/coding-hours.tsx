import Card from "./card";
import { SiCodewars } from "@icons-pack/react-simple-icons";

export default function CodingHours() {
  return (
    <Card>
      <div className="flex items-center gap-2 hover:opacity-80 cursor-pointer">
        <SiCodewars color="#AD2C27" size={24} />
        <span>coding hours</span>
      </div>
      <div className="mt-3 text-center">
        <p className="text-2xl font-bold">42</p>
        <p className="text-sm text-gray-500">hours this week</p>
      </div>
    </Card>
  );
}
