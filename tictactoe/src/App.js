import React from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {Container, CssBaseline} from "@mui/material";
import Board from "./modules/board";
import styles from "./styles.module.css";

const {center} = styles;

const theme = createTheme({
  palette: {
    mode: "dark"
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div className={center}>
        <Container maxWidth="md">
          <Board/>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
