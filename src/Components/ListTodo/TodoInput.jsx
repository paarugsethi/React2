import React, { useState } from "react";
// import styles from "./TodoItem.module.css";
import styles from "./TodoInput.module.css";

export default function ListTodoInput({ onSubmit }) {
    const [state, setState] = useState({
        title: "",
        description: ""
    });

    const handleInputChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault()
        onSubmit(state);
    };

    return (
        <form className={styles.inputdiv} onSubmit={onFormSubmit}>
            <div>
                <input
                    className = {styles.input}
                    placeholder="title"
                    name="title"
                    value={state.title}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <input
                    className = {styles.input} 
                    placeholder="Description"
                    name="description"
                    value={state.description}
                    onChange={handleInputChange}
                />
            </div>
            <input className={styles.button} type="submit" value="ADD"/>
        </form>
    )

}
