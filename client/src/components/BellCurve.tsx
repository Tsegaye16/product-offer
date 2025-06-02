import React from "react";
import BellCurveItem from "./BellCurveItem";
import { Item } from "../types";

interface BellCurveCategory {
  icon: string;
  color: string;
  textColor: string;
  items: Item[];
}

interface BellCurveProps {
  category: string;
  data: BellCurveCategory;
  index: number;
  leftPosition: number;
  totalCategoriesInView: number; // Prop for total number of categories
}

const BellCurve: React.FC<BellCurveProps> = ({
  category,
  data,
  index,
  leftPosition,
  totalCategoriesInView, // Destructure the new prop
}) => {
  const svgPath =
    "M29.1859 213.588C20.773 265.15 0.320312 321.342 0.320312 321.342H179.309C179.309 321.342 161.848 260.635 153.264 213.589C144.679 166.543 152.553 -0.0826738 90.3443 0.880624C28.4337 1.83931 37.5988 162.025 29.1859 213.588Z";

  const curveStyle: React.CSSProperties = {
    left: `${leftPosition}%`,
    zIndex: totalCategoriesInView - index, // e.g., if 50 items, index 0 is 50, index 49 is 1
  };

  return (
    <div className="curve" style={curveStyle}>
      <span>{category}</span>
      <div className="curve-svg-container">
        <svg
          width="180"
          height="322"
          viewBox="0 0 180 322"
          className="curve-svg"
          preserveAspectRatio="none"
        >
          <path
            d={svgPath}
            fill={data.color}
            opacity="0.7"
            className="curve-path"
          />
        </svg>
      </div>
      <div className="curve-content" style={{ color: data.textColor }}>
        <img src={data.icon} alt={`${category} Icon`} className="curve-icon" />
        <ul>
          {data.items.map((item, idx) => (
            <BellCurveItem
              key={idx}
              item={item}
              index={`${category}-${idx}`}
              textColor={data.textColor}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BellCurve;
