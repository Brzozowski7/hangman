import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Patrick Hand', cursive;
    }
`;

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

export const Heading = styled.h1`
  font-size: 42px;
`;
