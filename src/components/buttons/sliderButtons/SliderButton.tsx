import React from "react";
import "./SliderButton.css";

interface SliderButtonProps {
  direction: "left" | "right";
  onClick?: () => void;
}

export const SliderButton: React.FC<SliderButtonProps> = ({
  direction,
  onClick,
}) => {
  const baseClass = "glide__arrow";
  const directionClass =
    direction === "left" ? "glide__arrow--left" : "glide__arrow--right";

  return (
    <button
      className={`${baseClass} ${directionClass}`}
      onClick={onClick}
      aria-label={direction === "left" ? "Anterior" : "Siguiente"}
    >
      {direction === "left" ? "‹" : "›"}
    </button>
  );
};
