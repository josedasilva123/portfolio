/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { iProject } from "../../../../interfaces/global";
import { ThemeButton } from "../../../../styles/buttons";
import { FlexRow } from "../../../../styles/grid";
import { ThemeTitle } from "../../../../styles/typography";
import { ThemeCard, ThemeTag } from "../../../../styles/visual";
import { MdLink } from "react-icons/md";
import { motion } from "framer-motion"

interface iProjectCard {
  project: iProject;
}

const ProjectCard: React.FC<iProjectCard> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <ThemeCard padding={{ all: "2rem" }}>
      <FlexRow
        gap={{ default: '.4rem' }}
        flexWrap={{ default: "wrap" }}
        rowMargin={{ bottom: ".4rem" }}
      >
        {project.areas.map((area) => (
          <ThemeTag key={area} tagColor="secondary" tagType="outline">
            {area}
          </ThemeTag>
        ))}
      </FlexRow>
      <ThemeTitle
        titleTag="h4"
        titleSize="subtitle"
        titleColor="white"
        titleMargin={{ bottom: "2rem" }}
        tabIndex={0}
      >
        {project.name}
      </ThemeTitle>
      <a href={project.link} target="_blank">
        <ThemeButton buttonStyle="outline2" buttonSize="md">
          <MdLink size={24} />
          Acessar projeto
        </ThemeButton>
      </a>
    </ThemeCard>
    </motion.div>
    
  );
};

export default ProjectCard;
