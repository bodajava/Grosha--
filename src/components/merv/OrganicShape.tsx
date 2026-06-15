import React from "react";

interface OrganicShapeProps {
  type?: "blob" | "circle" | "semi-circle" | "arch";
  color?: string;
  className?: string;
  opacity?: number;
}

export const OrganicShape: React.FC<OrganicShapeProps> = ({
  type = "blob",
  color = "bg-primary-container",
  className = "",
  opacity = 0.15,
}) => {
  const getPath = () => {
    switch (type) {
      case "semi-circle":
        return "M 0 100 A 100 100 0 0 1 200 100 Z";
      case "arch":
        return "M 0 100 Q 100 0 200 100 L 200 120 L 0 120 Z";
      case "blob":
      default:
        return "M147.1,-163.5C186.2,-132.8,210.4,-81.9,214.3,-28.9C218.2,24,201.8,78.9,169.1,120C136.3,161.1,87.2,188.4,32.9,202.9C-21.3,217.4,-80.7,219.1,-128.9,191.6C-177,164.2,-213.9,107.5,-223.5,46.2C-233.1,-15,-215.3,-80.7,-178.6,-133.4C-141.8,-186.2,-86.1,-225.9,-30.9,-231.4C24.3,-236.9,88.1,-194.3,147.1,-163.5Z";
    }
  };

  return (
    <div 
      className={`absolute pointer-events-none ${className}`}
      style={{ opacity }}
    >
      <svg
        viewBox={type === "blob" ? "-300 -300 600 600" : "0 0 200 120"}
        className="w-full h-full"
      >
        <path
          d={getPath()}
          className="fill-current text-[var(--shape-color)]"
          style={{ "--shape-color": `var(--${color.replace("bg-", "")}, #ade2f4)` } as React.CSSProperties}
        />
      </svg>
    </div>
  );
};
