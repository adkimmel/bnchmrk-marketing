// components/BenchmarkTable.js

import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Box,
} from "@mui/material";
import { lighten, darken } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import {
  CustomCircle,
  CustomTriangle,
  getRankColor,
  formatRank,
  addPercent,
  formatDollar,
} from "@/components/Percentiles";
import { brand } from "@/styles/theme";

export default function BenchmarkTable({
  header = "Medical/Rx: HDHP",
  subheader = "In-Network",
  bodyCells = [
    {
      format: formatDollar,
      label: "Individual Deductible",
      superscript: "1",
      p25: 5000,
      p50: 3250,
      p75: 2500,
      plan: 2500,
      rank: 80,
    },
    {
      format: formatDollar,
      label: "Family Deductible",
      p25: 10000,
      p50: 6500,
      p75: 5000,
      plan: 5000,
      rank: 80,
    },
    {
      format: formatDollar,
      label: "Individual Max OOP",
      p25: 6500,
      p50: 5000,
      p75: 4000,
      plan: 5000,
      rank: 50,
    },
    {
      format: formatDollar,
      label: "Family Max OOP",
      p25: 13000,
      p50: 10000,
      p75: 8000,
      plan: 10000,
      rank: 50,
    },
    {
      format: addPercent,
      label: "Coinsurance",
      p25: 20,
      p50: 10,
      p75: 0,
      plan: 25,
      rank: 15,
    },
  ],
  notes = [
    "7% of plans are integrated with Health Reimbursement Arrangements (HRAs).",
  ],
}) {
  const primaryColor = brand.primary.hex;
  const secondaryColor = brand.secondary.hex;
  const darkSecondary = darken(secondaryColor, 0.4);
  const lightSecondary = lighten(secondaryColor, 0.6);

  const colors = {
    primaryColor: primaryColor,
    secondaryColor: secondaryColor,
    darkSecondary: darkSecondary,
    lightSecondary: lightSecondary,
  };

  const gradient = `linear-gradient(135deg, ${primaryColor} 30%, ${primaryColor}E6 90%)`;

  const theme = useTheme();

  function getRankTextColor(value) {
    if (!value) {
      return "inherit";
    } else if (value < 25) {
      return theme.palette.getContrastText(lightSecondary);
    } else if (value >= 75) {
      return theme.palette.getContrastText(darkSecondary);
    } else {
      return theme.palette.getContrastText(secondaryColor);
    }
  }

  const headers = [
    {
      align: "left",
      content: (
        <>
          <Typography variant="body2" noWrap sx={{ opacity: 0.8 }}>
            {header}
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: 700 }} noWrap>
            {subheader}
          </Typography>
        </>
      ),
    },
    {
      align: "right",
      content: (
        <>
          <Typography variant="body2" sx={{ fontWeight: 700 }}>
            Your
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 700 }}>
            Plan
          </Typography>
        </>
      ),
    },
    {
      id: "rank",
      align: "right",
      content: (
        <>
          <Typography variant="body2">Your</Typography>
          <Typography variant="body2">Rank</Typography>
        </>
      ),
    },
    {
      align: "right",
      content: (
        <>
          <Typography
            variant="body2"
            sx={{ paddingRight: 1, paddingBottom: 0.5 }}
          >
            Low
          </Typography>
          <Typography
            variant="body2"
            sx={{ display: "inline-flex", alignItems: "center" }}
          >
            <CustomTriangle
              dir="down"
              colors={{ darkSecondary, lightSecondary }}
            />
            25<sup>th</sup>
          </Typography>
        </>
      ),
    },
    {
      align: "right",
      content: (
        <>
          <Typography variant="body2" sx={{ paddingBottom: 0.5 }}>
            Median
          </Typography>
          <Typography
            variant="body2"
            sx={{ display: "inline-flex", alignItems: "center" }}
          >
            <CustomCircle color={secondaryColor} />
            50<sup>th</sup>
          </Typography>
        </>
      ),
    },
    {
      align: "right",
      content: (
        <>
          <Typography
            variant="body2"
            sx={{ paddingRight: 1, paddingBottom: 0.5 }}
          >
            High
          </Typography>
          <Typography
            variant="body2"
            sx={{ display: "inline-flex", alignItems: "center" }}
          >
            <CustomTriangle colors={{ darkSecondary, lightSecondary }} />
            75<sup>th</sup>
          </Typography>
        </>
      ),
    },
  ];

  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow sx={{ background: gradient }}>
            {headers.map((header, index) => (
              <TableCell
                key={index}
                align={header.align}
                sx={{ paddingY: 1.85, color: "#FFFFFF" }}
              >
                {header.content}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {bodyCells.map((row, index) => (
            <TableRow
              key={index}
              sx={{
                backgroundColor: row.superscript ? "#F2F2F2" : "inherit",
              }}
            >
              <TableCell>
                <Typography variant="body2">{row.label}</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold", whiteSpace: "pre-wrap" }}
                >
                  {row.format(row.plan)}
                </Typography>
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  backgroundColor: getRankColor(row.rank, colors),
                  color: getRankTextColor(row.rank),
                }}
              >
                <Typography variant="body2">{formatRank(row.rank)}</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="body2">{row.format(row.p25)}</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="body2" sx={{ whiteSpace: "pre-wrap" }}>
                  {row.format(row.p50)}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography variant="body2">{row.format(row.p75)}</Typography>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={6} sx={{ paddingY: 1.5, border: "none" }}>
              {notes.map((note, index) => (
                <Box key={index} sx={{ display: "block", paddingY: 0.25 }}>
                  <Typography
                    variant="caption"
                    color="textSecondary"
                    sx={{ display: "block", lineHeight: 1.2 }}
                  >
                    {note}
                  </Typography>
                </Box>
              ))}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
