// components/Percentiles.js

const SVG_DIM = 20;

const DX = 10;
const DY = 22;

export const CustomCircle = ({ x = 0, y = 0, color }) => (
  <svg
    x={x - DX} // Center the circle horizontally
    y={y - DY} // Offset vertically to raise it above the area
    width={SVG_DIM}
    height={SVG_DIM}
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="35" r="30" fill={color} />
  </svg>
);

export const CustomTriangle = ({ x = 0, y = 0, dir = "up", colors }) => (
  <svg
    x={x - DX} // Center the triangle horizontally
    y={y - DY} // Offset vertically to raise it above the area
    width={SVG_DIM}
    height={SVG_DIM}
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon
      points={dir === "up" ? "50,5 80,70 20,70" : "50,70 80,5 20,5"}
      fill={dir === "up" ? colors.darkSecondary : colors.lightSecondary}
      stroke="white" // Adds a white stroke
      strokeWidth="1" // Adjust thickness of the stroke
    />
  </svg>
);

export const getRankColor = (rank, colors) => {
  if (!rank) {
    return "inherit";
  } else if (rank < 25) {
    return colors.lightSecondary;
  } else if (rank >= 75) {
    return colors.darkSecondary;
  } else {
    return colors.secondaryColor;
  }
};

export function formatRank(value, simple) {
  if (value == null) {
    return "—";
  } else {
    const string = Math.round(value).toString();

    if (Math.round(value) > 90) {
      if (simple) return "90th+";
      return (
        <>
          90<sup>th</sup>+
        </>
      );
    } else if (Math.round(value) < 10) {
      if (simple) return "<10th";
      return (
        <>
          &lt;10<sup>th</sup>&nbsp;
        </>
      );
    } else {
      switch (string.slice(-1)) {
        case "1":
          if (simple) return `${string}st`;
          return (
            <>
              {string}
              <sup>st</sup>&nbsp;
            </>
          );
        case "2":
          if (simple) return `${string}nd`;
          return (
            <>
              {string}
              <sup>nd</sup>&nbsp;
            </>
          );
        case "3":
          if (simple) return `${string}rd`;
          return (
            <>
              {string}
              <sup>rd</sup>&nbsp;
            </>
          );
        default:
          if (simple) return `${string}th`;
          return (
            <>
              {string}
              <sup>th</sup>&nbsp;
            </>
          );
      }
    }
  }
}

function isEmpty(value) {
  return (
    value === undefined ||
    value === null ||
    (typeof value === "object" && Object.keys(value).length === 0) ||
    (typeof value === "string" && value.trim().length === 0)
  );
}

export function formatDollar(value) {
  if (isEmpty(value)) {
    return returnEmpty();
  }
  return (
    "$" +
    Math.round(value)
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
  );
}

export function addPercent(value) {
  if (value === "0") {
    return "0%";
  } else if (isEmpty(value)) {
    return returnEmpty();
  } else {
    return Math.round(value).toString() + "%";
  }
}
