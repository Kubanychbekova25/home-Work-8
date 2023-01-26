import styled from 'styled-components'

export const  Button =({children,bgColor,disabled,onClick})=>{
    return( <StyledButton bgColor={bgColor} disabled={disabled} onClick={onClick}>{children}</StyledButton>)
}

const StyledButton =styled.button`
    padding: 10px 20px;
    margin: 0.3rem;
    background-color: ${(props)=>props.bgColor ? '#50015F' :'violet'};
    border:none;
    border-radius: 5px;
    :disabled{
        background-color:gray;
    }
`