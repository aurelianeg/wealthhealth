import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

   html {
      font-family: Avenir, Arial, sans-serif;
   }

   h1, h2, h3 {
      font-family: 'CopperPlate', sans-serif;
      font-weight: 500;
   }

   html {
      min-height: 100%;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      text-align: center;
   }
 
   body {
      height: 100%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: stretch;
   }

   main {
      min-height: calc(100vh - 120px - 40px);
      box-sizing: border-box;
      margin: 7vw;
      margin-top: 0px;
      margin-bottom: 40px;
   }
`;

export default GlobalStyle;
