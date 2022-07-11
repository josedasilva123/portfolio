import React from "react";
import { iTech } from "../../../interfaces/global";
import { ThemeLabel } from "../../../styles/typography";
import { PercentBar, ThemeCard } from "../../../styles/visual";

import { motion } from "framer-motion";

interface iTechCard {
  tech: iTech;
}
const TechCard: React.FC<iTechCard> = ({ tech }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <ThemeCard padding={{ all: "2rem" }}>
        <ThemeLabel labelColor="white" labelMargin={{ bottom: "1rem" }}>
          {tech.name}
        </ThemeLabel>
        <PercentBar percentValue={tech.proficiency} backgroundColor="primary" />
      </ThemeCard>
    </motion.div>
  );
};

export default TechCard;
