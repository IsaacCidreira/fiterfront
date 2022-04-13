import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inika", sans-serif;
}

body{
  background: ${({ theme }) => theme.colors.background};
}

button{
  cursor: pointer;
  border: none;
}

`;