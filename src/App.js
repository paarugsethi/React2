import React from 'react';
import styles from "./App.module.css"
import TicTacToe from './Components/TICTACTOE/Game';


function App() {
  document.body.style = 'background: #20232A;';
  return (
    <div style= {{margin: 4}} className={styles.App}>
      <h1 style={{fontFamily: 'Poppins', color:"white"}}>Tic Tac Toe</h1>
      <TicTacToe/>
    </div>
  );
}

export default App;
