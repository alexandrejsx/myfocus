import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,600,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    font: 14px 'Roboto', sans-serif;
    font-weight: 500;
    background: #f5f6fa;
    color: #333;
    -webkit-font-smoothing: antialiased !important;
    overflow-x: unset;
  }

  ul {
    list-style: none;
  }
  
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1; 
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #353b48; 
    border-radius: 10px;
  }

`;
