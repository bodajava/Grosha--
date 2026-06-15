import React from "react";

interface FluidArchDividerProps {
  from?: string;
  to?: string;
  className?: string;
  flip?: boolean;
}

export const FluidArchDivider: React.FC<FluidArchDividerProps> = ({
  from = "bg-background",
  to = "bg-surface-low",
  className = "",
  flip = false,
}) => {
  return (
    <div className={`relative w-full overflow-hidden leading-[0] ${className}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`relative block w-full h-[60px] md:h-[100px] ${flip ? "rotate-180" : ""}`}
      >
        <path
          d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z"
          className="fill-current text-[var(--to-color)]"
          style={{ "--to-color": `var(--${to.replace("bg-", "")}, #fcf9ef)` } as React.CSSProperties}
        />
      </svg>
    </div>
  );
};
