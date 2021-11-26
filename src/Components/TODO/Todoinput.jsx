import {useState} from "react";
import styles from "./TodoInput.module.css"

const TodoInput = ({onTaskCreate}) => {
    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value);
    }

    const handleClick = () => {
        if (text === ""){
            alert("Please enter a task.");
            return;
        }
        // onTaskCreate()
        onTaskCreate(text)
    }
    
    return (
        <div className={styles.inputdiv}>
            <input 
                className={styles.input}
                type="text" 
                placeholder="Add a Task" 
                value={text} 
                onChange={handleChange}
            />
            <button className={styles.button} onClick={handleClick}><h2 style={{margin: 0}}>+</h2></button>
        </div>
    )
};

export default TodoInput;