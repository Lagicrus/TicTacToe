import React from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {Container, CssBaseline} from "@mui/material";
import Board from "./modules/board";
import styles from "./styles.module.css";
import Players from "./modules/players";

const {center} = styles;

const theme = createTheme({
  palette: {
    mode: "dark"
  }
});

function App() {
  const [player1Score, setPlayer1Score] = React.useState(0);
  const [player2Score, setPlayer2Score] = React.useState(0);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div className={center}>
        <Container maxWidth="md">
          <Board/>
          <Players player1Score={player1Score} player2Score={player2Score}/>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
