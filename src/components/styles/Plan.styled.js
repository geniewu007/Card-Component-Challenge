import styled from "styled-components";

export const StyledPlan = styled.div`
    background-color: hsl(225, 100%, 98%);
    border-radius: 5px;
    border: 0;
    text-align: center; 
    font-family: 'Poppins', sans-serif;
    width: 80%;
    margin: auto;
    padding-top:20px;
    padding-bottom: 20px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`
export const StyledIcon = styled.div`
    text-align: center;
    flex: 1;
    a {
        border-radius: 50%;
        background-color: hsl(225, 100%, 94%);
        padding: 10px;
        width:16px;
        height: 16px;
        color: gray;
    }
`

export const StyledOption = styled.div`
    text-align: left;
    flex: 2;
    font-weight: 700;
    font-size: 12px;
    color: hsl(223, 47%, 23%);
`

export const StyledCancel = styled.div`
    text-align: center;
    flex: 1;
    a {
        font-size: 12px;
        font-weight: 700;
        text-decoration: underline;

        &:hover {
            text-decoration: none;
            opacity: 0.8;
        }
        }

`