import styled from 'styled-components';

const CommentsWrap = styled.div`
  align-items: center;
  border-bottom: 1px solid #222;
  display: flex;
  justify-content: space-between;

  p {
    width: 50%;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export default CommentsWrap;
