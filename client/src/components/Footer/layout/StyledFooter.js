import styled from 'styled-components';
import bg from '../../../shared/images/creampaper.png';

const StyledFooter = styled.footer`
  background-image: ${props =>
    props.auth.loggedIn
      ? ` linear-gradient(
      rgba(249, 207, 210, 0.5),
      rgba(249, 207, 210, 0.5)
    ),
    url(${bg})`
      : null};
  bottom: ${props => (props.auth.loggedIn ? null : 0)};
  left: ${props => (props.auth.loggedIn ? null : 0)};
  position: ${props => (props.auth.loggedIn ? null : 'fixed')};
`;

export default StyledFooter;
