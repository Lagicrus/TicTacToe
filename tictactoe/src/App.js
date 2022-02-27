import React, {useEffect} from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {Container, CssBaseline} from "@mui/material";
import Board from "./modules/board";
import styles from "./styles.module.css";
import Players from "./modules/players";
import CurrentPlayer from "./modules/currentPlayer";
import PopupMessage from "./modules/popupMessage";

const {center} = styles;

const theme = createTheme({
  palette: {
    mode: "dark"
  }
});

function App() {
  const [player1Score, setPlayer1Score] = React.useState(0);
  const [player2Score, setPlayer2Score] = React.useState(0);
  const [isPlayer1Turn, setIsPlayer1Turn] = React.useState(true);
  const [items, setItems] = React.useState([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
  const [popupMessage, setPopupMessage] = React.useState("");

  const defaultItems = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

  function allEqual(array) {
    return array.every((v) => v === array[0]);
  }

  const handlePlayClick = (row, col) => {
    if (items[row][col] === 0) {
      setItems(
        items.map((itemsRow, rowIndex) =>
          itemsRow.map((itemsCol, colIndex) => {
            if (rowIndex === row && colIndex === col) {
              return isPlayer1Turn ? 1 : 2;
            }
            return itemsCol;
          })
        )
      );
      setIsPlayer1Turn(!isPlayer1Turn);
    }
  };

  useEffect(() => {
    if(items.toString() === defaultItems.toString()) {
      return;
    }
    for (const row of items) {
      if(row.includes(0)) {
        continue;
      }
      if(allEqual(row)) {
        if (row[0] === 1) {
          setPlayer1Score(player1Score + 1);
        } else if (row[0] === 2) {
          setPlayer2Score(player2Score + 1);
        }

        setPopupMessage(`Player ${row[0]} won!`);
        setTimeout(() => {
          setItems(defaultItems);
          setIsPlayer1Turn(true);
          setPopupMessage("");
        }, 2000);
      }
    }
  }, [items]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div className={center}>
        <PopupMessage popupMessage={popupMessage}/>
        <Container maxWidth="md">
          <CurrentPlayer isPlayer1Turn={isPlayer1Turn}/>
          <Board handlePlayClick={handlePlayClick} items={items}/>
          <Players player1Score={player1Score} player2Score={player2Score}/>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
