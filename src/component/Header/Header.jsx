import styled from "styled-components";
import Navigation from "../Header/Navigation"

const Header = (props) => {
  return (
    <StyledHeader>
      <h1>A Typical page</h1>
      {props.isAuthenticated &&(
      <Navigation onClick={props.onChangePage}
                  onLogout={props.onLogout}/>
      )}
    
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  background-color: #700170;
  padding: 20px 20px;
  color: white;
display: flex;
justify-content: space-between;
`
