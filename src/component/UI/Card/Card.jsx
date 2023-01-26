import styled from "styled-components";
import { Users } from "../../users/Users";

import Timer from "../../Timer/Timer";

export const Card = ({ children, currentPage }) => {
  return (
    <Container>
      {children}
      {currentPage === "users" && <Users />}
      {currentPage === "timer" && <Timer />}
    </Container>
  );
};

const Container = styled.div`
  padding: 2rem 1.5rem;
  box-shadow:
       inset 0 -3em 3em rgba(0,0,0,0.1),
             0 0  0 2px rgb(255,255,255),
             0.3em 0.3em 1em rgba(0,0,0,0.3);

  width: 450px;
  margin: 10px auto;
  border-radius: 10px;
`;
