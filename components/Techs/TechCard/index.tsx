import React from 'react'
import { iTech } from '../../../interfaces/global'
import { ThemeLabel, ThemeTitle } from '../../../styles/typography';
import { PercentBar, ThemeCard } from '../../../styles/visual';

interface iTechCard{
    tech: iTech;
}
const TechCard: React.FC<iTechCard> = ({ tech }) => {
  return (
    <ThemeCard padding={{ all: '2rem'}}>
        <ThemeLabel labelColor='white' labelMargin={{ bottom: '1rem'}}>{tech.name}</ThemeLabel>
        <PercentBar percentValue={tech.proficiency} backgroundColor='primary'/>
    </ThemeCard>
  )
}

export default TechCard