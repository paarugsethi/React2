import { useState } from "react";
import TodoInput from "./Todoinput";
import TodoItem from "./TodoItem";
// import styles from "./MainTodo.module.css";

const Todo = () => {
    const [todos, setTodos] = useState([]);
    // const [showCompleted, setShowCompleted] = useState(false);

    const handleTaskCreate = (title) => {
        const payload = {
            title: title,
            status: false,
            id: todos.length + 1
        };
        setTodos([...todos, payload]);
    };

    // TOGGLE FUNCTION
    const handleToggle = (id) => {
        const updatedTodos = todos.map(item => item.id === id ? { ...item, status: !item.status } : item)
        setTodos(updatedTodos);
    }

    // DELETE FUNCTION
    const handleDelete = (id) => {
        setTodos(todos.filter(item => item.id !== id))
    };

    return (
        <>
            {/* Todo Input */}
            <TodoInput onTaskCreate={handleTaskCreate} />
            {/* List of Items */}
            {todos.map((todo) => {
                return <TodoItem
                    id={todo.id}
                    key={todo.id}
                    title={todo.title}
                    status={todo.status}
                    handleDelete={handleDelete}
                    handleToggle={handleToggle}
                />
            })}

            {/* <div>
                <button className={styles.button} onClick={() => setShowCompleted(!showCompleted)}>SHOW COMPLETED</button>
            </div>
            {showCompleted && todos.filter((todo) => {
                if (todo.status) {
                    return <TodoItem id={todo.id}
                        key={todo.id}
                        title={todo.title}
                        status={todo.status}
                        handleDelete={handleDelete}
                        handleToggle={handleToggle}
                    />
                }
                else {
                    return <div>HELLO</div>
                }
            })
            } */}

        </>
    )
}

export default Todo;