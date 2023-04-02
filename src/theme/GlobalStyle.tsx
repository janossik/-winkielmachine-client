import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin-top: 0;
  }
  html{
    font-size: 16px;
  }
  body{
    background: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.primaryText};
    font-size: 16px;
    font-family: ${({ theme: { font } }) => font.family.primary};
    font-weight: ${({ theme: { font } }) => font.weight.extraLight};
  }
  li{
    font-size: ${({ theme }) => theme.font.size.ig};
    font-weight: ${({ theme }) => theme.font.weight.extraLight};
    letter-spacing: 1px;
  }
  textarea{
    resize: none;
  }
  *:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.primary};
  }
  ::-webkit-scrollbar {
    width:  8px;
  }
  ::-webkit-scrollbar-track {
    background: grey;
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme: { color } }) => color.elements};
  }
  ::-webkit-scrollbar-thumb:hover {
    opacity: 1;
  }
  button{
    cursor: pointer;
  }
`;

export default GlobalStyle;
