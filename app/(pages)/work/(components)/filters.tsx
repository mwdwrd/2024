import React from "react";
import clsx from "clsx";

interface FiltersProps {
  categories: {
    [category: string]: number;
  };
  active: string;
  onCategoryChange: (category: string) => void;
}

const Filters: React.FC<FiltersProps> = ({
  categories,
  active,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-col w-full font-mono text-xs uppercase gap-1">
    {Object.entries(categories).map(([cat, count], i) => (
      <div
        key={i}
        className={clsx(
          "flex flex-row justify-between relative cursor-pointer",
          "hover:text-foreground transition-colors",
          active === cat ? "text-foreground" : "text-foreground/40"
        )}
        onClick={() => onCategoryChange(cat)}
      >
        {cat}
        <span className="text-text-color">{count}</span>
        </div>
      ))}
    </div>
  );
};

export default Filters;
