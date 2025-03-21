import Card from "./card";
import {
  SiNextdotjs,
  SiDjango,
  SiFastapi,
} from "@icons-pack/react-simple-icons";
import { FcLike } from "react-icons/fc";

export default function FavouriteStack() {
  const favouriteFrameworks = [
    { Icon: SiDjango, name: "Django", color: "#3776AB" },
    { Icon: SiFastapi, name: "FastAPI", color: "#3178C6" },
    { Icon: SiNextdotjs, name: "Next.js", color: "#6B7280" },
  ];

  return (
    <Card>
      <div className="flex items-center gap-2 hover:opacity-80 cursor-pointer">
        <FcLike color="" size={24} />
        <span>Favourite Framework</span>
      </div>
      <div className="flex flex-col gap-3 mt-3">
        {favouriteFrameworks.map(({ Icon, name, color }) => (
          <div key={name} className="flex items-center gap-2">
            <Icon color={color} size={20} />
            <span className="text-sm">{name}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
