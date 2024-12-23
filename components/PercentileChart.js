// components/PercentileChart.js

import {
  VictoryChart,
  VictoryAxis,
  VictoryArea,
  VictoryScatter,
  VictoryLabel,
  VictoryLine,
  VictoryTheme,
} from "victory";
import { Box, Typography } from "@mui/material";
import { lighten, darken } from "@mui/system";
import {
  CustomCircle,
  CustomTriangle,
  getRankColor,
  formatRank,
  formatDollar,
} from "@/components/Percentiles";
import { brand } from "@/styles/theme";

const PercentileChart = ({
  yLabel = "Individual Deductibles",
  data = {
    p25: 5000,
    p50: 3200,
    p75: 2500,
    deciles: {
      5: 6350,
      10: 6000,
      20: 5000,
      30: 4000,
      40: 3500,
      50: 3200,
      60: 3000,
      70: 2500,
      80: 2500,
      90: 2000,
      95: 1600,
      low: 6000,
      high: 1400,
    },
    plan: 2500,
    rank: 80,
  },
}) => {
  const secondaryColor = brand.secondary.hex;
  const darkSecondary = darken(secondaryColor, 0.4);
  const lightSecondary = lighten(secondaryColor, 0.6);

  const colors = {
    secondaryColor: secondaryColor,
    darkSecondary: darkSecondary,
    lightSecondary: lightSecondary,
  };

  const gradient = `linear-gradient(135deg, ${brand.primary.hex} 30%, ${brand.primary.hex}E6 90%)`;

  // PDF Customizations
  const height = 200;
  const tickCount = 6;
  const fontSize = 10;
  const DY = -33;
  const DX = 3;

  const decileData = Object.keys(data.deciles || {})
    .map((key) => ({
      x: parseInt(key, 10),
      y: data.deciles[key] || null,
    }))
    .filter((point) => point.x && point.x !== 5 && point.x !== 95);

  const benchmarks = [
    { x: 25, y: data?.p25 },
    { x: 75, y: data?.p75 },
  ];

  const percentileData = [...decileData, ...benchmarks];

  const yValues = percentileData.map((point) => point.y);
  const yMax = Math.max(...yValues);
  const yMaxAdj = Math.ceil(Math.round(yMax) * 1.3);

  const axisStyle = {
    grid: { stroke: "#C0C0C0", opacity: 0.4 },
    axis: { stroke: "#C0C0C0" },
    ticks: { stroke: "#C0C0C0", size: 4 },
    tickLabels: { fontSize: fontSize, fill: "#555", padding: 2 },
    axisLabel: { fontSize: fontSize, fill: "#555", padding: 26 },
  };

  const labelStyle = { fontSize: fontSize, fill: "#555" };

  const gradientId = "threeColorGradient";

  const yourRank = Math.max(10, Math.min(88.5, data?.rank));
  const yourPlan = Math.max(data?.plan, yMax * 0.05);

  return (
    <Box>
      <Box
        sx={{
          background: gradient,
          color: "#fff",
          padding: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="body2" sx={{ opacity: 0.8 }}>
          Medical/Rx: HDHP
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 700 }}>
          Percentiles vs INN Individual Deductibles
        </Typography>
      </Box>
      <Box sx={{ paddingX: 2, paddingBottom: 2, backgroundColor: "#F7F7F7" }}>
        <svg width={0} height={0}>
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
              {/* More gradual transition for lightSecondary to secondaryColor */}
              <stop offset="0%" stopColor={colors.lightSecondary} />
              <stop offset="15%" stopColor={colors.lightSecondary} />
              <stop offset="35%" stopColor={colors.secondaryColor} />

              {/* Smoother transition for secondaryColor to darkSecondary */}
              <stop offset="65%" stopColor={colors.secondaryColor} />
              <stop offset="85%" stopColor={colors.darkSecondary} />
              <stop offset="100%" stopColor={colors.darkSecondary} />
            </linearGradient>
          </defs>
        </svg>
        <VictoryChart
          theme={VictoryTheme.material}
          domain={{ x: [10, 90], y: [0, yMaxAdj] }}
          padding={{ top: 6, bottom: 32, left: 59, right: 20 }}
          height={height}
        >
          <VictoryArea
            data={percentileData}
            style={{ data: { fill: `url(#${gradientId})` } }}
            interpolation="linear"
          />
          <VictoryAxis
            tickValues={[10, 20, 30, 40, 50, 60, 70, 80, 90]}
            tickFormat={(t) => `${t}th`}
            style={{
              ...axisStyle,
              axisLabel: { ...axisStyle.axisLabel, padding: 23 },
              tickLabels: { ...axisStyle.tickLabels, padding: 7 },
            }}
            label="Percentiles"
            axisLabelComponent={<VictoryLabel dy={0} />}
          />

          <VictoryAxis
            dependentAxis
            tickFormat={(val) => `$${val.toLocaleString()}`}
            style={axisStyle}
            label={yLabel}
            axisLabelComponent={<VictoryLabel dy={-22} />}
            tickCount={tickCount}
          />
          {/* Dashed Vertical Lines */}
          {[25, 50, 75].map((pct) => (
            <VictoryLine
              key={pct}
              data={[
                { x: pct, y: data[`p${pct}`] + yMax * 0.07 },
                { x: pct, y: data[`p${pct}`] },
              ]}
              style={{
                data: {
                  stroke: colors.darkSecondary,
                  strokeWidth: 1,
                  strokeDasharray: "3,2",
                },
              }}
            />
          ))}

          {/* p25 */}
          <VictoryScatter
            data={[{ x: 25, y: data.p25 }]}
            dataComponent={<CustomTriangle dir="down" colors={colors} />}
          />
          <VictoryLabel
            text={`Low Benchmark\n${formatDollar(data.p25)} (25th)`}
            datum={{ x: 25, y: data.p25 }}
            dy={DY}
            dx={DX}
            textAnchor="middle"
            style={labelStyle}
          />

          {/* p50 */}
          <VictoryScatter
            data={[{ x: 50, y: data.p50 }]}
            dataComponent={<CustomCircle color={colors.secondaryColor} />}
          />
          <VictoryLabel
            text={`Median Benchmark\n${formatDollar(data.p50)} (50th)`}
            datum={{ x: 50, y: data.p50 }}
            dy={DY}
            dx={0}
            textAnchor="middle"
            style={labelStyle}
          />
          {/* p75 */}
          <VictoryScatter
            data={[{ x: 75, y: data.p75 }]}
            dataComponent={<CustomTriangle colors={colors} />}
          />
          <VictoryLabel
            text={`High Benchmark\n${formatDollar(data.p75)} (75th)`}
            datum={{ x: 75, y: data.p75 }}
            dy={DY}
            dx={-DX}
            textAnchor="middle"
            style={labelStyle}
          />
          {/* Your Plan */}
          <VictoryScatter
            data={[{ x: yourRank, y: yourPlan }]}
            dataComponent={
              <svg
                width={8}
                height={8}
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0"
                  y="0"
                  width="100"
                  height="100"
                  fill={getRankColor(data?.rank, colors)}
                  stroke="black"
                  strokeWidth="12"
                />
              </svg>
            }
          />
          <VictoryLabel
            text={`Your Plan\n${formatDollar(data?.plan)} (${formatRank(
              data?.rank,
              true
            )})`}
            datum={{ x: yourRank, y: yourPlan }}
            dy={17}
            dx={yourRank > 85 ? -5 : yourRank < 20 ? 17 : 5}
            textAnchor="middle"
            style={{
              fill: "black", // Text color
              stroke: "white", // Stroke color (outline)
              strokeWidth: 1.5, // Thickness of the stroke
              paintOrder: "stroke", // Ensures stroke is rendered beneath fill
              fontSize: fontSize * 0.9,
              fontWeight: 600,
            }}
          />
        </VictoryChart>
      </Box>
    </Box>
  );
};

export default PercentileChart;
