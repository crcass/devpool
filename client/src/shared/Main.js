import styled from 'styled-components';
import bg from './images/bg.jpg';

const Main = styled.main`
  background-image: ${props =>
    !props.loggedIn
      ? `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${bg})`
      : null};
  background-position: center;
  background-size: cover;
  color: ${props => (!props.loggedIn ? '#f3f3f3' : '#000')};
  height: 100vh;
  margin-top: ${props => (!props.loggedIn ? null : '6em')};
  overflow: scroll;
`;

export default Main;
