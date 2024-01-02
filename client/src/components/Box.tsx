import React from "react";
import { IBox as BoxType } from "../types";

const Box: React.FC<BoxType & { onClick: () => void }> = ({
  color,
  x,
  y,
  onClick,
}) => (
  <div
    style={{
      backgroundColor: color,
      position: "absolute",
      width: "40px",
      height: "40px",
      top: `${y * 40}px`,
      zIndex: 11111,
      left: `${x * 40}px`,
    }}
    onClick={onClick}
  ></div>
);

export default Box;
