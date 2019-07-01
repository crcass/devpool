import React from 'react';
import Hero from '../../shared/Hero';
import Main from '../../shared/Main';
import TextContainer from '../../shared/TextContainer';

const About = () => (
  <Main>
    <Hero>
      <TextContainer>
        <h2>About Devpool</h2>
        <h3>
          <i>"Send me good candidates."</i>
        </h3>
        <p>
          Recruiters hear this all the time. Finding the best Junior Developers
          takes the right combintation of skill, luck, and perseverance. Devpool
          gives recruiters the tools they need to find the best talent.
        </p>
        <p>
          Use Devpool to post Junior Developer jobs and our bootcamp students
          will see them right away. Find a candidate perfect for your position?
          Send them a message with a link to your job.
        </p>
        <p>
          Students can log in, see their messages & currently available
          positions, and make sure their LinkedIn and Portfolio links are
          up-to-date.
        </p>
        <p>With Devpool, finding the right Junior Developers is easy.</p>
      </TextContainer>
    </Hero>
  </Main>
);

export default About;
