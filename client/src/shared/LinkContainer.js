import styled from 'styled-components';

const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5em;

  a {
    padding: 0.5em 1em;
    text-align: center;
    width: 33%;

    &:nth-child(2) {
      border-right: 1px solid #c8c8c8;
      border-left: 1px solid #c8c8c8;
    }
  }
`;

export default LinkContainer;
