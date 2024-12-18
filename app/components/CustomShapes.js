// app/components/CustomShapes.js

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
