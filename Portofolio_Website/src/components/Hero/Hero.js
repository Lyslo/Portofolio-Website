import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My personal portfolio
      </SectionTitle>
      <SectionText>
        This website provides an overview of all my personal projects & skills.
      </SectionText>
      <Button onClick= {() => window.location = '#tech'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;