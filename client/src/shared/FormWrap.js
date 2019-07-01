import styled from 'styled-components';

const FormWrap = styled.div`
  margin-top: 2em;

  input {
    margin-bottom: 1.5em;
    margin-top: 0.5em;
    width: 100%;
  }

  button {
    background: none;
    border: 1px solid #222;
    color: inherit;
    padding: 0.5em 1em;
    text-decoration: none;
    transition: all 0.3s ease;

    &:disabled {
      border-color: #c8c8c8;
      color: #c8c8c8;
    }

    &:hover {
      background: #fff;
    }
  }
`;

export default FormWrap;
