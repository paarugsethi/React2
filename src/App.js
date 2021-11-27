import React from 'react';
import styles from "./App.module.css"
import Todo from './Components/ListTodo/Todo';


function App() {
  document.body.style = 'background: #D7DEF6;';
  return (
    <div style= {{margin: 4}} className={styles.App}>
      <h1 style={{fontFamily: 'Inter'}}>To-do or not to do?</h1>
      <Todo/>
    </div>
  );
}

export default App;
