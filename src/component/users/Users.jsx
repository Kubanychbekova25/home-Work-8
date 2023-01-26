import { useEffect } from "react";
import { useState } from "react";
import  styled  from "styled-components";
export const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    };
    getUsers();
  }, [setUsers]);

  return (
    <>
      <StyledH1>USERS</StyledH1>
    
      <ul>
        {users.map((item) => {
          return   <Container> <StyledLi key={item.id}>{item.name}</StyledLi></Container>
        })}
      </ul>
      
    </>
  );
};
const StyledH1=styled.h1`
    text-align: center;
`


const Container=styled.div`
    border:1px solid blueviolet;
    margin: 1rem;
`

const StyledLi=styled.li`
    list-style: none;
    margin: 1rem;
    font-style: italic;
    color: #670b67;
`