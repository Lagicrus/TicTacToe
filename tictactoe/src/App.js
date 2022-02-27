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
  const [tieScore, setTieScore] = React.useState(0);
  const [isPlayer1Turn, setIsPlayer1Turn] = React.useState(true);
  const [items, setItems] = React.useState([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
  const [popupMessage, setPopupMessage] = React.useState("");
  const [is1PlayerMode, setIs1PlayerMode] = React.useState(false);

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

  function popupHandler(message) {
    setPopupMessage(message);
    setTimeout(() => {
      setItems(defaultItems);
      setIsPlayer1Turn(true);
      setPopupMessage("");
    }, 2000);
  }

  function drawHandling() {
    popupHandler("Draw!");
  }

  function winHandling(row) {
    if(allEqual(row)) {
      if(row.includes(0)) {
        return false;
      }
      if (row[0] === 1) {
        setPlayer1Score(player1Score + 1);
      } else if (row[0] === 2) {
        setPlayer2Score(player2Score + 1);
      }

      popupHandler(`Player ${row[0]} won!`);
      return true;
    }
    return false;
  }

  useEffect(() => {
    if(items.toString() === defaultItems.toString()) {
      return;
    }
    let anyoneWon = false;

    const diagTLBR = [items[0][0], items[1][1], items[2][2]];
    const diagTRBL = [items[0][2], items[1][1], items[2][0]];

    for (const row of items) {
      if(row.includes(0)) {
        continue;
      }

      anyoneWon = winHandling(row);
      if(anyoneWon) {
        return;
      }
    }
    for (const columnIndex of [0,1,2]) {
      const column = items.map((columnIndexRow) => columnIndexRow[columnIndex]);
      anyoneWon = winHandling(column);
      if(anyoneWon) {
        return;
      }
    }
    anyoneWon = winHandling(diagTLBR);
    if(anyoneWon) {
      return;
    }
    anyoneWon = winHandling(diagTRBL);

    if(!anyoneWon) {
      for(const row of items) {
        if(row.includes(0)) {
          return;
        }
      }
    }
    setTieScore(tieScore + 1);
    drawHandling();
  }, [items]);

  useEffect(() => {
    if(is1PlayerMode && !isPlayer1Turn) {
      setTimeout(() => {
        while(true) {
          const randomRow = Math.floor(Math.random() * 3);
          const randomCol = Math.floor(Math.random() * 3);
          if(items[randomRow][randomCol] === 0) {
            handlePlayClick(randomRow, randomCol);
            setIsPlayer1Turn(true);
            break;
          }
        }
      }, 500);
    }
    
  }, [isPlayer1Turn, is1PlayerMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div className={center}>
        <PopupMessage popupMessage={popupMessage}/>
        <Container maxWidth="md">
          <CurrentPlayer isPlayer1Turn={isPlayer1Turn} is1PlayerMode={is1PlayerMode} setIs1PlayerMode={setIs1PlayerMode}/>
          <Board handlePlayClick={handlePlayClick} items={items}/>
          <Players player1Score={player1Score} player2Score={player2Score} tieScore={tieScore}/>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
