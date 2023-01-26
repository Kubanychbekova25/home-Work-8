import styled from "styled-components";
import { Button } from "../UI/Button/Button";
import { Users } from "../users/Users";

const Navigation = (props) => {
  return (
    <>
      <StyledNav>
        <Button onClick={() => props.onClick('users')}>USERS</Button>
        <Button onClick={() => props.onClick('timer')}>Timer</Button>
        <Button onClick={props.onLogout}>Logout</Button>
      </StyledNav>
    </>
  );
};
export default Navigation;

const StyledNav = styled.nav`
  margin-top: 0rem;
  margin-left: 30rem;
  display: flex;
  color: azure;
  text-decoration: none;
`;
