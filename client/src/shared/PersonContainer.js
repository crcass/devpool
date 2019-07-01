import styled from 'styled-components';

const PersonContainer = styled.div`
  background: ${props => !props.account && '#e8e8e8'};
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  margin: 2em auto;
  width: 320px;

  h2,
  h3 {
    margin-left: 1em;
  }

  img {
    height: auto;
    margin-top: 1em;
    width: 100%;
  }

  a {
    color: #222;
    text-align: center;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: rgba(249, 207, 210, 1);
      text-decoration: underline;
    }
  }

  p {
    margin: 1em;
  }

  button {
    margin-bottom: 1em;
    margin-top: 1em;
  }
`;

export default PersonContainer;
