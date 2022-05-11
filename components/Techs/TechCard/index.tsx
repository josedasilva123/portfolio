import React from 'react'
import { iTech } from '../../../interfaces/global'
import { ThemeLabel, ThemeTitle } from '../../../styles/typography';
import { PercentBar } from '../../../styles/visual';
import { TechCardLi } from './styles';

interface iTechCard{
    tech: iTech;
}
const TechCard: React.FC<iTechCard> = ({ tech }) => {
  return (
    <TechCardLi>
        <ThemeLabel labelColor='white' labelMargin={{ bottom: '1rem'}}>{tech.name}</ThemeLabel>
        <PercentBar percentValue={tech.proficiency} backgroundColor='primary'/>
    </TechCardLi>
  )
}

export default TechCard