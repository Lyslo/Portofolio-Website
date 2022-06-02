import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the IT-industry.
      From hardware to design, front and back-end development.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size ="5rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            React.js<br/>
            JavaScript<br/>
            HTML & CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size ="5rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Node.js<br/>
            SQL<br/>
            Java
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size ="5rem" />
        <ListContainer>
          <ListTitle>UI/UX-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Tools like Sketch
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
