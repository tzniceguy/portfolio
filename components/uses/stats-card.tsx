interface CardProps {
  title: string;
  count: number | string;
  icon: React.ElementType;
  color: string;
}
export default function StatsCard({
  title,
  count,
  icon: Icon,
  color,
}: CardProps) {
  return (
    <div className=" rounded-xl p-6 shadow-sm border ">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium opacity-75">{title}</p>
          <p className="text-2xl font-bold mt-1">{count}</p>
        </div>
        <div
          className="p-3 rounded-lg"
          style={{ backgroundColor: `${color}15` }}
        >
          <Icon size={24} style={{ color }} />
        </div>
      </div>
    </div>
  );
}
