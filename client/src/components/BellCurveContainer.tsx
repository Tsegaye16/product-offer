import React from "react";
import BellCurve from "./BellCurve";
import bellCurveData from "../data/bellCurveData";
import { Item } from "../types"; // Assuming Item type is correctly imported

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
  const numberOfCategories = categories.length;

  // Constants for layout calculations
  const CURVE_WIDTH_PX = 173.63; // Standard width of a single curve
  const CONTAINER_MAX_WIDTH_PX = 1200; // max-width of .bell-curves container from SCSS

  // Calculate the base width of a curve as a percentage of the container's max width.
  // This percentage helps in responsive positioning.
  const BASE_ITEM_WIDTH_PERCENT =
    (CURVE_WIDTH_PX / CONTAINER_MAX_WIDTH_PX) * 100;

  // For the "packed and centered" logic (used for few items):
  // Defines how much items should overlap. 0.2 means 20% of the item's base width.
  // Adjust this value to control the amount of "contact" or overlap.
  // 0.0 = just touching, positive value = overlap, negative value = gap.
  const PACKED_OVERLAP_RATIO = 0.35; // e.g., 35% overlap

  // This is the percentage of an item's width that the next item will advance by.
  // If PACKED_OVERLAP_RATIO is 0.35, next item starts 65% into the previous item's width.
  const packedItemAdvancePercent =
    BASE_ITEM_WIDTH_PERCENT * (1 - PACKED_OVERLAP_RATIO);

  // Determine the threshold for switching between "packed" and "full spread" logic.
  // The original logic (100 / N) naturally starts creating overlap when
  // the step (100 / N) becomes less than BASE_ITEM_WIDTH_PERCENT.
  // N > 100 / BASE_ITEM_WIDTH_PERCENT
  const minCategoriesForOriginalLogicOverlap =
    Math.ceil(100 / BASE_ITEM_WIDTH_PERCENT) + 3; // just because of I need to have 5 more items to be able to use the packed logic(11 numbers of bell curves);
  // Example: if BASE_ITEM_WIDTH_PERCENT is ~14.47%, this threshold is 7.
  // So for 2-6 items, we'll use the packed logic. For 7+ items, the original logic.

  return (
    <div className="bell-curves">
      {categories.map((category, index) => {
        let calculatedLeftPosition: number;

        if (numberOfCategories === 0) {
          return null; // No categories to render
        }

        if (numberOfCategories === 1) {
          // Center the single item
          calculatedLeftPosition = (100 - BASE_ITEM_WIDTH_PERCENT) / 2;
          // Ensure it's not pushed off-screen if somehow item width > container (not an issue here)
          calculatedLeftPosition = Math.max(0, calculatedLeftPosition);
        } else if (numberOfCategories < minCategoriesForOriginalLogicOverlap) {
          // "Packed and centered" logic for a few items (e.g., 2 to 6)
          // Calculate the total width this group of packed items will occupy
          const groupWidthPercent =
            (numberOfCategories - 1) * packedItemAdvancePercent +
            BASE_ITEM_WIDTH_PERCENT;

          // Calculate the offset to center this group within the 100% width
          const startOffsetPercent = Math.max(0, (100 - groupWidthPercent) / 2);

          calculatedLeftPosition =
            startOffsetPercent + index * packedItemAdvancePercent;
        } else {
          // Original logic for many items: spreads them across the full width.
          // This naturally causes overlap when numberOfCategories is high enough.
          calculatedLeftPosition = (100 / numberOfCategories) * index;
        }

        return (
          <BellCurve
            key={category}
            category={category}
            data={bellCurveData[category]}
            index={index} // Original index for z-ordering and keys
            leftPosition={calculatedLeftPosition} // Pass the calculated position
            totalCategoriesInView={numberOfCategories}
          />
        );
      })}
    </div>
  );
};

export default BellCurveContainer;
