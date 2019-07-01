import styled from 'styled-components';

const StyledHeader = styled.header`
  align-items: center;
  background: ${props => (props.auth.loggedIn ? '#000' : null)};
  color: #f3f3f3;
  display: flex;
  justify-content: space-between;
  height: 2.75em;
  left: 0;
  position: fixed;
  top: 0;
  transition: all 0.3s ease;
  width: 100%;
  z-index: 999;

  button {
    align-items: center;
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    filter: invert(95%);
    height: 2.75em;
    justify-content: center;
    width: 2.75em;

    img {
      width: 100%;
      height: auto;
    }
  }
`;

export default StyledHeader;
