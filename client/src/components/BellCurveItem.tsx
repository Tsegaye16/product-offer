import React from "react";
import { Tooltip } from "react-tooltip";
import { Item, Link } from "../types";
import "./sample.scss";

interface BellCurveItemProps {
  item: Item;
  index: string;
  textColor: string;
}

const BellCurveItem: React.FC<BellCurveItemProps> = ({
  item,
  index,
  textColor,
}) => {
  const tooltipId = `tooltip-${item.title}-${index}`
    .replace(/\s+/g, "-")
    .toLowerCase();

  return (
    <>
      <li
        data-tooltip-id={tooltipId}
        className="bell-curve-list-item"
        style={{ color: textColor }}
      >
        {item.title}
      </li>
      <Tooltip
        id={tooltipId}
        place="right"
        className="bell-curve-custom-tooltip"
        clickable
      >
        <div className="bell-tooltip-container">
          <div className="bell-tooltip-heading">{item.toolTipTitle}</div>
          <div className="bell-tooltip-text">{item.description}</div>

          {item.links.length > 0 && (
            <div className="bell-links-grid">
              {item.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bell-link-row"
                >
                  <div className="bell-link-index">
                    {String(linkIndex + 1).padStart(2, "0")}
                  </div>
                  <div className="bell-link-details">
                    <div className="bell-link-title-wrapper">
                      <div className="bell-link-name">{link.title}</div>
                      <img
                        src="/assets/icons/link.svg"
                        alt="link"
                        className="bell-link-icon"
                      />
                    </div>
                    <div className="bell-link-desc">{link.description}</div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </Tooltip>
    </>
  );
};

export default BellCurveItem;
