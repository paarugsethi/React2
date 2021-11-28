import React from 'react';
import styles from "./App.module.css"
// import TicTacToe from './Components/TICTACTOE/Game';
import Todo from './Components/TODO/Todo';


function App() {
  document.body.style = 'background: #20232A;';
  return (
    <div style= {{margin: 4}} className={styles.App}>
      <h1 style={{fontFamily: 'Poppins', color:"white"}}>To-do List</h1>
      {/* <TicTacToe/> */}
      <Todo/>
    </div>
  );
}

export default App;
