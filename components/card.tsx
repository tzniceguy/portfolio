import React from "react";

type CardProps = {
  icon?: React.ReactNode; // Allow any React node for the icon
  title?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string; // Allow custom class names
};

export default function Card({
  icon,
  title,
  description,
  children,
  className,
}: CardProps) {
  // Combine default classes with custom classes
  const cardClasses = `rounded p-4 border shadow-sm hover:shadow-md transition-shadow w-full ${className || ""}`;

  // If children are provided, use a simpler format
  if (children) {
    return (
      <div className={cardClasses}>
        <div className="font-semibold">{children}</div>
      </div>
    );
  }

  // Otherwise use the structured format with icon, title, description
  return (
    <div className={cardClasses}>
      <div className="font-semibold flex items-center mb-2">
        {icon && <span className="mr-2">{icon}</span>}
        <span>{title}</span>
      </div>
      <div className="text-gray-600">{description}</div>
    </div>
  );
}

// Default props (optional)
Card.defaultProps = {
  icon: null,
  title: "Default Title",
  description: "Default Description",
  className: "",
};
