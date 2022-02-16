import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    margin-left: 10px;
    margin-right: 10px;
    & > div {
        flex: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`