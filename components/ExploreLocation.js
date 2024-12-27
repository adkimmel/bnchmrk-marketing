// components/ExploreLocation.js
"use client";
import { Grid } from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";
import FilterCard from "@/components/FilterCard";
import { statesAbbrLookup } from "@/utils/locationConfig";

export default function ExploreLocation({ locations }) {
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
        {locations.map(({ value, display_name, region_name }) => (
          <Grid item xs={6} sm={4} md={2.4} key={value}>
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={`/explore-data/locations/${statesAbbrLookup[value].slug}`}
                style={{ textDecoration: "none", width: "100%" }}
              >
                <FilterCard top={display_name} bottom={region_name} state />
              </Link>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
}
