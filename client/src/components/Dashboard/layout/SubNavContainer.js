import styled from 'styled-components';

const SubNav = styled.nav`
  align-items: center;
  background: rgba(249, 207, 210, 1);
  color: #fff;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 2.75em;
  width: 100%;

  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      margin: 0 0.85em;
    }
    a {
      color: #000;
      text-decoration: none;
    }
  }
`;

export default SubNav;
