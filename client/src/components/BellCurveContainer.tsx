import React from "react";
import BellCurve from "./BellCurve";
import bellCurveData from "../data/bellCurveData";
import { Item } from "../types";

interface BellCurveCategory {
  icon: string;
  color: string;
  textColor: string;
  items: Item[];
}

interface BellCurveData {
  [key: string]: BellCurveCategory;
}

const BellCurveContainer: React.FC = () => {
  const categories = Object.keys(bellCurveData);
  const totalItems = categories.length;

  return (
    <div className="bell-curves">
      {categories.map((category, index) => (
        <BellCurve
          key={category}
          category={category}
          data={bellCurveData[category]}
          index={index}
          totalItems={totalItems}
        />
      ))}
    </div>
  );
};

export default BellCurveContainer;
