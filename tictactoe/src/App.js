import React, {useEffect} from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Board from "./modules/board";
import styles from "./styles.module.css";
import Players from "./modules/players";
import TitleBar from "./modules/titleBar";
import PopupMessage from "./modules/popupMessage";
import {allEqual} from "./tools";

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
  const [is1PlayerMode, setIs1PlayerMode] = React.useState(true);
  const [checking, setChecking] = React.useState(false);

  const defaultItems = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

  // Reset the game
  function resetBoard() {
    setItems(defaultItems);
    setIsPlayer1Turn(true);
    setPlayer1Score(0);
    setPlayer2Score(0);
    setTieScore(0);
  }

  // Handles a user(or computer) move
  const handlePlayClick = (row, col) => {
    if (items[row][col] === 0) {
      setChecking(true);
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

  // Handles the popup message handler as a wrapper function
  // To reduce duplicated code in other places
  function popupHandler(message) {
    setPopupMessage(message);
    setTimeout(() => {
      setItems(defaultItems);
      setIsPlayer1Turn(true);
      setPopupMessage("");
      setChecking(false);
    }, 2000);
  }

  // Handles drawing
  function drawHandling() {
    popupHandler("Draw!");
  }

  // Handles checking if a given row is a "win"
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

  // When a move is made, iterate through all possible win directions
  useEffect(() => {
    if(items.toString() === defaultItems.toString()) {
      return;
    }
    let anyoneWon = false;
    setChecking(true);

    // Gets the two diagonal directions
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
    if(anyoneWon) {
      return;
    }

    if(!anyoneWon) {
      for(const row of items) {
        if(row.includes(0)) {
          setChecking(false);
          return;
        }
      }
    }
    setTieScore(tieScore + 1);
    drawHandling();
  }, [items]);

  // Handles the computer's move if enabled
  useEffect(() => {
    if(is1PlayerMode && !isPlayer1Turn && !checking) {
      setTimeout(() => {
        while(true) {
          const randomRow = Math.floor(Math.random() * 3);
          const randomCol = Math.floor(Math.random() * 3);
          if(items[randomRow][randomCol] === 0) {
            handlePlayClick(randomRow, randomCol);
            setIsPlayer1Turn(true);
            break;
          }

          // Fail-over to check if the board is full to break the loop
          if(!items[0].includes(0) && !items[1].includes(0) && !items[2].includes(0)) {
            break;
          }
        }
      }, 500);
    }
    
  }, [isPlayer1Turn, is1PlayerMode, checking]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div className={center}>
        <PopupMessage popupMessage={popupMessage}/>
        <Container maxWidth="md">
          <TitleBar
            isPlayer1Turn={isPlayer1Turn}
            is1PlayerMode={is1PlayerMode}
            setIs1PlayerMode={setIs1PlayerMode}
            resetBoard={resetBoard}
          />
          <Board handlePlayClick={handlePlayClick} items={items} disabled={is1PlayerMode && !isPlayer1Turn}/>
          <Players player1Score={player1Score} player2Score={player2Score} tieScore={tieScore}/>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
