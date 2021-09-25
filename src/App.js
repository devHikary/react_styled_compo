import React from "react";
import { ThemeProvider } from 'styled-components';

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobalStyle } from './Components/Globalstyle'
import { temaClaro, temaEscuro } from './Components/UI/temas';

function App() {
  return (
    <>
      <ThemeProvider theme={temaClaro}>
        <GlobalStyle />
        <Cabecalho />
        <Container />
      </ThemeProvider>
    </>
  );
}

export default App;
