function ItemCard({ item, showSpecs = false }) {
    const Icon = item.icon;

    return (
        <div className="group  rounded-xl p-6 shadow-sm border  hover:shadow-md transition-all duration-300 hover:-translate-y-1">
        <div className="flex items-start gap-4">
        <div
            className="p-3 rounded-lg flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
    style={{ backgroundColor: `${item.color}15` }}
>
    <Icon size={24} style={{ color: item.color }} />
    </div>

    <div className="flex-1 min-w-0">
    <div className="flex items-start justify-between mb-2">
    <div>
        <h3 className="font-semibold text-lg leading-tight">{item.name}</h3>
        <span
    className="text-sm font-medium px-2 py-1 rounded-full mt-1 inline-block"
    style={{
        backgroundColor: `${item.color}15`,
            color: item.color
    }}
>
    {item.category}
    </span>
    </div>
    </div>

    <p className="mb-3 leading-relaxed">{item.description}</p>

    {item.usage && (
        <div className="mb-3">
        <span className="text-sm font-medium opacity-75">Primary Use: </span>
    <span className="text-sm">{item.usage}</span>
        </div>
    )}

    {showSpecs && item.specs && (
        <div className="space-y-1">
        <span className="text-sm font-medium opacity-75">Key Features:</span>
    <ul className="text-sm space-y-1">
        {item.specs.map((spec, index) => (
                <li key={index} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
        {spec}
        </li>
    ))}
        </ul>
        </div>
    )}
    </div>
    </div>
    </div>
);
}