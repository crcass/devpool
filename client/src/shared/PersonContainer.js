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
    background: none;
    border: 1px solid #f3f3f3;
    color: inherit;
    margin-bottom: 1em;
    margin-top: 1em;
    padding: 0.5em 1em;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(255, 255, 255, 1);
      color: rgba(20, 20, 20, 1);
      cursor: pointer;
    }

    &:active {
      background: rgba(249, 207, 210, 1);
      border-color: rgba(249, 207, 210, 1);
      color: rgba(20, 20, 20, 1);
    }

    &:disabled {
      background: none;
      cursor: not-allowed;
    }
  }
`;

export default PersonContainer;
