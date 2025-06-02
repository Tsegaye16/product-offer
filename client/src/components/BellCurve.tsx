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
}

const BellCurve: React.FC<BellCurveProps> = ({ category, data, index }) => {
  const svgPaths = {
    ideation:
      "M29.1859 213.588C20.773 265.15 0.320312 321.342 0.320312 321.342H179.309C179.309 321.342 161.848 260.635 153.264 213.589C144.679 166.543 152.553 -0.0826738 90.3443 0.880624C28.4337 1.83931 37.5988 162.025 29.1859 213.588Z",
    design:
      "M29.1859 213.588C20.773 265.15 0.320312 321.342 0.320312 321.342H179.309C179.309 321.342 161.848 260.635 153.264 213.589C144.679 166.543 152.553 -0.0826738 90.3443 0.880624C28.4337 1.83931 37.5988 162.025 29.1859 213.588Z",
    prototyping:
      "M29.1859 213.588C20.773 265.15 0.320312 321.342 0.320312 321.342H179.309C179.309 321.342 161.848 260.635 153.264 213.589C144.679 166.543 152.553 -0.0826738 90.3443 0.880624C28.4337 1.83931 37.5988 162.025 29.1859 213.588Z",
    appdev:
      "M29.1859 213.588C20.773 265.15 0.320312 321.342 0.320312 321.342H179.309C179.309 321.342 161.848 260.635 153.264 213.589C144.679 166.543 152.553 -0.0826738 90.3443 0.880624C28.4337 1.83931 37.5988 162.025 29.1859 213.588Z",
    apis: "M29.1859 213.588C20.773 265.15 0.320312 321.342 0.320312 321.342H179.309C179.309 321.342 161.848 260.635 153.264 213.589C144.679 166.543 152.553 -0.0826738 90.3443 0.880624C28.4337 1.83931 37.5988 162.025 29.1859 213.588Z",
    testing:
      "M29.1859 213.588C20.773 265.15 0.320312 321.342 0.320312 321.342H179.309C179.309 321.342 161.848 260.635 153.264 213.589C144.679 166.543 152.553 -0.0826738 90.3443 0.880624C28.4337 1.83931 37.5988 162.025 29.1859 213.588Z",
    dashboarddata:
      "M29.1859 213.588C20.773 265.15 0.320312 321.342 0.320312 321.342H179.309C179.309 321.342 161.848 260.635 153.264 213.589C144.679 166.543 152.553 -0.0826738 90.3443 0.880624C28.4337 1.83931 37.5988 162.025 29.1859 213.588Z",
    datascience:
      "M29.1859 213.588C20.773 265.15 0.320312 321.342 0.320312 321.342H179.309C179.309 321.342 161.848 260.635 153.264 213.589C144.679 166.543 152.553 -0.0826738 90.3443 0.880624C28.4337 1.83931 37.5988 162.025 29.1859 213.588Z",
    ai: "M29.1859 213.588C20.773 265.15 0.320312 321.342 0.320312 321.342H179.309C179.309 321.342 161.848 260.635 153.264 213.589C144.679 166.543 152.553 -0.0826738 90.3443 0.880624C28.4337 1.83931 37.5988 162.025 29.1859 213.588Z",
  };

  return (
    <div className={`curve ${category.toLowerCase()}`}>
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
            d={svgPaths[category.toLowerCase() as keyof typeof svgPaths]}
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
