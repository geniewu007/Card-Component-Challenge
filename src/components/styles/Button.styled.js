import styled from "styled-components";

export const StyledButton = styled.button`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;700;900&display=swap');
    
    font-family: 'Poppins', sans-serif; 
    width: 80%;
    border-radius: 8px;
    border: 1px #fff;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);
    font-size: 14px;
    font-weight: 700;
    color: white;
    background-color: hsl(245, 75%, 52%);
    cursor: pointer;
    margin-top: 30px;
    padding: 10px;

    &:hover {
        opacity: 0.7;
        /* background-color: hsl(224, 23%, 55%); */
    }

`