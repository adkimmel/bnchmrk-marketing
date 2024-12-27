// components/ExploreIndustry.js
"use client";
import { Grid } from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";
import FilterCard from "@/components/FilterCard";

export default function ExploreIndustry({ industries }) {
  const gridStyle = {
    "--columns": { xs: "2", sm: "3", md: "4", lg: "5" },
    maxWidth: "1200px",
    margin: "0 auto",
    rowGap: "1rem",
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      <Grid container spacing={2} sx={gridStyle}>
        {industries.map(({ value, display_name }) => {
          let sector = null;
          let industry_name = null;

          if (display_name.includes(" - ")) {
            const [part1, part2] = display_name.split(" - ");
            sector = part1;
            industry_name = part2;
          } else {
            industry_name = display_name;
          }

          return (
            <Grid item xs={6} sm={4} md={2.4} key={value}>
              <motion.div
                variants={cardVariants}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={`/explore-data/industries/${value}`}
                  style={{ textDecoration: "none", width: "100%" }}
                >
                  <FilterCard top={industry_name} bottom={sector} />
                </Link>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>
    </motion.div>
  );
}
