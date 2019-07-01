import styled from 'styled-components';

const TextContainer = styled.section`
  max-width: 320px;
  p {
    max-width: 90vw;
  }

  @media (min-width: 769px) {
    max-width: 50vw;
  }
`;

export default TextContainer;
