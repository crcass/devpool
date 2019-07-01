import styled from 'styled-components';

const MenuContainer = styled.div`
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  position: absolute;
  text-align: center;
  transform: ${props => (props.open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease;
  top: 2.75em;
  width: 320px;

  ul {
    list-style: none;

    li {
      padding: 1em 0;
      width: 100%;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    button {
      margin-left: 7.5em;
    }
  }
`;

export default MenuContainer;
